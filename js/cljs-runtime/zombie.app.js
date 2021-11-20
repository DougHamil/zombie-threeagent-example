goog.provide('zombie.app');
zombie.app.start = (function zombie$app$start(){
zombie.scene.core.init_BANG_();

return zombie.ui.core.init_BANG_();
});
/**
 * Entry point
 */
zombie.app.init = (function zombie$app$init(){
return zombie.assets.core.init_BANG_().then(zombie.app.start);
});

//# sourceMappingURL=zombie.app.js.map
