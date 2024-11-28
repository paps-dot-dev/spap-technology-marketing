import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_BwxQodTz.mjs';
import 'kleur/colors';
import { s as supabase } from './supabase_C8GpD8xL.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdClose, MdArrowForward } from 'react-icons/md';

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "lowercase flex flex-col items-center lg:p-20  rounded-xl", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        onHoverStart: () => setHovered(true),
        onHoverEnd: () => setHovered(false),
        onTap: () => setHovered(true),
        initial: { opacity: 0.1, scale: 0.2 },
        whileInView: { opacity: 1, scale: 1 },
        exit: { opacity: 0, z: 10, scale: 0.5 },
        transition: { delay: 0.1, stiffness: 0.2 },
        className: "card  max-h-[500px] lg:w-full shadow-xl z-10 relative rounded-xl",
        children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              className: "p-10 z-10 object-cover w-full h-full",
              src: project.thumbnail_url !== null ? project.thumbnail_url : "https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/SPAP%20Logos/Icon/PNG/Black_Icon%20Lockup_SPAP.png"
            }
          ),
          hovered && /* @__PURE__ */ jsxs(
            motion.div,
            {
              animate: {
                opacity: hovered ? [0, 0.5, , 1] : [1, 0]
              },
              transition: { duration: 0.5 },
              className: "absolute top-0 h-full w-full bg-black/90 z-20 flex justify-center items-center flex-col rounded-xl gap-4",
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setHovered(false),
                    className: "text-3xl text-accent-primary absolute p-4 top-5 right-5 hover:scale-125 ease-linear duration-100 hover:text-accent-secondary z-40",
                    children: /* @__PURE__ */ jsx(MdClose, { onClick: () => setHovered(false) })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.p,
                  {
                    initial: { translateX: -100, opacity: 0 },
                    whileInView: { translateX: 0, opacity: 1 },
                    transition: { duration: 0.2 },
                    className: "text-4xl text-text-primary font-bold",
                    children: "View Project"
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: `/projects/web/${project.project_name}`,
                    initial: { scale: 0.5, opacity: 0 },
                    whileInView: { opacity: 1, scale: 1 },
                    whileTap: { scale: 1.2 },
                    className: " text-5xl px-16 border-white border-2 rounded-full text-accent-primary hover:text-accent-secondary group hover:border-accent-secondary",
                    children: /* @__PURE__ */ jsx(MdArrowForward, { className: "group-hover:translate-x-16 duration-200 ease-linear" })
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "px-2 py-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-xl lg:text-4xl", children: project.project_name }),
      /* @__PURE__ */ jsx("p", { className: "text-xs font-extralight py-2", children: project.card_description }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center py-1 gap-2", children: project.tags?.map((tag) => /* @__PURE__ */ jsx(
        "p",
        {
          className: `bg-accent-primary/75 odd:bg-accent-secondary/75 text-text-primary rounded-full p-1 w-20 text-center text-xs`,
          children: tag
        }
      )) })
    ] })
  ] });
};

const $$FeaturedProjectsGrid = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("projects").select("*");
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8"> ${data.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", ProjectCard, { "key": project.id, "project": project, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ProjectCard", "client:component-export": "default" })}`)} </div>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/FeaturedProjectsGrid.astro", void 0);

export { $$FeaturedProjectsGrid as $ };
