import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_PaPPHYVh.mjs';
import 'kleur/colors';
import { B as Button, $ as $$RootLayout } from '../../chunks/RootLayout_kaoKhfdV.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { I as Input } from '../../chunks/input_C2EPHRup.mjs';
export { renderers } from '../../renderers.mjs';

const ReferralForm = ({ referEmail }) => {
  const [formData, setFormData] = React__default.useState({
    referredBy: referEmail,
    referrals: []
  });
  const [referralData, setReferralData] = React__default.useState({
    name: "",
    email: ""
  });
  const onReferralChange = (e) => {
    setReferralData({
      ...referralData,
      [e.target.id]: e.target.value
    });
  };
  const addReferral = () => {
    const moddedReferrals = [...formData.referrals, referralData];
    setFormData({
      ...formData,
      referrals: moddedReferrals
    });
    setReferralData({
      name: "",
      email: ""
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addReferral();
  };
  const handleSaveReferrals = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // Set the content type for JSON
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to submit form: ${errorMessage}`);
      }
      const data = await response.json();
      if (data.message) {
        alert(data.message);
        window.location.href = `/thank-you`;
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert(`Error during form submission: ${error.message}`);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-xl my-8", children: [
    /* @__PURE__ */ jsx("p", { className: "font-bold py-4", children: "Do know someone who could benefit from my services?" }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
      "Refer them below, and receive a discount for",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-accent-primary font-bold", children: "you" }),
      " ",
      /* @__PURE__ */ jsx("i", { className: "font-bold", children: "AND" }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-accent-pop font-bold", children: "your friend" }),
      " to use for your next project!"
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, children: [
      /* @__PURE__ */ jsxs("label", { className: "text-sm", children: [
        "Referred By Email:",
        /* @__PURE__ */ jsx(Input, { disabled: true, value: formData.referredBy })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-b-2 p-2 border-black" }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 shadow-xl", children: [
        /* @__PURE__ */ jsxs("label", { id: "name", className: "text-sm", children: [
          "Referral Name:",
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              onChange: onReferralChange,
              id: "name",
              value: referralData.name
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "text-sm", children: [
          "Referral Email:",
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              onChange: onReferralChange,
              id: "email",
              value: referralData.email
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "bg-accent-pop mt-4", children: "Add" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "my-4", children: formData.referrals.map((item, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-8 my-4 shadow-sm rounded-xl border-2 border-background-primary",
        children: [
          /* @__PURE__ */ jsx("p", { children: item.name }),
          /* @__PURE__ */ jsx("p", { className: "opacity-50", children: item.email })
        ]
      },
      idx
    )) }),
    /* @__PURE__ */ jsx(Button, { onClick: handleSaveReferrals, children: "Submit" })
  ] });
};

const $$Astro = createAstro("https://spaptechnology.com");
const $$email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$email;
  const { email } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="bg-gradient-to-r from-accent-pop to-accent-primary bg-clip-text text-transparent text-4xl lowercase font-bold">Loved Your Experience? Refer A Friend!</h1> </main> ${renderComponent($$result2, "ReferralForm", ReferralForm, { "client:load": true, "referEmail": email, "client:component-hydration": "load", "client:component-path": "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ReferralForm.tsx", "client:component-export": "default" })} ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/referrals/[email].astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/referrals/[email].astro";
const $$url = "/referrals/[email]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$email,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
