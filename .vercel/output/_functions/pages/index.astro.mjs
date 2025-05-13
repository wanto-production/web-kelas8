import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aX1uJ5VZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPNHGPDs.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_XaomTNl8.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "landing", "description": "a landing page of web 8.10", "keywords": ["web kelas", "web kelas 8.10", "web ikhwan"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative w-full h-screen flex justify-center items-center bg-white"> <!-- Gambar dengan efek blur dan transparansi --> <img src="/IMG-20250424-WA0024.jpg" alt="kelas" class="w-full h-screen object-cover object-center absolute top-0 z-0 animate-blurIn opacity-80 pointer-events-none"> <!-- Overlay hitam transparan untuk meningkatkan kontras teks --> <div class="absolute inset-0 bg-black opacity-40 z-10"></div> <!-- Konten Teks --> <div class="relative z-20 text-center text-white flex flex-col gap-3"> <div class=" flex flex-col gap-2"> <h1 class="motion-preset-slide-up-lg text-6xl font-extrabold mb-4 text-transparent bg-clip-text" style="
            background-image: linear-gradient(
              -11deg,
              white -1%,
              white 49%,
              crimson 49%,
              crimson 99%
            );
          ">
Welcome to Class
</h1> <h1 class=" motion-preset-slide-up-lg text-8xl font-bold">8.10</h1> </div> <p class="text-lg mb-6 motion-preset-slide-up">Explore and learn more about our class activities</p> </div> </main> ` })}`;
}, "/home/ikhwan-satrio/project/kelas/src/pages/index.astro", void 0);

const $$file = "/home/ikhwan-satrio/project/kelas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
