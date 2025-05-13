import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aX1uJ5VZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPNHGPDs.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { c as cn } from '../chunks/utils_B05Dmz_H.mjs';
import { createAuthClient } from 'better-auth/client';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { createFormHookContexts, createFormHook } from '@tanstack/react-form';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { z } from 'zod';
import { a as auth } from '../chunks/auth_BLReEnOR.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_XaomTNl8.mjs';

function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

const BETTER_AUTH_URL = "http://localhost:4321/";

const authClient = createAuthClient({
  baseURL: BETTER_AUTH_URL,
  plugins: [inferAdditionalFields()]
});

let navigateOnServerWarned = false;
async function navigate(href, options) {
  {
    if (!navigateOnServerWarned) {
      const warning = new Error(
        "The view transitions client API was called during a server side render. This may be unintentional as the navigate() function is expected to be called in response to user interactions. Please make sure that your usage is correct."
      );
      warning.name = "Warning";
      console.warn(warning);
      navigateOnServerWarned = true;
    }
    return;
  }
}

const { fieldContext, formContext } = createFormHookContexts();
const { useAppForm } = createFormHook({
  fieldComponents: {
    InputForm
  },
  formComponents: {
    ButtonForm
  },
  fieldContext,
  formContext
});
const loginSchema = z.object({
  email: z.string().email().min(5, "it is really your email?"),
  password: z.string().min(8, "password too short min length is 8!")
});
const registerSchema = loginSchema.merge(z.object({
  username: z.string().min(5, "your username too short, min length is 5")
}));
function InputForm({
  label,
  icon: Icon,
  error,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: "relative space-y-1", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Icon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          ...props,
          placeholder: label,
          className: "w-full pl-10 pr-4 py-2 rounded bg-purple-950 bg-opacity-40 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-400", children: error?.[0]?.message })
  ] });
}
function ButtonForm({ children }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "submit",
      className: "w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:opacity-90 text-white py-2 rounded font-semibold",
      children
    }
  );
}
function LoginForm() {
  const [error, setError] = useState();
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: ""
    },
    validators: {
      onChange: loginSchema,
      onSubmit: loginSchema
    },
    onSubmit: ({ value: { email, password } }) => {
      authClient.signIn.email({
        email,
        password
      }, {
        onError: (ctx) => {
          setError(ctx.error.message);
        },
        onSuccess: () => {
          navigate();
        }
      });
    }
  });
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    form.handleSubmit(e);
  }, className: "space-y-4", children: [
    /* @__PURE__ */ jsx(form.AppField, { name: "email", children: (field) => /* @__PURE__ */ jsx(
      field.InputForm,
      {
        type: "email",
        label: "Email",
        icon: FaEnvelope,
        value: field.state.value,
        onChange: (e) => field.handleChange(e.target.value),
        error: field.state.meta.errors
      }
    ) }),
    /* @__PURE__ */ jsx(form.AppField, { name: "password", children: (field) => /* @__PURE__ */ jsx(
      field.InputForm,
      {
        type: "password",
        label: "Password",
        icon: FaLock,
        value: field.state.value,
        onChange: (e) => field.handleChange(e.target.value),
        error: field.state.meta.errors
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx(form.ButtonForm, { children: "Login" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => form.reset(),
          className: "w-full bg-red-500 hover:opacity-90 text-white py-2 rounded font-semibold",
          children: "Reset"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("span", { className: "text-red-400 text-sm", children: error })
  ] });
}
function RegisterForm() {
  const [error, setError] = useState();
  const form = useAppForm({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
    validators: {
      onChange: registerSchema,
      onSubmit: registerSchema
    },
    onSubmit: ({ value: { email, password, username } }) => {
      authClient.signUp.email({
        email,
        password,
        name: username
      }, {
        onError: (ctx) => {
          setError(ctx.error.message);
        },
        onSuccess: () => {
          navigate();
        }
      });
    }
  });
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    form.handleSubmit(e);
  }, className: "space-y-4", children: [
    /* @__PURE__ */ jsx(form.AppField, { name: "username", children: (field) => /* @__PURE__ */ jsx(
      field.InputForm,
      {
        type: "text",
        label: "Full Name",
        icon: FaUser,
        value: field.state.value,
        onChange: (e) => field.handleChange(e.target.value),
        error: field.state.meta.errors
      }
    ) }),
    /* @__PURE__ */ jsx(form.AppField, { name: "email", children: (field) => /* @__PURE__ */ jsx(
      field.InputForm,
      {
        type: "email",
        label: "Email",
        icon: FaEnvelope,
        value: field.state.value,
        onChange: (e) => field.handleChange(e.target.value),
        error: field.state.meta.errors
      }
    ) }),
    /* @__PURE__ */ jsx(form.AppField, { name: "password", children: (field) => /* @__PURE__ */ jsx(
      field.InputForm,
      {
        type: "password",
        label: "Password",
        icon: FaLock,
        value: field.state.value,
        onChange: (e) => field.handleChange(e.target.value),
        error: field.state.meta.errors
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx(form.ButtonForm, { children: "Sign Up" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => form.reset(),
          className: "w-full bg-red-500 hover:opacity-90 text-white py-2 rounded font-semibold",
          children: "Reset"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("span", { className: "text-red-400 text-sm", children: error })
  ] });
}
function AuthTabs() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto bg-[#0f0c29] p-8 rounded-xl shadow-2xl text-white space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center", children: "Create Account" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-purple-300", children: "Create your account now!" }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "register", className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid grid-cols-2 bg-purple-800 rounded mb-6 text-white", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "login", children: "Login" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "register", children: "Register" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "login", children: /* @__PURE__ */ jsx(LoginForm, {}) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "register", children: /* @__PURE__ */ jsx(RegisterForm, {}) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 justify-center", children: [
      /* @__PURE__ */ jsxs("button", { className: "flex-1 bg-white text-black py-2 rounded flex items-center justify-center gap-2 font-semibold", children: [
        /* @__PURE__ */ jsx("i", { className: "fab fa-google" }),
        "Google"
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "flex-1 bg-blue-600 text-white py-2 rounded flex items-center justify-center gap-2 font-semibold", children: [
        /* @__PURE__ */ jsx("i", { className: "fab fa-facebook" }),
        "Facebook"
      ] })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Auth;
  const session = await auth.api.getSession({
    headers: Astro2.request.headers
  });
  if (session?.user) return Astro2.redirect("/home");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "login", "keywords": ["web kelas 8.10 login", "web kelas 8.10"], "description": "login page of web 8.10" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full min-h-screen bg-[#1e1b2e] text-white flex items-center justify-center px-4"> ${renderComponent($$result2, "AuthTabs", AuthTabs, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/react/authform.tsx", "client:component-export": "default" })} </main> ` })}`;
}, "/home/ikhwan-satrio/project/kelas/src/pages/auth.astro", void 0);

const $$file = "/home/ikhwan-satrio/project/kelas/src/pages/auth.astro";
const $$url = "/auth";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Auth,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
