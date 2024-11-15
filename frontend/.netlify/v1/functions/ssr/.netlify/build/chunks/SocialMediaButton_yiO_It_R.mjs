import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BKCQEo5J.mjs';
import 'kleur/colors';
import { a as $$Icon } from './RootLayout_B9PyH6d-.mjs';

const $$Astro = createAstro("https://spaptechnology.com");
const $$SocialMediaButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialMediaButton;
  const { buttonData, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(buttonData.href, "href")} target="_blank"${addAttribute(`border-2 border-${color} text-${color} bg-transparent flex-col justify-center flex items-center rounded-full text-2xl lg:text-4xl p-3 hover:border-accent-pop duration-200 ease-linear hover:text-accent-pop hover:scale-110`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "", "name": buttonData.iconRef })} </a>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/ui/SocialMediaButton.astro", void 0);

export { $$SocialMediaButton as $ };
