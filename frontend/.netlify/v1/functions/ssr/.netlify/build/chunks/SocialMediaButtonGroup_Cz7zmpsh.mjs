import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_DfnRGx3A.mjs';
import 'kleur/colors';
import { $ as $$SocialMediaButton } from './SocialMediaButton_nAYfsnOQ.mjs';

const $$Astro = createAstro("https://spaptechnology.com");
const $$SocialMediaButtonGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialMediaButtonGroup;
  const { color } = Astro2.props;
  const socialMediaLinks = [
    {
      id: 1,
      name: "LinkedIn",
      iconRef: "mdi:linkedin",
      href: "https://linkedin.com/in/shawn-papineau"
    },
    {
      id: 2,
      name: "Instagram",
      iconRef: "mdi:instagram",
      href: "https://instagram.com/shawn.paps"
    },
    {
      id: 3,
      name: "X",
      iconRef: "arcticons:x-twitter",
      href: "https://x.com/shawn_paps"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between items-center mr-auto lg:mx-auto space-x-2 md:space-x-8 lg:order-3"> ${socialMediaLinks.map((item) => renderTemplate`${renderComponent($$result, "SocialMediaButton", $$SocialMediaButton, { "color": color, "key": item.id, "buttonData": item })}`)} </div>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/ui/SocialMediaButtonGroup.astro", void 0);

export { $$SocialMediaButtonGroup as $ };
