function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CvALSvtv.js","assets/register-B1JstNQ6.js","assets/bootstrap.esm-BouezZmv.js","assets/bootstrap-9kx3olKa.css","assets/index-CqUmpUuG.js","assets/index-BNXHFuAD.js","assets/index-BSK0T5Ax.js","assets/index-CcWtCcPG.js","assets/index-t3X9K0KF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";async function w(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CvALSvtv.js"),__vite__mapDeps([0,1,2,3])),{loadCircleShape:i}=await t(()=>import("./index-CqUmpUuG.js"),__vite__mapDeps([4,1,2,3])),{loadColorUpdater:r}=await t(()=>import("./index-BNXHFuAD.js"),__vite__mapDeps([5,1,2,3])),{loadOpacityUpdater:d}=await t(()=>import("./index-BSK0T5Ax.js"),__vite__mapDeps([6,1,2,3])),{loadOutModesUpdater:e}=await t(()=>import("./index-CcWtCcPG.js"),__vite__mapDeps([7,1,2,3])),{loadSizeUpdater:l}=await t(()=>import("./index-t3X9K0KF.js"),__vite__mapDeps([8,1,2,3]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{w as loadBasic};
