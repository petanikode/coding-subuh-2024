function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-BTeheTdC.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-BTeheTdC.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{_ as loadWobbleUpdater};
