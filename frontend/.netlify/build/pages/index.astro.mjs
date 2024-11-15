import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_BKCQEo5J.mjs';
import 'kleur/colors';
import { B as Button, $ as $$RootLayout } from '../chunks/RootLayout_Cm04yUyp.mjs';
import { $ as $$SocialMediaButtonGroup } from '../chunks/SocialMediaButtonGroup_DS7vVvn9.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_C8GpD8xL.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React__default, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdCode, MdOutlineMusicNote, MdEmail } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { P as ProAudioProjectCard } from '../chunks/ProAudioProjectCard_yxBxOsLY.mjs';
export { renderers } from '../renderers.mjs';

const $$TrustedCompaniesContainer = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("trusted_companies").select("*");
  if (error) {
    throw new Error("Failed to fetch project" + error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-between w-full items-center gap-8 p-5"> ${data.map((item) => renderTemplate`<div class=" flex-col items-center flex justify-center  "> <img class="max-w-16 md:max-w-24 grayscale"${addAttribute(item.thumbnail_url, "src")}> </div>`)} </div>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/TrustedCompaniesContainer.astro", void 0);

const services = [
  {
    name: "Websites & Apps",
    description: "With over 6 years of experience as a full stack developer, I build content-driven, high-impact websites that will help your brand dominate online presence.",
    icon: MdCode
  },
  {
    name: "Pro Audio",
    description: "From producing your next single to setting up backing tracks for your live show, I bring more than a decade of recording experience to your next project",
    icon: MdOutlineMusicNote
  },
  {
    name: "Online Marketing",
    description: "Passionate about helping creatives build their outreach, I provide consultation on the latest and greatest tools to do just that.",
    icon: MdEmail
  },
  {
    name: "Copywriting",
    description: "Communicate to your audience effectively with authentic, genuine copy.",
    icon: FaPencilAlt
  }
];
const ServicesContainer = () => {
  return /* @__PURE__ */ jsx(motion.div, { className: "flex flex-wrap items-center justify-center gap-4 mx-auto", children: services.map((service, idx) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { scale: 0.2, opacity: 0.1 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.3 },
      className: "bg-primary p-10 rounded-xl w-96 h-[500px] flex flex-col justify-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl md:text-5xl", children: /* @__PURE__ */ jsx(service.icon, {}) }),
        /* @__PURE__ */ jsx("p", { className: "text-4xl md:text-5xl lg:py-2 font-bold lowercase bg-gradient-to-r from-accent-purple to-accent-magenta bg-clip-text text-transparent", children: service.name }),
        /* @__PURE__ */ jsx("p", { className: "text-lg", children: service.description }),
        /* @__PURE__ */ jsx("a", { className: "border-accent-magenta border-2  rounded-md block w-full text-center mt-4", href: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-accent-pop", children: "I need this service" }) })
      ]
    },
    idx
  )) });
};

const ProAudioCard = ({ service }) => {
  const [audioProjects, setAudioProjects] = useState([]);
  const fetchAudioProjects = async () => {
    const response = await fetch(`/api/projects/audio`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const data = await response.json();
    if (data) {
      const filteredData = data.filter((item) => item.type == service.type);
      setAudioProjects(filteredData);
    }
  };
  useEffect(() => {
    fetchAudioProjects();
  }, [service]);
  console.log(audioProjects);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-4xl w-2/3 space-y-2 py-8", children: [
      /* @__PURE__ */ jsx("p", { children: service.overview }),
      /* @__PURE__ */ jsx("p", { children: service.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: audioProjects.map((item) => /* @__PURE__ */ jsx(ProAudioProjectCard, { data: item })) })
  ] });
};

const serviceScreens = [
  {
    name: "Remote Producing",
    overview: "It is becoming more  common for musicians to start production on a track prior to working with a producer.",
    description: " I provide Remote Producing & songwriting services to help you take your record to the next level.",
    type: "production"
  },
  {
    name: "Mixing",
    overview: "As an artist, your product is a direct reflection of how seriously you take your craft.",
    description: " I provide Mixing services to add clarity, punch, and allow your performance to shine in your next song.",
    type: "mixing"
  },
  {
    name: "Session Guitar",
    overview: "Need a guitar player on your next track? Let me track on your next record. ",
    description: "I am a classically trained guitar player with over 20 years of experience in the studio and playing live.",
    type: "session"
  },
  {
    name: "Live Show + Backtracks",
    overview: "The industry standard for a live show is changing. More and more artists are enhancing their live productions.",
    description: "I can craft your live productions. Whether it be editing stems, programming midi for tone changes, click track narration, or something else-- I got you. ",
    type: "backtracks"
  }
];

const ProAudioTabs = () => {
  const [activeTab, setActiveTab] = useState(serviceScreens[0]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full py-16", children: [
    /* @__PURE__ */ jsx("nav", { className: "w-full", children: /* @__PURE__ */ jsx("ul", { className: "flex justify-between items-center gap-4 w-full text-xl md:text-4xl", children: serviceScreens.map((service) => /* @__PURE__ */ jsx("li", { onClick: () => setActiveTab(service), className: activeTab.name == service.name ? "opacity-100 border-b-2 border-accent-magenta p-2 transition" : "opacity-50 transition hover:opacity-100 cursor-pointer", children: service.name }, service.name)) }) }),
    /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsx(ProAudioCard, { service: activeTab }) })
  ] });
};

const FeaturedTechCards = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center" });
};

const BlogContainer = () => {
  const [posts, setPosts] = React__default.useState(null);
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("/api/blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "bokor-regular text-5xl border-b-2 w-fit mb-8", children: "Recent Articles" }),
    posts.total_results > 0 ? /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-8", children: posts.data?.map(
      (post) => /* @__PURE__ */ jsx(
        motion.li,
        {
          initial: { translateX: -100 },
          animate: { translateX: 0 },
          className: "w-96 relative rounded-xl group",
          children: /* @__PURE__ */ jsxs("a", { target: "_blank", href: post.web_url, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-full object-cover rounded-xl opacity-30 group-hover:opacity-100 transition",
                src: post.thumbnail_url,
                alt: post.title
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 z-20 p-8 w-3/4", children: /* @__PURE__ */ jsx("p", { className: "text-2xl group-hover:text-accent-magenta", children: post.title }) })
          ] })
        },
        post.id
      )
    ) }) : /* @__PURE__ */ jsx("p", { children: "No blog posts found." })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript" async src="https://embeds.beehiiv.com/attribution.js"><\/script>'])), renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Amplified Web Presence for Creative Entrpreneurs", "description": "SPAP Technology Solutions specializes in crafting solutions for creative entrepreneurs including website development, app development,business tools, integrations, copywriting, and more.", "imageRef": "https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/SPAP%20Logos/Vertical/PNG/White_Vertical%20Lockup_SPAP.png", "urlSlug": "/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero" class="relative w-screen h-screen overflow-hidden rounded-xl"> <video class="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10" src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/media/video/Black%20Video%201920x1080.mp4?t=2024-11-15T06%3A35%3A09.659Z" autoplay muted loop playsinline></video> <!-- Content on top of the video --> <div id="content-container" class="relative z-20 bg-black/25 flex flex-col items-center justify-center py-10 text-white px-4 h-full"> <h1 class="text-7xl font-semibold md:text-[8rem] md:text-center order-1 md:w-2/3 lowercase">
Shawn Paps
</h1> <div class="order-3"> ${renderComponent($$result2, "SocialMediaButtonGroup", $$SocialMediaButtonGroup, { "color": "text-primary" })} </div> <p class="text-right pb-8 font-bold text-xl md:text-center order-2 md:text-5xl lowercase">
Digital Media Developer for <span class="bg-gradient-to-r from-accent-magenta to-accent-purple bg-clip-text text-transparent">Artists & Creatives
</span> </p> <a href="/#services" class="p-5 border-2 block text-center transition hover:bg-accent-magenta border-accent-magenta order-5 mt-8 w-1/2 rounded-md">Learn More</a> <!--<div class="order-5 max-w-screen">--> <!--    <TestimonialsContainer testimonials={testimonials} client:load />--> <!--</div>--> </div> </section> <section id="social-proof"> <div class="text-white flex flex-col items-center p-10"> <p class="text-2xl text-center">Trusted by these creative brands:</p> ${renderComponent($$result2, "TrustedCompaniesContainer", $$TrustedCompaniesContainer, {})} </div> </section> <section id="services" class="p-10 mb-16 flex flex-col items-center"> <h2 class="text-7xl p-4">Services I Offer</h2> ${renderComponent($$result2, "ServicesContainer", ServicesContainer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/react/ServicesContainer", "client:component-export": "default" })} </section> <section id="pro-audio" class="flex flex-col md:flex-row min-h-screen w-screen mb-32"> <div class="p-2 md:min-w-[60%]" id="audio-copy"> <h2 class="text-7xl opacity-20">Pro Audio</h2> <h3 class="text-5xl w-2/3">
I have over a decade of experience recording & mixing audio.
</h3> <div class="py-8 flex items-center text-xl"> <a href="/contact" class="p-5 bg-accent-magenta rounded-md px-16 hover:bg-white hover:text-accent-magenta transition">Connect With Me</a> <a class="opacity-50 p-5 hover:opacity-100 transition" href="/projects/pro-audio">See Who I've Worked With</a> </div> <video class="opacity-20 rounded-xl h-full w-full object-cover md:hidden" src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/media/video/Shawn-Guitar.mp4" autoplay muted loop playsinline></video> <div class="w-full"> ${renderComponent($$result2, "ProAudioTabs", ProAudioTabs, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/(pro-audio)/ProAudioTabs", "client:component-export": "default" })} </div> </div> <div id="audio-image" class="min-h-screen hidden md:block"> <video class="opacity-20 rounded-xl h-full w-full object-cover" src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/media/video/Shawn-Guitar.mp4" autoplay muted loop playsinline></video> </div> </section> <section id="web-solutions" class="p-2 min-h-screen"> <h2 class="text-7xl opacity-20 text-right">Web Solutions</h2> <div class="flex flex-col md:flex-row md:justify-between gap-8"> <div class="md:max-w-[60%] order-2 md:order-1"> <video class="opacity-50 rounded-xl h-full w-full object-cover rounded-xl" src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/projects/videos/equature_thumbnail.mp4" autoplay muted loop playsinline></video> <a href="/projects/web" class="block hover:bg-accent-magenta hover:text-white transition text-white/50 p-10 text-center text-2xl border-2 border-white/50 mt-4 rounded-xl">View my Case Studies</a> </div> <div class="text-right order-1 md:order-2"> <h3 class="text-5xl py-4">
Navigate the Technical Side of Your Business with Ease.
</h3> <p class="text-2xl text-left mt-16">
I’ll help you Establish dominance in your online presence with
					Content-driven Web solutions tailored to your Brand :
</p> <ul class="text-center flex flex-wrap justify-center gap-8 text-4xl py-5 text-accent-magenta"> <li>Custom Websites</li> <li>Web Apps</li> <li>Content Management</li> <li>Integrations</li> <li>Business Tools</li> <li>Copywriting</li> </ul> <a href="/contact" class="block bg-accent-magenta hover:bg-white hover:text-accent-magenta text-white transition p-10 text-center text-2xl mt-4 rounded-xl">Get Started Today</a> ${renderComponent($$result2, "FeaturedTechCards", FeaturedTechCards, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/react/FeaturedTechCards", "client:component-export": "default" })} </div> </div> </section> <section id="newsletter"> <h2 class="text-7xl opacity-20">Subscribe to My Newsletter</h2> <div class="flex flex-col items-center justify-center p-10 bg-secondary my-32"> <h3 class="text-7xl">Riffs. Code. Coffee.</h3> <p class="text-2xl">
A Weekly Music & Tech Newsletter where I document my experiences &
				provide useful insights for musicians, creatives, and entrepreneurs.
</p> <iframe src="https://embeds.beehiiv.com/ad31a6a5-6362-488a-a30a-bd035dfb2d2b?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style="margin: 0; border-radius: 0px !important; background-color: transparent; width: 500px"></iframe> </div> ${renderComponent($$result2, "BlogContainer", BlogContainer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/react/BlogContainer", "client:component-export": "default" })} </section> ` }));
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
