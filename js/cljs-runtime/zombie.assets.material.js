goog.provide('zombie.assets.material');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
if((typeof zombie !== 'undefined') && (typeof zombie.assets !== 'undefined') && (typeof zombie.assets.material !== 'undefined') && (typeof zombie.assets.material.uniform_player_position !== 'undefined')){
} else {
zombie.assets.material.uniform_player_position = (new module$node_modules$three$build$three_module.Vector3((0),(0),(0)));
}
if((typeof zombie !== 'undefined') && (typeof zombie.assets !== 'undefined') && (typeof zombie.assets.material !== 'undefined') && (typeof zombie.assets.material.uniform_time !== 'undefined')){
} else {
zombie.assets.material.uniform_time = (new module$node_modules$three$build$three_module.Vector3((0),(0),(0)));
}
zombie.assets.material.create_phong_material = (function zombie$assets$material$create_phong_material(cfg){
var mat = (new module$node_modules$three$build$three_module.MeshPhongMaterial(cljs.core.clj__GT_js(cfg)));
(mat.onBeforeCompile = (function (shader){
(shader.uniforms.playerPosition.value = zombie.assets.material.uniform_player_position);

return (shader.uniforms.time.value = zombie.assets.material.uniform_time);
}));

return mat;
});
zombie.assets.material.phong_loader = (function zombie$assets$material$phong_loader(_key,_path,cfg){
return Promise.resolve(zombie.assets.material.create_phong_material(cfg));
});
zombie.assets.material.sprite_loader = (function zombie$assets$material$sprite_loader(_key,_path,cfg){
return Promise.resolve((new module$node_modules$three$build$three_module.SpriteMaterial(cljs.core.clj__GT_js(cfg))));
});

//# sourceMappingURL=zombie.assets.material.js.map
