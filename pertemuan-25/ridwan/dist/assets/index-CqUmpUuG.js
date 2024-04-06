function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-BI3virHV.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(r,a=!0){const{CircleDrawer:e}=await i(()=>import("./CircleDrawer-BI3virHV.js"),__vite__mapDeps([0,1,2,3]));await r.addShape("circle",new e,a)}export{_ as loadCircleShape};
