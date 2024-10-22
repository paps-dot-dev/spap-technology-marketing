import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CwEOTsAo.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/newsletter.astro.mjs');
const _page2 = () => import('./pages/api/related-projects.astro.mjs');
const _page3 = () => import('./pages/api/subscribe.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/projects/_project_.astro.mjs');
const _page6 = () => import('./pages/thank-you.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/newsletter.ts", _page1],
    ["src/pages/api/related-projects.ts", _page2],
    ["src/pages/api/subscribe.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/projects/[project].astro", _page5],
    ["src/pages/thank-you.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "04c52cd2-c482-480e-8b49-412b82c93af6"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
