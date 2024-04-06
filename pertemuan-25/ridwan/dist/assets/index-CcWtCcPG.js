function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-DZGbE7Y3.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function n(t,a=!0){await t.addParticleUpdater("outModes",async r=>{const{OutOfCanvasUpdater:e}=await o(()=>import("./OutOfCanvasUpdater-DZGbE7Y3.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{n as loadOutModesUpdater};
