import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BKCQEo5J.mjs';
import 'kleur/colors';
import { $ as $$FeaturedProjectsGrid } from '../../chunks/FeaturedProjectsGrid_DhfVGzqJ.mjs';
import { $ as $$SocialMediaButton } from '../../chunks/SocialMediaButton_BvanKLb7.mjs';
import { $ as $$RootLayout } from '../../chunks/RootLayout_CLCoi8gq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="featured-projects" class="min-h-screen bg-text-primary py-8"> <div class="flex justify-between items-center border-b-2 py-4 border-background-primary px-2 mx-2"> <h2 class="text-3xl lg:text-4xl font-bold">featured projects</h2> <div class="w-24"> ${renderComponent($$result2, "SocialMediaButton", $$SocialMediaButton, { "buttonData": {
    iconRef: "mdi:github",
    href: "https://github.com/paps-dot-dev",
    color: "background-primary"
  } })} </div> </div> ${renderComponent($$result2, "FeaturedProjectsGrid", $$FeaturedProjectsGrid, {})} </section> ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/web/index.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/web/index.astro";
const $$url = "/projects/web";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
