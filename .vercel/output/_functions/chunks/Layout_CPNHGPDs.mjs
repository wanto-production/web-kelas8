import { c as createComponent, a as createAstro, d as addAttribute, e as renderScript, b as renderTemplate, r as renderComponent, f as renderHead, g as renderSlot, h as renderTransition } from './astro/server_aX1uJ5VZ.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { p as push, a as pop } from './_@astro-renderers_XaomTNl8.mjs';

const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

function Footer($$payload, $$props) {
	push();
	$$payload.out += `<footer class="w-full bg-gray-900 py-6 flex flex-col items-center"><a href="#top" class="text-gray-300 text-3xl duration-200 hover:scale-110" aria-label="icon up"><i class="fa-solid fa-chevron-up"></i></a> <p class="mt-3 text-gray-300 text-lg font-poppins font-bold">${escape_html(new Date().getFullYear())} © Ikhwan Satrio | 8.10</p></footer>`;
	pop();
}

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/ikhwan-satrio/project/kelas/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ikhwan-satrio/project/kelas/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, keywords } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>8.10 | ${title || "home"}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}${keywords && keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(keywords.join(","), "content")}>`}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="bg-gray-900" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", null, { "client:only": "svelte", "client:component-hydration": "only", "data-astro-cid-sckkx6r4": true, "client:component-path": "@/components/svelte/Navbar.svelte", "client:component-export": "default" })} <div data-astro-cid-sckkx6r4${addAttribute(renderTransition($$result, "mrg5k34m"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/svelte/Footer.svelte", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/home/ikhwan-satrio/project/kelas/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
