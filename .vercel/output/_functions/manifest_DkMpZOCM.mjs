import 'kleur/colors';
import { i as decodeKey } from './chunks/astro/server_aX1uJ5VZ.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_CwRRveyt.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CBKOxM5R.mjs';

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/ikhwan-satrio/project/kelas/","cacheDir":"file:///home/ikhwan-satrio/project/kelas/node_modules/.astro/","outDir":"file:///home/ikhwan-satrio/project/kelas/dist/","srcDir":"file:///home/ikhwan-satrio/project/kelas/src/","publicDir":"file:///home/ikhwan-satrio/project/kelas/public/","buildClientDir":"file:///home/ikhwan-satrio/project/kelas/dist/client/","buildServerDir":"file:///home/ikhwan-satrio/project/kelas/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B9ifMGJ4.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B9ifMGJ4.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/[...all]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...all","dynamic":true,"spread":true}]],"params":["...all"],"component":"src/pages/api/auth/[...all].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/getsession","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/getsession\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"getsession","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/getsession.ts","pathname":"/api/getsession","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/message/delete/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/message\\/delete\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"message","dynamic":false,"spread":false}],[{"content":"delete","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/message/delete/[id].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/message/get","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/message\\/get\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"message","dynamic":false,"spread":false}],[{"content":"get","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/message/get.ts","pathname":"/api/message/get","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/message/send","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/message\\/send\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"message","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/message/send.ts","pathname":"/api/message/send","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B9ifMGJ4.css"}],"routeData":{"route":"/auth","isIndex":false,"type":"page","pattern":"^\\/auth\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth.astro","pathname":"/auth","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B9ifMGJ4.css"}],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B9ifMGJ4.css"}],"routeData":{"route":"/message","isIndex":false,"type":"page","pattern":"^\\/message\\/?$","segments":[[{"content":"message","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/message.astro","pathname":"/message","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B9ifMGJ4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ikhwan-satrio/project/kelas/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/home/ikhwan-satrio/project/kelas/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/home/ikhwan-satrio/project/kelas/src/pages/auth.astro",{"propagation":"in-tree","containsHead":true}],["/home/ikhwan-satrio/project/kelas/src/pages/home.astro",{"propagation":"in-tree","containsHead":true}],["/home/ikhwan-satrio/project/kelas/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/ikhwan-satrio/project/kelas/src/pages/message.astro",{"propagation":"in-tree","containsHead":true}],["/home/ikhwan-satrio/project/kelas/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/auth@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/home@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/message@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/auth/[...all]@_@ts":"pages/api/auth/_---all_.astro.mjs","\u0000@astro-page:src/pages/api/getsession@_@ts":"pages/api/getsession.astro.mjs","\u0000@astro-page:src/pages/api/message/delete/[id]@_@ts":"pages/api/message/delete/_id_.astro.mjs","\u0000@astro-page:src/pages/api/message/get@_@ts":"pages/api/message/get.astro.mjs","\u0000@astro-page:src/pages/api/message/send@_@ts":"pages/api/message/send.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/message@_@astro":"pages/message.astro.mjs","\u0000@astro-page:src/pages/auth@_@astro":"pages/auth.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/ikhwan-satrio/project/kelas/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DCyw5y8E.mjs","\u0000@astrojs-manifest":"manifest_DkMpZOCM.mjs","@/components/react/authform.tsx":"_astro/authform.CN_YyE8z.js","@/components/react/titippesan.tsx":"_astro/titippesan.C_DC78Ks.js","@/components/svelte/Footer.svelte":"_astro/Footer.5MHhkbjG.js","@/components/svelte/Navbar.svelte":"_astro/Navbar.CWz4X5DV.js","@astrojs/react/client.js":"_astro/client.BHhn6Sbv.js","@astrojs/svelte/client.js":"_astro/client.svelte.mRXyTg1U.js","/home/ikhwan-satrio/project/kelas/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.r9EoUwFA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/IMG-20250424-WA0029.C6LST-0l.jpg","/_astro/IMG-20250424-WA0037.CBUNqTzT.jpg","/_astro/IMG-20250424-WA0030.Cqjq_H4r.jpg","/_astro/IMG-20250424-WA0025.CugpyV3M.jpg","/_astro/IMG-20250424-WA0034.2eIzGgWn.jpg","/_astro/IMG-20250424-WA0027.BTukeI8S.jpg","/_astro/IMG-20250424-WA0033.WOqOzgz8.jpg","/_astro/IMG-20250424-WA0041.Bgfj0hcU.jpg","/_astro/IMG-20250424-WA0049.DkWfziyn.jpg","/_astro/IMG-20250424-WA0042.DahprC0v.jpg","/_astro/IMG-20250424-WA0045.Br2xh8Xr.jpg","/_astro/IMG-20250424-WA0050.Dkt6Mxx7.jpg","/_astro/IMG-20250424-WA0048.B4MiMUcq.jpg","/_astro/depan.BJ4SuPwk.jpg","/_astro/fa-regular-400.BjRzuEpd.woff2","/_astro/fa-brands-400.D_cYUPeE.woff2","/_astro/fa-solid-900.CTAAxXor.woff2","/_astro/fa-v4compatibility.C9RhG_FT.woff2","/_astro/fa-regular-400.DZaxPHgR.ttf","/_astro/fa-brands-400.D1LuMI3I.ttf","/_astro/fa-solid-900.D0aA9rwL.ttf","/_astro/fa-v4compatibility.CCth-dXg.ttf","/_astro/about.B9ifMGJ4.css","/IMG-20250424-WA0024.jpg","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.r9EoUwFA.js","/_astro/Footer.5MHhkbjG.js","/_astro/Navbar.CWz4X5DV.js","/_astro/authform.CN_YyE8z.js","/_astro/client.BHhn6Sbv.js","/_astro/client.svelte.mRXyTg1U.js","/_astro/clsx.B-dksMZM.js","/_astro/disclose-version.NZTpNUN0.js","/_astro/index.C7R7J_0t.js","/_astro/index.DfT8ewGw.js","/_astro/render.BXTdNrX2.js","/_astro/router.DnZMHVsn.js","/_astro/titippesan.C_DC78Ks.js","/_astro/utils.lbQQMnGR.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"0Im5QruDE0fPPjfNUs+df97to50nudYbqTIFKEpKsVk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
