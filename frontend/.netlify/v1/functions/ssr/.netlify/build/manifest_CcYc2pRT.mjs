import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DfnRGx3A.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.5_@types+node@22.9.0_rollup@4.26.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/blog","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/blog\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/blog.ts","pathname":"/api/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/newsletter","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/newsletter\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"newsletter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/newsletter.ts","pathname":"/api/newsletter","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/notion","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/notion\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"notion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/notion.ts","pathname":"/api/notion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/projects/audio","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/projects\\/audio\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}],[{"content":"audio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/projects/audio.ts","pathname":"/api/projects/audio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/referrals","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/referrals\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"referrals","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/referrals.ts","pathname":"/api/referrals","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/related-projects","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/related-projects\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"related-projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/related-projects.ts","pathname":"/api/related-projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/subscribe","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/subscribe\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"subscribe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/subscribe.ts","pathname":"/api/subscribe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/testimonials/new-testimonial","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/testimonials\\/new-testimonial\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"testimonials","dynamic":false,"spread":false}],[{"content":"new-testimonial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/testimonials/new-testimonial.ts","pathname":"/api/testimonials/new-testimonial","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/testimonials/save-testimonial","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/testimonials\\/save-testimonial\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"testimonials","dynamic":false,"spread":false}],[{"content":"save-testimonial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/testimonials/save-testimonial.ts","pathname":"/api/testimonials/save-testimonial","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/leave-a-review","isIndex":false,"type":"page","pattern":"^\\/leave-a-review\\/?$","segments":[[{"content":"leave-a-review","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/leave-a-review.astro","pathname":"/leave-a-review","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/projects/pro-audio","isIndex":true,"type":"page","pattern":"^\\/projects\\/pro-audio\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"pro-audio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/pro-audio/index.astro","pathname":"/projects/pro-audio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/projects/web/[project]","isIndex":false,"type":"page","pattern":"^\\/projects\\/web\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"web","dynamic":false,"spread":false}],[{"content":"project","dynamic":true,"spread":false}]],"params":["project"],"component":"src/pages/projects/web/[project].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/projects/web","isIndex":true,"type":"page","pattern":"^\\/projects\\/web\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"web","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/web/index.astro","pathname":"/projects/web","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/referrals/[email]","isIndex":false,"type":"page","pattern":"^\\/referrals\\/([^/]+?)\\/?$","segments":[[{"content":"referrals","dynamic":false,"spread":false}],[{"content":"email","dynamic":true,"spread":false}]],"params":["email"],"component":"src/pages/referrals/[email].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DYKJm5V6.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://spaptechnology.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/leave-a-review.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/pro-audio/index.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/web/[project].astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/web/index.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/referrals/[email].astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.5_@types+node@22.9.0_rollup@4.26.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/blog@_@ts":"pages/api/blog.astro.mjs","\u0000@astro-page:src/pages/api/newsletter@_@ts":"pages/api/newsletter.astro.mjs","\u0000@astro-page:src/pages/api/notion@_@ts":"pages/api/notion.astro.mjs","\u0000@astro-page:src/pages/api/projects/audio@_@ts":"pages/api/projects/audio.astro.mjs","\u0000@astro-page:src/pages/api/referrals@_@ts":"pages/api/referrals.astro.mjs","\u0000@astro-page:src/pages/api/related-projects@_@ts":"pages/api/related-projects.astro.mjs","\u0000@astro-page:src/pages/api/subscribe@_@ts":"pages/api/subscribe.astro.mjs","\u0000@astro-page:src/pages/api/testimonials/new-testimonial@_@ts":"pages/api/testimonials/new-testimonial.astro.mjs","\u0000@astro-page:src/pages/api/testimonials/save-testimonial@_@ts":"pages/api/testimonials/save-testimonial.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/leave-a-review@_@astro":"pages/leave-a-review.astro.mjs","\u0000@astro-page:src/pages/projects/pro-audio/index@_@astro":"pages/projects/pro-audio.astro.mjs","\u0000@astro-page:src/pages/projects/web/[project]@_@astro":"pages/projects/web/_project_.astro.mjs","\u0000@astro-page:src/pages/projects/web/index@_@astro":"pages/projects/web.astro.mjs","\u0000@astro-page:src/pages/referrals/[email]@_@astro":"pages/referrals/_email_.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CcYc2pRT.mjs","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/node_modules/.pnpm/@astrojs+react@3.6.2_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.3.1_react@18.3_72ouooxz6cs5apen62xz7wcz2a/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ContactForm":"_astro/ContactForm.D49ESN0W.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/TestimonialForm":"_astro/TestimonialForm.DlXzhNHz.js","@/components/react/AudioProjectShowcase":"_astro/AudioProjectShowcase.s_OSjAqY.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ProjectDetails":"_astro/ProjectDetails.D8ddxMv8.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ReferralForm.tsx":"_astro/ReferralForm.DxjaBwh4.js","@/components/react/ServicesContainer":"_astro/ServicesContainer.6FdsO-iU.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/(pro-audio)/ProAudioTabs":"_astro/ProAudioTabs.BjP669ai.js","@/components/react/FeaturedTechCards":"_astro/FeaturedTechCards.DZMFo6wA.js","@/components/react/BlogContainer":"_astro/BlogContainer.PH70nvsa.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ProjectCard":"_astro/ProjectCard.Bkvm2iLn.js","@astrojs/react/client.js":"_astro/client.CDcPMbZ0.js","/astro/hoisted.js?q=0":"_astro/hoisted.ELsj8Fq3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/contact.DYKJm5V6.css","/favicon.svg","/robots.txt","/shawn-ipad.jpeg","/_astro/AudioProjectShowcase.s_OSjAqY.js","/_astro/BlogContainer.PH70nvsa.js","/_astro/ContactForm.D49ESN0W.js","/_astro/FeaturedTechCards.DZMFo6wA.js","/_astro/ProAudioProjectCard.mllWkCiu.js","/_astro/ProAudioTabs.BjP669ai.js","/_astro/ProjectCard.Bkvm2iLn.js","/_astro/ProjectDetails.D8ddxMv8.js","/_astro/ReferralForm.DxjaBwh4.js","/_astro/ServicesContainer.6FdsO-iU.js","/_astro/TestimonialForm.DlXzhNHz.js","/_astro/button.DvnT3nqW.js","/_astro/client.CDcPMbZ0.js","/_astro/index.B52nOzfP.js","/_astro/index.DI_JGK-E.js","/_astro/index.IykC3QBJ.js","/_astro/input.COZQ8D1Z.js","/_astro/jsx-runtime.CRkqtJS5.js","/_astro/proxy.C1bncMQk.js","/companies/carlton-music.webp","/companies/equature.png","/companies/noble-hauling.webp","/companies/withlovecake-logo.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"NaC5IPAs5IGWef+NxkDywoxLcRWSKiRJ9+qDlGiike8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
