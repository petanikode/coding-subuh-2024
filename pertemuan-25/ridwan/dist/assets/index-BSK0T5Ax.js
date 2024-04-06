function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-BjVf5EHf.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function c(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:i}=await e(()=>import("./OpacityUpdater-BjVf5EHf.js"),__vite__mapDeps([0,1,2,3]));return new i(r)},a)}export{c as loadOpacityUpdater};
