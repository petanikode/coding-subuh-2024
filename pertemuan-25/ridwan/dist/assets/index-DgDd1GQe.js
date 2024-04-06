function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MotionPlugin-tlbnwT-H.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(o,t=!0){const{MotionPlugin:i}=await a(()=>import("./MotionPlugin-tlbnwT-H.js"),__vite__mapDeps([0,1,2,3]));await o.addPlugin(new i(o),t)}export{_ as loadMotionPlugin};
