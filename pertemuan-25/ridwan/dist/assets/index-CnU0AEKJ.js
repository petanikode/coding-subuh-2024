function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DKWT9zLx.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css","assets/OptionsColor-ComWYICz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function l(t,r=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:a}=await o(()=>import("./RollUpdater-DKWT9zLx.js"),__vite__mapDeps([0,1,2,3,4]));return new a},r)}export{l as loadRollUpdater};
