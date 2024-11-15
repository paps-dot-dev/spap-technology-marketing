import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DfnRGx3A.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../chunks/RootLayout_JXPhZjRK.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript" async src="https://embeds.beehiiv.com/attribution.js"><\/script>'])), renderComponent($$result, "RootLayout", $$RootLayout, { "title": "You Found the Secret Page!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center justify-center text-white h-screen"> <h1 class="text-5xl p-2 bg-gradient-to-r from-accent-primary to-accent-pop bg-clip-text text-transparent">
Hey! You found the secret page!
</h1> <h2 class="p-2">
Just Kidding. This page doesn't exist. But since you're here, consider
			subscribing to my newsletter?
</h2> <iframe src="https://embeds.beehiiv.com/ad31a6a5-6362-488a-a30a-bd035dfb2d2b" data-test-id="beehiiv-embed" width="100%" height="320" frameborder="0" scrolling="no" style="border-radius: 4px; border: 2px solid #e5e7eb; margin: 0; background-color: transparent;"></iframe> <a class="mt-8 text-accent-primary text-2xl hover:text-accent-pop transition" href="/">Go Back to Home</a> </main> ` }));
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/404.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
