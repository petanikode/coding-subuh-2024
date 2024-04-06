function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MotionInstance-D6oHeNa8.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";class r{constructor(){this.factor=4,this.value=!0}load(i){i&&(i.factor!==void 0&&(this.factor=i.factor),i.value!==void 0&&(this.value=i.value))}}class s{constructor(){this.disable=!1,this.reduce=new r}load(i){i&&(i.disable!==void 0&&(this.disable=i.disable),this.reduce.load(i.reduce))}}class d{constructor(i){this.id="motion",this._engine=i}async getPlugin(i){const{MotionInstance:e}=await o(()=>import("./MotionInstance-D6oHeNa8.js"),__vite__mapDeps([0,1,2,3]));return new e(i,this._engine)}loadOptions(i,e){if(!this.needsPlugin())return;let t=i.motion;t!=null&&t.load||(i.motion=t=new s),t.load(e==null?void 0:e.motion)}needsPlugin(){return!0}}export{d as MotionPlugin};
