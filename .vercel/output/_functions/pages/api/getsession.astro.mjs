export { r as renderers } from '../../chunks/_@astro-renderers_XaomTNl8.mjs';

const GET = async ({ locals }) => {
  return Response.json({
    user: locals.user,
    session: locals.session
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
