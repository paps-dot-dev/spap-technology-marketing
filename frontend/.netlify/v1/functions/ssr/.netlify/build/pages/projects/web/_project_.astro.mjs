import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_BKCQEo5J.mjs';
import 'kleur/colors';
import { s as supabase } from '../../../chunks/supabase_C8GpD8xL.mjs';
/* empty css                                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdArrowDownward } from 'react-icons/md';
import { a as $$Icon, $ as $$RootLayout } from '../../../chunks/RootLayout_B9PyH6d-.mjs';
export { renderers } from '../../../renderers.mjs';

const ProjectDetailsDropdown = ({
  title,
  data,
  media,
  technologies
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      onClick: () => setIsOpen(!isOpen),
      initial: { translateY: 200, opacity: 0.5 },
      whileInView: { translateY: 0, opacity: 1 },
      transition: { duration: 0.4 },
      className: isOpen ? "bg-primary text-white rounded-xl p-10 w-full lowercase" : "bg-white rounded-xl p-10 w-full lowercase",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between text-5xl", children: [
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { translateX: -100, opacity: 1 },
              whileInView: { translateX: 0, opacity: 1 },
              className: isOpen ? "font-semibold bg-gradient-to-r from-accent-purple to-accent-magenta  bg-clip-text text-transparent" : "text-primary",
              children: title
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { rotate: isOpen ? 180 : 0 },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ jsx(MdArrowDownward, { className: isOpen ? "text-white" : "text-primary" })
            }
          )
        ] }),
        isOpen && /* @__PURE__ */ jsxs(motion.div, { children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "bg-accent-secondary h-1 my-1",
              animate: {
                translateX: isOpen ? [-25, 0] : 0,
                opacity: isOpen ? [0, 0.5, , 1] : [0]
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              className: "py-4 normal-case text-left text-xl",
              animate: {
                translateY: isOpen ? [-50, 0] : 0,
                opacity: isOpen ? [0, 1] : [0]
              },
              children: data
            }
          )
        ] }),
        isOpen && technologies && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4", children: technologies.map(
          (item, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              title: item.name,
              className: "flex relative flex-col items-center justify-center bg-primary/80 rounded-xl p-5 lg:p-10 group hover:bg-black/50",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "object-cover w-16 lg:w-32 group-hover:opacity-20",
                    src: item.thumbnail_url,
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "bottom-5 absolute right-5 font-extralight text-3xl hidden group-hover:block group-hover:transition-all duration-200 ease-linear", children: item.name })
              ]
            },
            idx
          )
        ) })
      ]
    }
  );
};

const ProjectDetails = ({ data }) => {
  return /* @__PURE__ */ jsxs("div", { className: "text-white lowercase space-y-4", children: [
    /* @__PURE__ */ jsx(
      ProjectDetailsDropdown,
      {
        title: "The Problem",
        data: data.problem_description,
        media: "",
        technologies: ""
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectDetailsDropdown,
      {
        title: "The Process",
        data: data.process_description,
        media: "",
        technologies: ""
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectDetailsDropdown,
      {
        title: "The Solution",
        data: data.solution_description,
        media: "",
        technologies: ""
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectDetailsDropdown,
      {
        title: "The tech",
        data: "Here is the list of technologies I used on this project",
        media: "",
        technologies: data.technology_description
      }
    )
  ] });
};

const $$Astro = createAstro("https://spaptechnology.com");
const $$project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const { project } = Astro2.params;
  const { data, error } = await supabase.from("projects").select("*").eq("project_name", project).single();
  if (error) {
    throw new Error("Failed to fetch project" + error);
  }
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": `${data.project_name} | SPAP Technology Solutions`, "description": data.card_description, "imageRef": data.thumbnail_url, "urlSlug": project }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen w-screen relative text-white"> <h1 class="text-7xl w-fit lg:text-[10rem] lg:w-1/2 max-w-screen font-bold opacity-20"> ${data.project_name} </h1> <div class="absolute inset-0 h-full w-full z-20 overflow-y-scroll"> <div class="flex-col flex items-center justify-center h-full lg:w-3/4 lg:mx-auto lg:p-32 lg:mb-64"> <a href="/" class="mr-auto text-5xl my-2 mx-4 hover:text-accent-magenta hover:-translate-x-4 z-30 duration-200 ease-linear">${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:arrow-back" })}</a> <div class="bg-gradient-to-r from-accent-purple/75 to-accent-magenta/75 p-10 lg:p-32 rounded-xl"> <video autoplay muted playsinline loop class="w-full object-cover rounded-xl"${addAttribute(data.thumbnail_url ? data.thumbnail_url : "https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/SPAP%20Logos/Vertical/PNG/White_Vertical%20Lockup_SPAP.png", "src")}></video> </div> <h2 class="lg:text-7xl text-4xl text-center font-extralight py-8"> ${data.project_name} - ${data.company_name} </h2> <h3 class="text-center text-sm">${data.card_description}</h3> </div> <div></div> <div id="project-overview" class="bg-gradient-to-br from-accent-purple/75 to-accent-magenta/75 rounded-xl py-20 px-5 my-8 lg:w-3/4 mx-auto"> ${renderComponent($$result2, "ProjectDetails", ProjectDetails, { "client:visible": true, "data": data, "client:component-hydration": "visible", "client:component-path": "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ProjectDetails", "client:component-export": "default" })} </div> <div class="py-32"> <p class="text-center font-bold text-4xl bg-gradient-to-r from-accent-purple to-accent-magenta bg-clip-text text-transparent">
Ready to Get Results Like ${data.company_name}?
</p> <a href="/contact" class="border-2 p-4 border-accent-purple/75 text-accent-magenta w-3/4 lg:w-1/2 hover:text-white lg:p-6 mx-auto block text-center rounded-xl my-4 hover:bg-accent-magenta hover:border-none hover:scale-110 duration-200 ease-linear">Contact Me</a> </div> <!-- <RelatedProjects tags={data.tags} /> --> </div> </section> ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/web/[project].astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/web/[project].astro";
const $$url = "/projects/web/[project]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$project,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
