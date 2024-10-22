import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_BzMAJ5Fn.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/newsletter","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/newsletter\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"newsletter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/newsletter.ts","pathname":"/api/newsletter","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/related-projects","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/related-projects\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"related-projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/related-projects.ts","pathname":"/api/related-projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/subscribe","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/subscribe\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"subscribe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/subscribe.ts","pathname":"/api/subscribe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DY2gRGO6.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DY2gRGO6.css"}],"routeData":{"route":"/projects/[project]","isIndex":false,"type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project","dynamic":true,"spread":false}]],"params":["project"],"component":"src/pages/projects/[project].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"external","src":"/_astro/contact.DY2gRGO6.css"}],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=()=>{document.getElementById(\"mobile-nav\").showModal()};document.getElementById(\"hamburger-menu\")?.addEventListener(\"click\",()=>n());document.getElementById(\"close-nav\")?.addEventListener(\"click\",()=>{document.getElementById(\"mobile-nav\").close()});\n"}],"styles":[{"type":"inline","content":".hero-bg{background-image:url(shawn-ipad.jpeg);background-size:cover;background-position-x:-100px;margin:0}\n"},{"type":"external","src":"/_astro/contact.DY2gRGO6.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/projects/[project].astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/newsletter@_@ts":"pages/api/newsletter.astro.mjs","\u0000@astro-page:src/pages/api/related-projects@_@ts":"pages/api/related-projects.astro.mjs","\u0000@astro-page:src/pages/api/subscribe@_@ts":"pages/api/subscribe.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects/[project]@_@astro":"pages/projects/_project_.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CJIZ3bBl.mjs","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ServicesContainer":"_astro/ServicesContainer.DSms2yja.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ProjectDetails":"_astro/ProjectDetails.qyerc4xp.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ProjectCard":"_astro/ProjectCard.4qRS8Ff9.js","/astro/hoisted.js?q=0":"_astro/hoisted.ELsj8Fq3.js","/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ContactForm":"_astro/ContactForm.DEHPWD9g.js","@astrojs/react/client.js":"_astro/client.BY2mA-CD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/contact.DY2gRGO6.css","/favicon.svg","/shawn-ipad.jpeg","/_astro/ContactForm.DEHPWD9g.js","/_astro/ProjectCard.4qRS8Ff9.js","/_astro/ProjectDetails.qyerc4xp.js","/_astro/ServicesContainer.DSms2yja.js","/_astro/client.BY2mA-CD.js","/_astro/index.B52nOzfP.js","/_astro/index.CHFvUbuQ.js","/_astro/jsx-runtime.CRkqtJS5.js","/companies/carlton-music.webp","/companies/equature.png","/companies/noble-hauling.webp","/companies/withlovecake-logo.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"MUarxA/IIaAucZW/1ZNu1MWaaWn8k4b+GTo6cIKKd24=","experimentalEnvGetSecretEnabled":false});

export { manifest };
