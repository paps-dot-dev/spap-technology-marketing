import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BzMAJ5Fn.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../chunks/RootLayout_B9Gcj5oa.mjs';
/* empty css                                   */
import { b as $$SocialMediaButtonGroup } from '../chunks/NavigationContainer_BwqY6oC1.mjs';
import { $ as $$FeaturedProjectsGrid } from '../chunks/FeaturedProjectsGrid_DzV5VYJX.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Thank you for contacting me! | SPAP Technology Solutions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero" class="relative w-full min-h-screen overflow-hidden rounded-xl"> <video class="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10" src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/media/video/Abstract%20Background%20Video.mp4" autoplay muted loop playsinline></video> <!-- Content on top of the video --> <div id="content-container" class="relative z-20 bg-black/75 flex flex-col items-center lg:justify-center py-10 text-white px-4 h-full"> <h1 class="text-4xl lg:text-6xl font-bold lg:text-center mb-4 lg:w-2/3 lowercase">
Thanks for Subscribing!
</h1> <div> ${renderComponent($$result2, "SocialMediaButtonGroup", $$SocialMediaButtonGroup, { "color": "text-primary" })} </div> <p class="text-right pl-20 py-8 font-bold text-xl lg:text-xl lowercase">
Keep an eye on your inbox <span class="bg-gradient-to-r from-accent-primary to-accent-pop bg-clip-text text-transparent">for an email from me.
</span> </p> <div class="mr-auto lg:mx-auto lg:order-last"> <p class="text-xl text-center font-extralight p-4">
In the meantime, connect with me on social media or check out some of
					my featured projects.
</p> <div class="bg-white lg:w-3/4 lg:mx-auto rounded-xl my-10 order-last flex flex-col items-center justify-center"> ${renderComponent($$result2, "FeaturedProjectsGrid", $$FeaturedProjectsGrid, {})} </div> </div> </div> </section> ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/thank-you.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ThankYou,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };