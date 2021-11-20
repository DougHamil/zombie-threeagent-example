goog.provide('zombie.ui.hud');
zombie.ui.hud.grid_cell = (function zombie$ui$hud$grid_cell(x,y,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),x,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),x,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),y,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),y], null)], null),children], null);
});
zombie.ui.hud.hud_ne = (function zombie$ui$hud$hud_ne(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
zombie.ui.hud.hud_nw = (function zombie$ui$hud$hud_nw(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
zombie.ui.hud.hud_se = (function zombie$ui$hud$hud_se(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null)], null),"Created with",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/DougHamil/threeagent"], null),"Threeagent"], null)], null);
});
zombie.ui.hud.hud_sw = (function zombie$ui$hud$hud_sw(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
zombie.ui.hud.render = (function zombie$ui$hud$render(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"100px auto 100px",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"100px auto 100px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.grid_cell,(1),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.hud_nw], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.grid_cell,(1),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.hud_sw], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.grid_cell,(3),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.hud_ne], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.grid_cell,(3),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.hud_se], null)], null)], null);
});

//# sourceMappingURL=zombie.ui.hud.js.map
