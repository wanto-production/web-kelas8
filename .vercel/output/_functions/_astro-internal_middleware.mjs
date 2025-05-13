import { a as auth } from './chunks/auth_BLReEnOR.mjs';
import { d as defineMiddleware, s as sequence } from './chunks/index_B0d-2iLZ.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CwRRveyt.mjs';
import 'kleur/colors';
import './chunks/astro/server_aX1uJ5VZ.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers
  });
  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
