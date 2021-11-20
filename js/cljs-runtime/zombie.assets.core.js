goog.provide('zombie.assets.core');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.assets.core.assets = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["light",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.light.loader], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["laser-bullet",new cljs.core.Keyword("light","laser-bullet","light/laser-bullet",-687019642),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"distance","distance",-1671893894),2.5,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264)], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["material",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.material.phong_loader], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grass",new cljs.core.Keyword("material","grass","material/grass",1459226894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","grass","texture/grass",-1127507694))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile",new cljs.core.Keyword("material","tile","material/tile",1524419497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","tile","texture/tile",-122528867))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["health-bar",new cljs.core.Keyword("material","health-bar","material/health-bar",-1419435050),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),(1),new cljs.core.Keyword(null,"emissive","emissive",-761267227),"red"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["powerup-blue",new cljs.core.Keyword("material","powerup-blue","material/powerup-blue",-1491870893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),(1),new cljs.core.Keyword(null,"emissive","emissive",-761267227),"blue"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lightpost-lamp",new cljs.core.Keyword("material","lightpost-lamp","material/lightpost-lamp",837888829),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),(1),new cljs.core.Keyword(null,"emissive","emissive",-761267227),"yellow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["laser-bullet",new cljs.core.Keyword("material","laser-bullet","material/laser-bullet",-1428547179),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),(1),new cljs.core.Keyword(null,"emissive","emissive",-761267227),"green"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["skin-zombie",new cljs.core.Keyword("material","skin-zombie","material/skin-zombie",-1482736815),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"emissive","emissive",-761267227),(16711680),new cljs.core.Keyword(null,"shininess","shininess",-509323286),(0),new cljs.core.Keyword(null,"emissiveMap","emissiveMap",-1434770057),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","skin-zombie-emissive","texture/skin-zombie-emissive",329306210)),new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),1.0,new cljs.core.Keyword(null,"map","map",1371690461),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","skin-zombie","texture/skin-zombie",230992717))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["skin-robot",new cljs.core.Keyword("material","skin-robot","material/skin-robot",1529773657),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"emissive","emissive",-761267227),(16776960),new cljs.core.Keyword(null,"shininess","shininess",-509323286),(100),new cljs.core.Keyword(null,"emissiveMap","emissiveMap",-1434770057),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","skin-robot-emissive","texture/skin-robot-emissive",1133561335)),new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),1.0,new cljs.core.Keyword(null,"map","map",1371690461),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","skin-robot","texture/skin-robot",-1332474251))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sprites",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.material.sprite_loader], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["laser-particle",new cljs.core.Keyword("material","laser-particle","material/laser-particle",227518348),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"map","map",1371690461),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","particle-laser","texture/particle-laser",1825782447)),new cljs.core.Keyword(null,"alphaMap","alphaMap",1429308995),zombie.util.asset_loader.ref(new cljs.core.Keyword("texture","particle-laser","texture/particle-laser",1825782447)),new cljs.core.Keyword(null,"blending","blending",31165821),module$node_modules$three$build$three_module.AdditiveBlending,new cljs.core.Keyword(null,"fog","fog",1515389980),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(zombie.util.math.pi2 / (2))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/assets",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fonts",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.font.font_loader], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BebasNeue-Regular.ttf",new cljs.core.Keyword("font","bebas","font/bebas",-324908376),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"characters","characters",-163867197),"123467890abcdefghijklmnopqrstuvwyz"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sfx",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.audio.sfx_loader], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["laserLarge_00",new cljs.core.Keyword("sfx","laser-large-old","sfx/laser-large-old",-145117327),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extension","extension",1453374065),".ogg",new cljs.core.Keyword(null,"volume","volume",1900330799),0.5,new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["laserSmall_00",new cljs.core.Keyword("sfx","laser-large","sfx/laser-large",346806202),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extension","extension",1453374065),".ogg",new cljs.core.Keyword(null,"volume","volume",1900330799),0.8,new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["impactPlate_light_00",new cljs.core.Keyword("sfx","impact-plate","sfx/impact-plate",-1268012436),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extension","extension",1453374065),".ogg",new cljs.core.Keyword(null,"volume","volume",1900330799),0.6,new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textures",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.texture.loader], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile.png",new cljs.core.Keyword("texture","tile","texture/tile",-122528867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grass.png",new cljs.core.Keyword("texture","grass","texture/grass",-1127507694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["characters",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["robot.png",new cljs.core.Keyword("texture","skin-robot","texture/skin-robot",-1332474251)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["robot_emissive.png",new cljs.core.Keyword("texture","skin-robot-emissive","texture/skin-robot-emissive",1133561335)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zombieA.png",new cljs.core.Keyword("texture","skin-zombie","texture/skin-zombie",230992717)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zombie_emissive.png",new cljs.core.Keyword("texture","skin-zombie-emissive","texture/skin-zombie-emissive",329306210)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["particles",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Laser1.png",new cljs.core.Keyword("texture","particle-laser","texture/particle-laser",1825782447)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["circleFade.png",new cljs.core.Keyword("texture","particle-circle-fade","texture/particle-circle-fade",-809415940)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["animations",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.animation.loader,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.assets.animation.middleware], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["character",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.assets.animation.kenney_mute_half], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title_idle.fbx",new cljs.core.Keyword("animation","character-title-idle","animation/character-title-idle",-1486178142)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idle.fbx",new cljs.core.Keyword("animation","character-idle-lower","animation/character-idle-lower",-422804994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410),new cljs.core.Keyword(null,"upper","upper",246243906)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idle.fbx",new cljs.core.Keyword("animation","character-idle-upper","animation/character-idle-upper",1550954442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410),new cljs.core.Keyword(null,"lower","lower",1120320821)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idle.fbx",new cljs.core.Keyword("animation","character-idle","animation/character-idle",124331197),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hit_reaction.fbx",new cljs.core.Keyword("animation","character-hit-reaction-upper","animation/character-hit-reaction-upper",-1515929534),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410),new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.Keyword(null,"additive?","additive?",1204187791),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["aim.fbx",new cljs.core.Keyword("animation","character-aim","animation/character-aim",2006416585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"additive?","additive?",1204187791),false,new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410),new cljs.core.Keyword(null,"lower","lower",1120320821)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["run.fbx",new cljs.core.Keyword("animation","character-run","animation/character-run",-138340656)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["run.fbx",new cljs.core.Keyword("animation","character-run-lower","animation/character-run-lower",-113509200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410),new cljs.core.Keyword(null,"upper","upper",246243906)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["run.fbx",new cljs.core.Keyword("animation","character-run-upper","animation/character-run-upper",33420918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410),new cljs.core.Keyword(null,"lower","lower",1120320821)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["walk.fbx",new cljs.core.Keyword("animation","character-walk","animation/character-walk",1537937330)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["death.fbx",new cljs.core.Keyword("animation","character-death","animation/character-death",-1881305432)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shoot.fbx",new cljs.core.Keyword("animation","character-shoot","animation/character-shoot",-131275319),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"additive?","additive?",1204187791),false,new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410),new cljs.core.Keyword(null,"lower","lower",1120320821)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["attack.fbx",new cljs.core.Keyword("animation","character-attack","animation/character-attack",1067264953),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"additive?","additive?",1204187791),false], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["models",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loader","loader",-462395423),zombie.assets.model.loader,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.assets.model.middleware], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["characters",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["characterMedium.fbx",new cljs.core.Keyword("model","robot","model/robot",2007357639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"material","material",460118677),zombie.util.asset_loader.ref(new cljs.core.Keyword("material","skin-robot","material/skin-robot",1529773657))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["characterMedium.fbx",new cljs.core.Keyword("model","zombie","model/zombie",-2034700052),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"material","material",460118677),zombie.util.asset_loader.ref(new cljs.core.Keyword("material","skin-zombie","material/skin-zombie",-1482736815)),new cljs.core.Keyword(null,"pool-size","pool-size",-1637051676),(50)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chest.glb",new cljs.core.Keyword("model","chest","model/chest",2037185423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crate.glb",new cljs.core.Keyword("model","crate","model/crate",838988707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weapons",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blasterA.glb",new cljs.core.Keyword("model","blaster-a","model/blaster-a",-1572950524)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blasterB.glb",new cljs.core.Keyword("model","blaster-b","model/blaster-b",-625519058)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blasterJ.glb",new cljs.core.Keyword("model","blaster-j","model/blaster-j",-1301038468)], null)], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, ["environment",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["road.glb",new cljs.core.Keyword("model","road","model/road",1658348501),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"pools-size","pools-size",1758493828),(120)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ironFence.glb",new cljs.core.Keyword("model","iron-fence","model/iron-fence",-1575439369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"pool-size","pool-size",-1637051676),(40)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["light_curved.glb",new cljs.core.Keyword("model","light-curved","model/light-curved",-1362232478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lightpostSingle.glb",new cljs.core.Keyword("model","lightpost-single","model/lightpost-single",-400655147),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"material-replacements","material-replacements",1900992836),new cljs.core.PersistentArrayMap(null, 1, ["Mesh_lightpostSingle_2",zombie.util.asset_loader.ref(new cljs.core.Keyword("material","lightpost-lamp","material/lightpost-lamp",837888829))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trunk.glb",new cljs.core.Keyword("model","stump","model/stump",-104990604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stoneWall.glb",new cljs.core.Keyword("model","stone-wall","model/stone-wall",-1569889785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"pool-size","pool-size",-1637051676),(180)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stoneWallColumn.glb",new cljs.core.Keyword("model","stone-wall-column","model/stone-wall-column",449710482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["columnLarge.glb",new cljs.core.Keyword("model","column-large","model/column-large",1333926303),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"pool-size","pool-size",-1637051676),(80)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gravestoneDecorative.glb",new cljs.core.Keyword("model","gravestone-decorative","model/gravestone-decorative",-462813728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bench.glb",new cljs.core.Keyword("model","bench","model/bench",1518276913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["coffin.glb",new cljs.core.Keyword("model","coffin","model/coffin",-884569006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"pools-size","pools-size",1758493828),(80)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["coffinOld.glb",new cljs.core.Keyword("model","coffin-old","model/coffin-old",-377982654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["debris.glb",new cljs.core.Keyword("model","debris","model/debris",-777325393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["debrisWood.glb",new cljs.core.Keyword("model","debris-wood","model/debris-wood",-272241908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grave.glb",new cljs.core.Keyword("model","grave","model/grave",2021262544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["graveBorder.glb",new cljs.core.Keyword("model","grave-border","model/grave-border",567473835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),(3)], null)], null)], null)], null)], null)], null);
zombie.assets.core.init_BANG_ = (function zombie$assets$core$init_BANG_(){
return zombie.util.asset_loader.load_BANG_(zombie.state.databases.assets,zombie.assets.core.assets);
});

//# sourceMappingURL=zombie.assets.core.js.map