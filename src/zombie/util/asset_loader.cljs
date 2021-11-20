(ns zombie.util.asset-loader
  (:require [clojure.walk :refer [postwalk]]
            [clojure.string :as string]))

(defn- join-path [base addition]
  (let [base (if (string/ends-with? base "/")
               (string/join "" (drop-last base))
               base)
        addition (if (string/starts-with? addition "/")
                   (string/join "" (rest addition))
                   addition)]
    (str base "/" addition)))

(defn- leaf? [v]
  (and (vector? v)
       (keyword? (second v))))

(defn- find-refs [e]
  (let [refs (transient [])]
    (->> e
         (postwalk (fn [n]
                     (when (:asset-ref (meta n))
                       (conj! refs (first n)))
                     n)))
    (set (persistent! refs))))

(defmulti visit
  (fn [_ctx node]
    (if (leaf? node)
      :leaf
      :branch)))

(defmethod visit :branch [ctx node]
  (let [path (join-path (:path ctx) (first node))
        [cfg rest] (if (map? (second node))
                     [(second node) (drop 2 node)]
                     [{} (rest node)])
        ;; Depth-first application of middleware
        mw (concat (:middleware cfg [])
                   (:middleware ctx []))
        ctx (merge ctx
                   cfg
                   {:middleware mw
                    :path path})]
    (mapcat (partial visit ctx) rest)))
        
(defmethod visit :leaf [ctx [path key config]]
  {key {:key key
        :config config
        :middleware (:middleware ctx)
        :references (find-refs config)
        :loader (:loader ctx)
        :path (join-path (:path ctx) path)}})

(defn- detect-duplicates! [nodes]
  (let [dupes (->> nodes
                   (group-by first)
                   (filter #(not= 1 (count (second %))))
                   (map first))]
    (when (seq dupes)
      (throw (ex-info "Duplicate asset keys found" {:duplicate-keys dupes})))))

(defn- detect-cycles!* [nodes visited {:keys [key references]}]
  (if (visited key)
    (throw (ex-info "Cycle detected" {:path visited
                                      :key key}))
    (doseq [n references]
      (detect-cycles!* nodes (conj visited key) (get nodes n)))))

(defn- detect-cycles! [nodes]
  (doseq [[_ n] nodes]
    (detect-cycles!* nodes #{} n)))
  
(defn- validate! [nodes]
  (detect-duplicates! nodes)
  (detect-cycles! (into {} nodes))
  nodes)

(declare get-promise)

(defn- ref->promise [nodes promises database references]
  (js/Promise.all (map
                   #(get-promise nodes promises database (get nodes %))
                   references)))

(defn- resolve-config-refs [database config]
  (->> config
       (postwalk (fn [n]
                   (if (:asset-ref (meta n))
                     (get @database (first n))
                     n)))))

(defn- get-promise [nodes promises database {:keys [key path config references loader middleware]}]
  (if-let [p (get @promises key)]
    p
    (let [p (-> (ref->promise nodes promises database references)
                (.then (fn [_]
                         (let [resolved-config (resolve-config-refs database config)]
                           (println "Loading " key)
                           (-> (loader key path resolved-config)
                               (.then (fn [data]
                                        (js/console.log "Loaded" (str key) data)
                                        [resolved-config data]))))))
                (.then (fn [[resolved-config data]]
                         (let [result (reduce (fn [data mw]
                                                (mw key data resolved-config))
                                              data
                                              middleware)]
                           (swap! database assoc key result)
                           result))))]
      (swap! promises assoc key p)
      p)))

(defn load! [database tree]
  (let [nodes (->> tree
                   (mapcat (partial visit {:path "./" :middleware []}))
                   (validate!)
                   (into {}))
        promises (atom {})]
    (js/Promise.all (->> (vals nodes)
                         (map (partial get-promise nodes promises database))))))

(defn ref [asset-key]
  ^{:asset-ref true}
  [asset-key])
