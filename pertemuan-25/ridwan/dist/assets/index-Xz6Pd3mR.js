function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DagDQnV3.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(a,t=!0){const{StarDrawer:r}=await o(()=>import("./StarDrawer-DagDQnV3.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
