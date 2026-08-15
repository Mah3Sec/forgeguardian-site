import{c as o,r as i,j as e,f as d}from"./index-Bes8XKsb.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=o("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);function y({text:c,label:r="Copy",className:a}){const[t,s]=i.useState(!1),n=async()=>{await navigator.clipboard.writeText(c),s(!0),setTimeout(()=>s(!1),1500)};return e.jsxs("button",{type:"button",onClick:n,className:d("inline-flex items-center gap-1.5 rounded-md border border-border-color bg-surface px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:bg-surface-muted",a),children:[t?e.jsx(p,{size:13,className:"text-success"}):e.jsx(x,{size:13}),t?"Copied":r]})}export{y as C};
