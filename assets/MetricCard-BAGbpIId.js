import{c as t,j as s,f as d}from"./index-Bes8XKsb.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),p={default:"var(--text-primary)",critical:"var(--critical)",success:"var(--success)"},f={up:x,down:m,flat:u},h={up:"var(--critical)",down:"var(--success)",flat:"var(--text-muted)"};function j({label:c,value:o,trend:e,trendValue:n,variant:l="default",icon:a,className:i}){const r=e?f[e]:null;return s.jsxs("div",{className:d("rounded-xl border border-border-color bg-surface p-5 shadow-sm",i),children:[s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsx("span",{className:"text-sm font-medium text-text-secondary",children:c}),a&&s.jsx(a,{size:18,className:"text-text-muted"})]}),s.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[s.jsx("span",{className:"text-3xl font-bold tabular-nums",style:{color:p[l]},children:o}),e&&r&&s.jsxs("span",{className:"flex items-center gap-0.5 text-xs font-medium",style:{color:h[e]},children:[s.jsx(r,{size:12}),n]})]})]})}export{j as M};
