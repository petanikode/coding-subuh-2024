function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-D_UJP-y_.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css","assets/ValueWithRandom-DIYSTXIC.js","assets/AnimationOptions-B3SzitIA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:i}=await e(()=>import("./TiltUpdater-D_UJP-y_.js"),__vite__mapDeps([0,1,2,3,4,5]));return new i(r)},a)}export{_ as loadTiltUpdater};
