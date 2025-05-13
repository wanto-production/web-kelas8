import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aX1uJ5VZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPNHGPDs.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_XaomTNl8.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-4"> <h1 class="text-6xl font-extrabold text-red-500 mb-4">404</h1> <p class="text-xl md:text-2xl mb-6">Oops! error | page not found.</p> <a href="/" class="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold text-white">
back
</a> <p class="text-sm text-gray-400 mt-10">Web 8.10 • Astro Project</p> </main> ` })}`;
}, "/home/ikhwan-satrio/project/kelas/src/pages/404.astro", void 0);

const $$file = "/home/ikhwan-satrio/project/kelas/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
