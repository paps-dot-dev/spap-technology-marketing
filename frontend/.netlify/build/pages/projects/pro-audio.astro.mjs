import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../../chunks/astro/server_BKCQEo5J.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../../chunks/RootLayout_CLCoi8gq.mjs';
import { s as supabase } from '../../chunks/supabase_C8GpD8xL.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { P as ProAudioProjectCard } from '../../chunks/ProAudioProjectCard_yxBxOsLY.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const AudioProjectShowcase = ({ data }) => {
  return /* @__PURE__ */ jsxs("div", { className: " ", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Click on a Project Below to learn more." }) }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-8 mb-32", children: data?.map((item) => /* @__PURE__ */ jsx(ProAudioProjectCard, { data: item }, item.id)) })
  ] });
};

const $$CreditsContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>
credits
</div>`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/astro/CreditsContainer.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("pro_audio_projects").select("*");
  if (error) {
    throw new Error("Failed to fetch projects: " + error.message);
  }
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-screen p-4"> <h1 class="text-7xl">Pro Audio</h1> ${renderComponent($$result2, "AudioProjectShowcase", AudioProjectShowcase, { "client:load": true, "data": data, "client:component-hydration": "load", "client:component-path": "@/components/react/AudioProjectShowcase", "client:component-export": "default" })} </section> <section> <h2 class="text-5xl">Playlists & Credits</h2> ${renderComponent($$result2, "CreditsContainer", $$CreditsContainer, {})} </section> ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/pro-audio/index.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/pro-audio/index.astro";
const $$url = "/projects/pro-audio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
