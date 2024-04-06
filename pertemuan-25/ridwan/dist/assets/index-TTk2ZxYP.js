function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-DfsGDQ9Z.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css","assets/ValueWithRandom-DIYSTXIC.js","assets/AnimationOptions-B3SzitIA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-DfsGDQ9Z.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(r)},a)}export{_ as loadRotateUpdater};
