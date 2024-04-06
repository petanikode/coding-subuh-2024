function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Yc5DK0IL.js","assets/ValueWithRandom-DIYSTXIC.js","assets/AnimationOptions-B3SzitIA.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Yc5DK0IL.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r(e)},a)}export{_ as loadLifeUpdater};
