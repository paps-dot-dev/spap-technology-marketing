import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_BzMAJ5Fn.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../chunks/RootLayout_CN2ARBB7.mjs';
import { b as $$SocialMediaButtonGroup, c as $$SocialMediaButton } from '../chunks/NavigationContainer_DwxoR03E.mjs';
/* empty css                                 */
/* empty css                                     */
import { $ as $$FeaturedProjectsGrid } from '../chunks/FeaturedProjectsGrid_DzV5VYJX.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_C8GpD8xL.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';
import { MdWeb, MdMouse, MdPhoneIphone, MdApps } from 'react-icons/md';
export { renderers } from '../renderers.mjs';

const $$TrustedCompaniesContainer = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("trusted_companies").select("*");
  if (error) {
    throw new Error("Failed to fetch project" + error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-evenly items-center gap-8"> ${data.map((item) => renderTemplate`<div class=" flex-col items-center flex justify-center  "> <img class="max-w-16 lg:max-w-32"${addAttribute(item.thumbnail_url, "src")}> </div>`)} </div>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/TrustedCompaniesContainer.astro", void 0);

const services = [
  {
    name: "Custom Websites",
    description: "You are a creative entrepreneur and deserve a great online presence. With experience utilizing the best of what the web has to offer, let me take the guesswork out of where to start by building a custom website tailored to your business needs.",
    icon: MdWeb
  },
  {
    name: "Web Application",
    description: "Now we're thinking bigger. As a full stack developer, I have the tools and knowledge necessary to bring your next app to life, from client to server and everything in between.",
    icon: MdMouse
  },
  {
    name: "Mobile Application",
    description: "Your users want to reach you beyond the desktop. With experience in React Native, Kotlin Compose, and Swift, let SPAP Technology craft a mobile experience that your customers will love.",
    icon: MdPhoneIphone
  },
  {
    name: "Integrations",
    description: "A common pain point for businesses is getting your tech to talk with one another. Specializing in integration technology, I help businesses get the most out of their tech stacks and eliminate redundancy. Get rid of the mundane and get back doing the fun stuff. ",
    icon: MdApps
  }
];
const ServicesContainer = () => {
  return /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 lg:w-1/2 lg:p-20 ", children: services.map((service, idx) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { scale: 0.2, opacity: 0.1 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.3 },
      className: "bg-background-primary p-10 rounded-xl",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl lg:text-7xl", children: /* @__PURE__ */ jsx(service.icon, {}) }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl lg:text-5xl lg:p-2 font-bold lowercase bg-gradient-to-r from-accent-primary to-accent-pop bg-clip-text text-transparent", children: service.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs lg:text-lg", children: service.description })
      ]
    },
    idx
  )) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Modern Web Solutions for Entrepreneurs & Creators" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="hero" class="relative w-full h-screen overflow-hidden rounded-xl"> <video class="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10" src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/media/video/Abstract%20Background%20Video.mp4" autoplay muted loop playsinline></video> <!-- Content on top of the video --> <div id="content-container" class="relative z-20 bg-black/75 flex flex-col items-center lg:justify-center py-10 text-white px-4 h-full"> <h1 class="text-4xl lg:text-6xl font-bold lg:text-center mb-4 lg:order-1 lg:w-2/3 lowercase">
Unleash your creativity with the power of the modern web.
</h1> ${renderComponent($$result2, "SocialMediaButtonGroup", $$SocialMediaButtonGroup, { "color": "text-primary" })} <p class="text-right pl-20 py-8 font-bold text-xl lg:order-2 lg:text-xl lowercase">
SPAP Technology crafts custom web solutions for <span class="bg-gradient-to-r from-accent-primary to-accent-pop bg-clip-text text-transparent">creators & Entrepreneurs
</span>
that want <span class="text-accent-secondary underline">more than just a website.</span> </p> </div> </section> <section id="trusted-companies" class="bg-background-primary min-h-[30vh] lg:min-h-[20vh] py-8 px-2"> <h2 class="text-text-primary text-3xl lg:text-4xl font-bold lg:px-2">
Trusted by these companies
</h2> ${renderComponent($$result2, "TrustedCompaniesContainer", $$TrustedCompaniesContainer, {})} </section> <section id="featured-projects" class="min-h-screen bg-text-primary py-8"> <div class="flex justify-between items-center border-b-2 py-4 border-background-primary px-2 mx-2"> <h2 class="text-3xl lg:text-4xl font-bold">featured projects</h2> <div class="w-24"> ${renderComponent($$result2, "SocialMediaButton", $$SocialMediaButton, { "buttonData": {
    iconRef: "mdi:github",
    href: "https://github.com/paps-dot-dev",
    color: "background-primary"
  } })} </div> </div> ${renderComponent($$result2, "FeaturedProjectsGrid", $$FeaturedProjectsGrid, {})} </section> <section id="services" class="min-h-screen bg-gradient-to-r from-background-primary via-accent-primary to-background-primary/20 text-text-primary py-8 px-2 flex justify-center items-center flex-col"> <h2 class="text-5xl lg:text-7xl py-4 font-bold lowercase bg-gradient-to-r from-text-primary to-accent-primary bg-clip-text text-transparent">
go beyond a normal website 🚀
</h2> <h3 class="font-extralight lg:text-4xl">Some of the Services I provide.</h3> ${renderComponent($$result2, "ServicesContainer", ServicesContainer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ServicesContainer", "client:component-export": "default" })} <a href="/contact" class="w-1/4 p-5 cursor-pointer bg-accent-pop hover:border-2 hover:border-accent-pop hover:bg-transparent rounded-xl text-center font-bold hover:scale-125 duration-200 ease-linear">Let's Chat</a> </section> ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/index.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
