import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aX1uJ5VZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPNHGPDs.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useCallback, useEffect } from 'react';
import { c as cn } from '../chunks/utils_B05Dmz_H.mjs';
import axios from 'axios';
export { r as renderers } from '../chunks/_@astro-renderers_XaomTNl8.mjs';

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

function Form() {
  const [text, setText] = useState("");
  const [pesanList, setPesan] = useState([]);
  const [user, setUser] = useState();
  const fetchPesan = useCallback(() => {
    axios.get("/api/message/get").then((res) => {
      setPesan(res.data.messages);
      console.log(res.data);
    });
  }, []);
  const fetchUser = useCallback(() => {
    axios.get("/api/getsession").then((res) => setUser(res.data.user));
  }, []);
  const sendPesan = useCallback(() => {
    axios.post("/api/message/send", { text }).then((res) => {
      alert(res.data.message);
      fetchPesan();
      setText("");
    });
  }, [text]);
  const deletePesan = useCallback((id) => {
    axios.delete(`/api/message/delete/${id}`).then((res) => {
      alert(res.data.message);
      fetchPesan();
    });
  }, []);
  useEffect(() => {
    fetchPesan();
    fetchUser();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    user ? /* @__PURE__ */ jsx("div", { className: "bg-[#2a263d] rounded-lg max-w-2xl shadow-lg w-full p-6 space-y-4 mb-8", children: /* @__PURE__ */ jsxs("form", { className: "flex gap-2 ", onSubmit: (e) => {
      e.preventDefault();
      sendPesan();
    }, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "pesan",
          required: true,
          placeholder: "isi di sini...",
          value: text,
          onChange: (e) => setText(e.target.value),
          className: "mt-1 block w-full px-4 py-2 bg-[#1e1b2e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: " bg-purple-600 hover:bg-purple-700 w-[300px] transition-colors px-4 py-2 rounded-md font-semibold",
          children: "Kirim Pesan"
        }
      )
    ] }) }) : /* @__PURE__ */ jsx("div", { className: "bg-[#2a263d] rounded-lg max-w-2xl flex shadow-lg w-full p-6 space-y-4 mb-8", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "/auth",
        className: " bg-purple-600 hover:bg-purple-700 w-full transition-colors px-4 py-2 rounded-md font-semibold",
        children: "login untuk kirim pesan"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#2a263d] rounded-lg shadow-lg w-full max-w-2xl min-h-[400px] p-6 space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold border-b border-gray-600 pb-2", children: "Pesan Terbaru" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: pesanList.length > 0 && pesanList.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "bg-[#1e1b2e] p-4 rounded-md border border-gray-700", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-purple-400", children: item.user.name || item.user.email.replaceAll("@gmail.com", "") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-200 mt-1", children: item.message.content }),
        item.user.id && user?.id && /* @__PURE__ */ jsx("button", { onClick: () => deletePesan(item.message.id), className: "text-sm text-red-400", children: "delete" })
      ] }, index)) })
    ] })
  ] });
}

const $$Message = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Titip Pesan", "description": "Place for message board class 8.10", "keywords": ["titip pesan", "web 8.10"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full min-h-screen bg-[#1e1b2e] text-white flex flex-col items-center justify-center px-4 py-10"> <!-- Form Titip Pesan --> ${renderComponent($$result2, "Form", Form, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/react/titippesan.tsx", "client:component-export": "Form" })} </main> ` })}`;
}, "/home/ikhwan-satrio/project/kelas/src/pages/message.astro", void 0);

const $$file = "/home/ikhwan-satrio/project/kelas/src/pages/message.astro";
const $$url = "/message";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Message,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
