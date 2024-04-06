function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-DP_gTlRn.js","assets/PolygonDrawerBase-bMQEKMer.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css","assets/TriangleDrawer-_46yqKG9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function n(a,o=!0){const{PolygonDrawer:t}=await i(()=>import("./PolygonDrawer-DP_gTlRn.js"),__vite__mapDeps([0,1,2,3,4]));await a.addShape("polygon",new t,o)}async function e(a,o=!0){const{TriangleDrawer:t}=await i(()=>import("./TriangleDrawer-_46yqKG9.js"),__vite__mapDeps([5,1,2,3,4]));await a.addShape("triangle",new t,o)}async function l(a,o=!0){await n(a,o),await e(a,o)}export{n as loadGenericPolygonShape,l as loadPolygonShape,e as loadTriangleShape};
