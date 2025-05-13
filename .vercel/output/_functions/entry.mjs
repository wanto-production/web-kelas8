import { r as renderers } from './chunks/_@astro-renderers_XaomTNl8.mjs';
import { c as createExports } from './chunks/entrypoint_CvyJT7Tt.mjs';
import { manifest } from './manifest_DkMpZOCM.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/auth/_---all_.astro.mjs');
const _page4 = () => import('./pages/api/getsession.astro.mjs');
const _page5 = () => import('./pages/api/message/delete/_id_.astro.mjs');
const _page6 = () => import('./pages/api/message/get.astro.mjs');
const _page7 = () => import('./pages/api/message/send.astro.mjs');
const _page8 = () => import('./pages/auth.astro.mjs');
const _page9 = () => import('./pages/home.astro.mjs');
const _page10 = () => import('./pages/message.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/auth/[...all].ts", _page3],
    ["src/pages/api/getsession.ts", _page4],
    ["src/pages/api/message/delete/[id].ts", _page5],
    ["src/pages/api/message/get.ts", _page6],
    ["src/pages/api/message/send.ts", _page7],
    ["src/pages/auth.astro", _page8],
    ["src/pages/home.astro", _page9],
    ["src/pages/message.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "3bb7a014-df56-4657-949b-45530afffa70",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
