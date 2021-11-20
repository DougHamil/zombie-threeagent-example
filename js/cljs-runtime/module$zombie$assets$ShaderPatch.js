var module$node_modules$three$build$three_module = shadow.js.require("module$node_modules$three$build$three_module", {});
module$node_modules$three$build$three_module.ShaderChunk.fog_pars_vertex += `
#ifdef USE_FOG
  varying vec3 vWorldPosition;
#endif
`;
module$node_modules$three$build$three_module.ShaderChunk.fog_vertex += `
#ifdef USE_FOG
  vWorldPosition = worldPosition.xyz;
#endif
`;
module$node_modules$three$build$three_module.ShaderChunk.fog_pars_fragment += `
#ifdef USE_FOG
  varying vec3 vWorldPosition;
  uniform vec3 playerPosition;
  uniform float playerFogMinDistance;
  uniform float playerFogMaxDistance;
  uniform float fogHeight;
  uniform vec3 time;

  vec3 rgb2hsb( in vec3 c ) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = mix(vec4(c.bg, K.wz),
                  vec4(c.gb, K.xy),
                  step(c.b, c.g));
      vec4 q = mix(vec4(p.xyw, c.r),
                  vec4(c.r, p.yzx),
                  step(p.x, c.r));
      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),
                  d / (q.x + e),
                  q.x);
  }
// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
#endif
`;
var FOG_APPLIED_LINE$$module$zombie$assets$ShaderPatch = "gl_FragColor.rgb \x3d mix( gl_FragColor.rgb, fogColor, fogFactor );";
module$node_modules$three$build$three_module.ShaderChunk.new_fog_fragment = module$node_modules$three$build$three_module.ShaderChunk.fog_fragment.replace(FOG_APPLIED_LINE$$module$zombie$assets$ShaderPatch, `
  float fogNoiseFactor = fogHeight + clamp(snoise((vWorldPosition.xz + (time.x / 3.0))/3.0), 0.0, 1.0);
  float fogFactor2 = 1.0 - smoothstep( 0.0, fogNoiseFactor, vWorldPosition.y );
  float playerFogFactor = smoothstep(playerFogMinDistance, playerFogMaxDistance,
                                     length(vWorldPosition.xz - playerPosition.xz));
  vec3 lightHSB = rgb2hsb(outgoingLight);
  float fogLightThreshold = 0.2;
  float fogLightFactor = lightHSB.z > fogLightThreshold ? 0.0 : 1.0 - smoothstep(0.01, fogLightThreshold, lightHSB.z);

  fogFactor = fogLightFactor  * min(playerFogFactor, fogFactor2);// * min(playerFogFactor, fogFactor2);
  vec3 finalFogColor = fogColor;// mix(fogColor, directLight.color, fogLightFactor);

  gl_FragColor.rgb = mix( gl_FragColor.rgb, finalFogColor, fogFactor);

  //gl_FragColor.r = time.x;
`);
module$node_modules$three$build$three_module.ShaderLib.sprite.vertexShader = module$node_modules$three$build$three_module.ShaderLib.sprite.vertexShader.replace("#include \x3cfog_vertex\x3e", `
  vec4 worldPosition = mvPosition;
  #include <fog_vertex>
`);
module$node_modules$three$build$three_module.ShaderLib.phong.fragmentShader = module$node_modules$three$build$three_module.ShaderLib.phong.fragmentShader.replace("#include \x3cfog_fragment\x3e", `
  #include <new_fog_fragment>
`);
module$node_modules$three$build$three_module.ShaderLib.phong.uniforms.playerPosition = {value:new module$node_modules$three$build$three_module.Vector3(0, 0, 0)};
module$node_modules$three$build$three_module.ShaderLib.phong.uniforms.playerFogMinDistance = {value:0.0};
module$node_modules$three$build$three_module.ShaderLib.phong.uniforms.playerFogMaxDistance = {value:0.0};
module$node_modules$three$build$three_module.ShaderLib.phong.uniforms.fogHeight = {value:1.5};
module$node_modules$three$build$three_module.ShaderLib.phong.uniforms.time = {value:new module$node_modules$three$build$three_module.Vector3(0.0, 0.0, 0.0)};
class SingleUniformValue$$module$zombie$assets$ShaderPatch {
  const(v = 0) {
    this.set(v);
  }
  get value() {
    return this.v;
  }
  set value(v) {
    this.v = v;
  }
}
/** @const */ 
var module$zombie$assets$ShaderPatch = {};
/** @const */ 
module$zombie$assets$ShaderPatch.SingleUniformValue = SingleUniformValue$$module$zombie$assets$ShaderPatch;

$CLJS.module$zombie$assets$ShaderPatch=module$zombie$assets$ShaderPatch;
//# sourceMappingURL=module$zombie$assets$ShaderPatch.js.map
