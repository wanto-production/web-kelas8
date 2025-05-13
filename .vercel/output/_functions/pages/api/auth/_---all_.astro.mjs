import { a as auth } from '../../../chunks/auth_BLReEnOR.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_XaomTNl8.mjs';

const ALL = async (ctx) => {
  return auth.handler(ctx.request);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
