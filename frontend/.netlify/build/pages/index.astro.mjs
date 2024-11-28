import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_BwxQodTz.mjs';
import 'kleur/colors';
import { B as Button, a as $$Icon, $ as $$RootLayout } from '../chunks/RootLayout_DYH7LGDT.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_C8GpD8xL.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdWeb, MdCode, MdCloud, MdScience, MdArrowBackIosNew, MdArrowOutward } from 'react-icons/md';
import 'typescript';
import { FaBullseye, FaLightbulb } from 'react-icons/fa';
import { $ as $$FeaturedProjectsGrid } from '../chunks/FeaturedProjectsGrid_xwzbQXbW.mjs';
export { renderers } from '../renderers.mjs';

const $$TrustedCompaniesContainer = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("trusted_companies").select("*");
  if (error) {
    throw new Error("Failed to fetch project" + error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-between w-full items-center gap-8 p-5"> ${data.map((item) => renderTemplate`<div class=" flex-col items-center flex justify-center  "> <img class="max-w-16 md:max-w-24 grayscale"${addAttribute(item.thumbnail_url, "src")}> </div>`)} </div>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/TrustedCompaniesContainer.astro", void 0);

const services$1 = [
  {
    name: "Custom Websites + Web Apps",
    description: "Build responsive, high-performance websites and scalable web applications tailored to your business goals.",
    icon: MdWeb
  },
  {
    name: "Tech Stack Integrations",
    description: "Connect and optimize tools, platforms, and APIs to streamline workflows and boost efficiency.",
    icon: MdCode
  },
  {
    name: "Database + Cloud Solutions",
    description: "Design, implement, and manage secure databases and cloud architectures for scalable, reliable performance.",
    icon: MdCloud
  },
  {
    name: "Tech Strategy + Consulting",
    description: "Audit, plan, and implement modern tech solutions to help your business scale and succeed.",
    icon: MdScience
  }
];
const ServicesContainer = () => {
  return /* @__PURE__ */ jsx(motion.div, { className: "flex  flex-col lg:flex-row items-center justify-center gap-4 mx-auto p-4 flex-shrink", children: services$1.map((service, idx) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { scale: 0.2, opacity: 0.1 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.3 },
      className: "bg-background/100 p-5 rounded-xl w-84 md:w-96 lg:w-[600px] h-[400px] md:h-[500px] flex flex-col justify-center",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl text-accent-secondary", children: /* @__PURE__ */ jsx(service.icon, {}) }),
          /* @__PURE__ */ jsx("p", { className: "text-4xl md:text-5xl lg:py-2 font-bold lowercase bg-gradient-to-r from-accent-secondary to-background via-text-primary bg-clip-text text-transparent", children: service.name }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-text-primary font-extralight py-2", children: service.description })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "py-4 bg-accent-secondary text-text-primary w-fit px-2 text-center ml-auto rounded-lg hover:bg-background hover:border-2 hover:border-accent-secondary transition-all",
            href: "/projects/web",
            children: "Read related case studies"
          }
        )
      ]
    },
    idx
  )) });
};

const BlogContainer = () => {
  const [posts, setPosts] = React__default.useState({
    total_results: 0,
    data: []
  });
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
  return /* @__PURE__ */ jsxs("section", { className: "p-4 text-text-primary bg-primary lg:py-32", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl mb-8", children: "Insights from SPAP Technology" }),
    /* @__PURE__ */ jsx("p", { className: "lg:text-2xl lg:max-w-[50%]", children: "Stay ahead of the curve with insights straight from SPAP Technology. Our blog, Riffs. Code. Coffee., delivers fresh takes on the latest tech trends, innovative tools, and creative strategies to help your business thrive." }),
    /* @__PURE__ */ jsx("p", { className: "my-8 lg:text-xl", children: "From deep dives into cutting-edge technology to practical advice for scaling your business tech stack, we're here to spark inspiration in creative entrepreneurs." }),
    posts.total_results > 0 ? /* @__PURE__ */ jsx("div", { className: "lg:overflow-x-auto", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col lg:flex-row lg:inline-flex gap-8", children: posts.data?.map(
      (post) => /* @__PURE__ */ jsx(
        motion.li,
        {
          initial: { translateX: -100 },
          animate: { translateX: 0 },
          className: "lg:w-full  lg:inline-block lg:min-w-[300px] relative rounded-xl group bg-primary",
          children: /* @__PURE__ */ jsxs("a", { target: "_blank", href: post.web_url, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-full object-cover rounded-xl opacity-30 group-hover:opacity-100 transition",
                src: post.thumbnail_url,
                alt: post.title
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 z-20 p-8 w-full", children: /* @__PURE__ */ jsx("p", { className: "text-2xl group-hover:text-accent-primary", children: post.title }) })
          ] })
        },
        post.id
      )
    ) }) }) : /* @__PURE__ */ jsx("p", { children: "No blog posts found." })
  ] });
};

const About_PillarList = () => {
  return /* @__PURE__ */ jsxs(motion.ul, { className: "flex justify-between lg:flex-col items-center lg:items-start p-4 text-xl lg:text-3xl text-accent-primary lg:gap-8", children: [
    /* @__PURE__ */ jsx(
      motion.li,
      {
        className: "font-semibold drop-shadow-md",
        initial: { translateX: -100 },
        animate: { translateX: 0 },
        transition: {
          type: "spring",
          stiffness: 100,
          // Controls the "tightness" of the spring
          damping: 10,
          // Reduces oscillation for a smoother spring
          bounce: 0.3
          // Adds a bouncy effect
        },
        children: "Innovation"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.li,
      {
        className: "font-semibold drop-shadow-md",
        initial: { translateX: -100 },
        animate: { translateX: 0 },
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 8,
          bounce: 0.4
        },
        children: "Precision"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.li,
      {
        className: "font-semibold drop-shadow-md",
        initial: { translateX: -100 },
        animate: { translateX: 0 },
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 12,
          bounce: 0.5
        },
        children: "Creativity"
      }
    )
  ] });
};

const About_PillarCards = ({ pillars }) => {
  return /* @__PURE__ */ jsx("ul", { className: "flex justify-between lg:flex-col items-center gap-2 py-8 overflow-hidden lg:w-full", children: pillars.map((item) => {
    const [isOpen, setIsOpen] = useState(false);
    if (isOpen) {
      return /* @__PURE__ */ jsx(
        motion.li,
        {
          initial: { scaleX: 0 },
          animate: { scaleX: 1 },
          onClick: () => setIsOpen(false),
          className: "bg-text-primary/25 text-accent-primary p-2 h-[200px] text-xl rounded-xl min-w-[350px] md:min-w-[500px] order-first lg:order-none",
          children: /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsx(MdArrowBackIosNew, {}) }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl underline underline-offset-4", children: item.name }),
            /* @__PURE__ */ jsx("p", { className: "text-text-primary text-lg", children: item.description })
          ] })
        },
        item.name
      );
    } else {
      return /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: () => setIsOpen(true),
          className: "bg-white/10 text-accent-secondary p-2 h-[200px] w-full text-xl rounded-xl ",
          children: [
            /* @__PURE__ */ jsx(MdArrowOutward, { className: "ml-auto text-2xl" }),
            /* @__PURE__ */ jsx("div", { className: "h-5/6 flex items-end", children: /* @__PURE__ */ jsx("p", { children: item.name }) })
          ]
        },
        item.name
      );
    }
  }) });
};

const pillars = [
  {
    name: "Innovation",
    icon: MdScience,
    description: "We deliver cutting-edge solutions that help your business stay ahead of the curve in an ever-changing digital landscape."
  },
  {
    name: "Precision",
    icon: FaBullseye,
    description: "Every line of code, every integration, and every design is crafted with meticulous attention to detail, ensuring flawless performance."
  },
  {
    name: "Creativity",
    icon: FaLightbulb,
    description: "Our solutions don’t just work—they inspire. We combine technical expertise with imaginative thinking to create experiences that elevate your brand."
  }
];

const TestimonialsContainer = ({ testimonials }) => {
  const maxLength = 300;
  const truncateTestimonial = (text) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const [isOpen, setIsOpen] = React__default.useState(false);
  return /* @__PURE__ */ jsx("div", { className: "py-10 w-full flex flex-wrap justify-center overflow-x-auto space-x-8 snap-x snap-mandatory", children: testimonials.map((item, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white text-primary flex flex-col items-center justify-center rounded w-[500px] min-h-[300px] p-6 text-left flex-wrap space-y-4 snap-center",
      children: [
        /* @__PURE__ */ jsx("p", { children: isOpen ? item.testimonial : truncateTestimonial(item.testimonial) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full space-y-2", children: [
          /* @__PURE__ */ jsx(Button, { onClick: () => setIsOpen(!isOpen), variant: "ghost", children: isOpen ? "Read Less" : "Read More" }),
          /* @__PURE__ */ jsxs("div", { className: "text-accent-secondary", children: [
            /* @__PURE__ */ jsx("p", { className: "text-right font-bold", children: item.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-right font-extralight", children: item.company })
          ] })
        ] })
      ]
    },
    index
  )) });
};

const services = [
  {
    title: "UI/UX Design Services",
    description: "Create user-friendly, visually appealing designs for web and mobile applications.",
    price: "Starting at $999"
  },
  {
    title: "Tech Stack Integrations",
    description: "Streamline workflows with seamless integration of tools and platforms.",
    price: "Starting at $1,499"
  },
  {
    title: "Custom Websites & Web Apps",
    description: "Responsive, high-performance websites and scalable apps tailored to your business.",
    price: "Starting at $2,499"
  },
  {
    title: "Startup MVP Development",
    description: "Rapid prototyping and development of minimum viable products to validate your business idea.",
    price: "Contact for Pricing"
  },
  {
    title: "Database & Cloud Solutions",
    description: "Secure and scalable database and cloud architecture for optimal performance.",
    price: "Contact for Pricing"
  },
  {
    title: "Tech Strategy & Consulting",
    description: "Expert guidance to modernize and scale your tech infrastructure.",
    price: "Contact for Pricing"
  }
];
const PricingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return /* @__PURE__ */ jsx("div", { className: "relative", children: services.map((service, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-2/3 py-10 md:w-1/2 p-6 bg-white rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: service.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: service.description }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg font-bold text-accent-secondary", children: service.price })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 h-2 bg-accent-secondary mx-4" })
      ]
    },
    index
  )) });
};

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const title = "Ready to Transform Your Business?";
  const description = "Discover the SPAP Technology difference. Whether you're ready to build a custom solution, streamline your tech stack, or just explore what's possible, we're here to help.";
  const buttonText = "Schedule a Free Consultation";
  const buttonLink = "/contact";
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-r from-[#2C3E50] via-accent-secondary h-[60vh] flex flex-col justify-center items-center to-[#34495E] py-20"> <div class="max-w-4xl mx-auto text-center text-white"> <h2 class="text-4xl font-bold mb-6">${title}</h2> <p class="text-lg mb-8">${description}</p> <a${addAttribute(buttonLink, "href")} class="inline-block px-6 py-3 bg-[#E67E22] text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-[#d35400] transition-colors"> ${buttonText} </a> </div> </section>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/CTA.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const getTestimonials = async () => {
    const { data, error } = await supabase.from("testimonials").select("*");
    if (data) {
      return data;
    }
  };
  const testimonials = await getTestimonials();
  console.log(testimonials);
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "SPAP Technology Solutions | Custom Web Apps & Integrations for Modern Businesses", "description": "SPAP Technology Solutions is a next-level agency delivering entrepreneurs and tech-forward businesses scale with custom websites, apps, and seamless integrations. Simplify your tech stack today.", "imageRef": "https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/SPAP%20Logos/Vertical/PNG/White_Vertical%20Lockup_SPAP.png", "urlSlug": "/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero" class="lg:h-[85vh] h-[90vh] py-96 flex flex-col items-center justify-center bg-gradient-to-r from-[#2C3E50] via-accent-secondary to-[#34495E] bg-[length:300%_200%] animate-gradient text-text-primary"> <div class="max-w-96 md:max-w-[600px]"> <img src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/SPAP%20Logos/Primary/PNG/Black_Primary%20Lockup_SPAP.png"> </div> <h1 class="lg:text-3xl text-2xl text-center mt-2 font-bold">
Innovative Web Solutions. Crafted by <span class="animate-gradient bg-gradient-to-r from-accent-secondary drop-shadow-md to-text-primary bg-[length:50%_100%] text-transparent bg-clip-text font-bold">Experts</span>. Built to <span class="font-bold hover:text-3xl lg:hover:text-4xl ease-linear hover:text-accent-primary duration-200 cursor-pointer trasnition-all">Scale</span>.
</h1> <div class="bg-background p-5 text-text-primary rounded-xl shadow-md mt-auto lg:mt-32 mx-4 lg:mx-0"> <p class="text-2xl text-center font-semibold">
We're Not Your Typical Website Agency.
</p> <div class="flex justify-between pt-4"> <p class="text-accent-primary"> <span class="lg:hidden">Swipe Up</span> <span class="hidden lg:inline">Scroll</span> to find out why.
</p> ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-4xl animate-bounce duration-900 lg:hidden", "name": "mdi:arrow-up" })} ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-4xl animate-bounce duration-900 hidden lg:block", "name": "mdi:arrow-down" })} </div> </div> </section> <section id="about" class="bg-background p-4 lg:py-16 text-text-primary md:flex md:flex-col justify-between"> <h2 class="text-4xl lg:text-5xl font-light">
The SPAP Technology Difference
</h2> <div class="py-2"> <p class="text-lg lg:text-2xl">
At SPAP Technology Solutions, we go beyond delivering websites and
				apps—we empower businesses to thrive in a digital-first world. Our
				approach is built on three pillars:
</p> <div class="lg:p-10 lg:hidden"> ${renderComponent($$result2, "About_PillarList", About_PillarList, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/react/About_PillarList", "client:component-export": "default" })} </div> </div> <div class="flex flex-col lg:flex-row items-center justify-between"> <div class="md:max-w-[50%] lg:order-2"> <video class="object-cover w-full rounded-xl shadow-lg" autoplay loop src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/projects/videos/MacBook%20Pro%20M3%2014-inch%20turn.mp4?t=2024-11-27T22%3A33%3A17.172Z"></video> </div> <div class="lg:w-[900px] w-full"> ${renderComponent($$result2, "About_PillarCards", About_PillarCards, { "client:visible": true, "pillars": pillars, "client:component-hydration": "visible", "client:component-path": "@/components/react/About_PillarCards", "client:component-export": "default" })} </div> </div> </section> <section class="bg-primary" id="Services"> <h2 class="text-xl text-text-primary lg:text-5xl p-4">Core Services</h2> ${renderComponent($$result2, "ServicesContainer", ServicesContainer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/react/ServicesContainer", "client:component-export": "default" })} </section> <section id="featured-projects" class="p-4 text-text-primary bg-primary"> <h2 class="text-4xl lg:text-5xl">Recent Projects</h2>${renderComponent($$result2, "FeaturedProjectsGrid", $$FeaturedProjectsGrid, {})} </section> <section id="testimonials" class="p-4 text-text-primary py-16 pb-32"> <h2 class="text-4xl lg:text-5xl">What Our Clients Say</h2> ${renderComponent($$result2, "TestimonialsContainer", TestimonialsContainer, { "client:visible": true, "testimonials": testimonials, "client:component-hydration": "visible", "client:component-path": "@/components/react/TestimonialsContainer", "client:component-export": "default" })} <div class="bg-slate-800 rounded-md p-4"> <h3 class="text-xl font-extralight">Trusted By These Companies</h3> ${renderComponent($$result2, "TrustedCompaniesContainer", $$TrustedCompaniesContainer, {})} </div> </section> <section id="pricing" class="p-4 text-text-primary bg-primary"> <h2 class="text-4xl">Transparent Pricing. Exceptional Value.</h2> <p class="text-xl text-accent-secondary py-2">
Invest in solutions that deliver results. Our pricing is designed to grow
			with your business and provide unmatched ROI.
</p> <p class="py-2">
We understand that every business has unique needs, which is why we offer
			flexible pricing tailored to your goals. Whether you're looking for a
			custom website, seamless integrations, or expert consulting, our solutions
			are built to scale and deliver measurable results.
</p> <p class="font-extralight text-accent-primary text-2xl py-8">
No hidden fees, no surprises—just clear pricing for premium services.
</p> <div> ${renderComponent($$result2, "PricingContainer", PricingCarousel, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/react/PricingContainer", "client:component-export": "default" })} </div> </section> <section class="" id="cta"> ${renderComponent($$result2, "CTA", $$CTA, {})} </section> <section id="news"> ${renderComponent($$result2, "BlogContainer", BlogContainer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/react/BlogContainer", "client:component-export": "default" })} </section> ` })}`;
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
