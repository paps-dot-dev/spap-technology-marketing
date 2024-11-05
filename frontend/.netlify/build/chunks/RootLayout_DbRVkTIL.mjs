import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, d as renderComponent, f as renderSlot, b as createAstro } from './astro/server_DpFPBP4F.mjs';
import 'kleur/colors';
import { $ as $$NavigationContainer, a as $$Icon } from './NavigationContainer_DgaB91Uh.mjs';
/* empty css                             */
/* empty css                           */

const $$Astro = createAstro();
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-mdysn4oi> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="mx-auto bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center" data-astro-cid-mdysn4oi> <header data-astro-cid-mdysn4oi> ${renderComponent($$result, "NavigationContainer", $$NavigationContainer, { "data-astro-cid-mdysn4oi": true })} </header> <main data-astro-cid-mdysn4oi> ${renderSlot($$result, $$slots["default"])} </main> <footer class="p-4 text-white w-full mt-auto border-t-[.5px]" data-astro-cid-mdysn4oi> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-4xl", "name": "logos/white-primary", "data-astro-cid-mdysn4oi": true })} <p class="text-xs text-center mt-8" data-astro-cid-mdysn4oi>
© 2024 SPAP Technology Solutions. All Rights Reserved.
</p> </footer> </body></html>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/layouts/RootLayout.astro", void 0);

export { $$RootLayout as $ };
