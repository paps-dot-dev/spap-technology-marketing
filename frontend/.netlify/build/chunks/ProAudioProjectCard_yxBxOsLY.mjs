import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';

const ProAudioProjectCard = ({ data }) => {
  return /* @__PURE__ */ jsx(motion.div, { initial: { translateX: -100 }, animate: { translateX: 0 }, className: " relative bg-primary w-96 h-[350px] rounded-xl flex flex-col items-start justify-end group", children: /* @__PURE__ */ jsxs("a", { href: `/projects/pro-audio/${data.id}`, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 h-full w-full group-hover:opacity-100 opacity-30 transition rounded-xl", children: /* @__PURE__ */ jsx("img", { className: "w-full h-full object-cover rounded-xl", src: data.thumbnail_url, alt: "project image" }) }),
    /* @__PURE__ */ jsxs("div", { className: "z-20 p-2", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-4xl", children: [
        data.name,
        " - ",
        data.artist
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: data.badges.map((badge, i) => {
        return /* @__PURE__ */ jsx("p", { className: "text-sm", children: badge }, i);
      }) })
    ] })
  ] }) });
};

export { ProAudioProjectCard as P };
