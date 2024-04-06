function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-CnhQp5bK.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css","assets/AnimatableColor-BmoRcQIs.js","assets/AnimationOptions-B3SzitIA.js","assets/OptionsColor-ComWYICz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";class _{constructor(i,r,e,a){this.position=i,this.size=r,this.fill=e,this.options=a}resize(i,r){this.position=i,this.size=r}}async function d(t,i=!0){if(!t.emitterShapeManager){const{ShapeManager:a}=await s(()=>import("./ShapeManager-BKFAh34R.js"),[]);t.emitterShapeManager=new a(t)}t.addEmitterShapeGenerator||(t.addEmitterShapeGenerator=(a,p)=>{var o;(o=t.emitterShapeManager)==null||o.addShapeGenerator(a,p)});const{EmittersPlugin:r}=await s(()=>import("./EmittersPlugin-CnhQp5bK.js").then(a=>a.c),__vite__mapDeps([0,1,2,3,4,5,6])),e=new r(t);await t.addPlugin(e,i)}export{_ as EmitterShapeBase,d as loadEmittersPlugin};
