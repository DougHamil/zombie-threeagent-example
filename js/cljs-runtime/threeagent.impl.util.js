goog.provide('threeagent.impl.util');
threeagent.impl.util.log = (function threeagent$impl$util$log(m){
return console.log(m);
});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.util !== 'undefined') && (typeof threeagent.impl.util.pi_times_2 !== 'undefined')){
} else {
threeagent.impl.util.pi_times_2 = (Math.PI * 2.0);
}
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.util !== 'undefined') && (typeof threeagent.impl.util.pi !== 'undefined')){
} else {
threeagent.impl.util.pi = Math.PI;
}
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.util !== 'undefined') && (typeof threeagent.impl.util.pi_over_2 !== 'undefined')){
} else {
threeagent.impl.util.pi_over_2 = (Math.PI / 2.0);
}

//# sourceMappingURL=threeagent.impl.util.js.map
