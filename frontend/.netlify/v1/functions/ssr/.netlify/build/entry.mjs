import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_S27BAtn0.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/blog.astro.mjs');
const _page3 = () => import('./pages/api/newsletter.astro.mjs');
const _page4 = () => import('./pages/api/notion.astro.mjs');
const _page5 = () => import('./pages/api/projects/audio.astro.mjs');
const _page6 = () => import('./pages/api/referrals.astro.mjs');
const _page7 = () => import('./pages/api/related-projects.astro.mjs');
const _page8 = () => import('./pages/api/subscribe.astro.mjs');
const _page9 = () => import('./pages/api/testimonials/new-testimonial.astro.mjs');
const _page10 = () => import('./pages/api/testimonials/save-testimonial.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/leave-a-review.astro.mjs');
const _page13 = () => import('./pages/projects/web/_project_.astro.mjs');
const _page14 = () => import('./pages/projects/web.astro.mjs');
const _page15 = () => import('./pages/referrals/_email_.astro.mjs');
const _page16 = () => import('./pages/thank-you.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.16_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/blog.ts", _page2],
    ["src/pages/api/newsletter.ts", _page3],
    ["src/pages/api/notion.ts", _page4],
    ["src/pages/api/projects/audio.ts", _page5],
    ["src/pages/api/referrals.ts", _page6],
    ["src/pages/api/related-projects.ts", _page7],
    ["src/pages/api/subscribe.ts", _page8],
    ["src/pages/api/testimonials/new-testimonial.ts", _page9],
    ["src/pages/api/testimonials/save-testimonial.ts", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/leave-a-review.astro", _page12],
    ["src/pages/projects/web/[project].astro", _page13],
    ["src/pages/projects/web/index.astro", _page14],
    ["src/pages/referrals/[email].astro", _page15],
    ["src/pages/thank-you.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "43bb0eec-7757-453a-955d-620b0fd475cb"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
