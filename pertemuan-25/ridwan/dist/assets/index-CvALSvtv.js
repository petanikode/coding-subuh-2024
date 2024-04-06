function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DXBif9Ds.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DXBif9Ds.js"),__vite__mapDeps([0,1,2,3]));return new o},e)}export{_ as loadBaseMover};
