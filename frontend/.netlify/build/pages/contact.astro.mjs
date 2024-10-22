import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BzMAJ5Fn.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../chunks/RootLayout_BzRscDFz.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { B as Button } from '../chunks/NavigationContainer_Dkbv2ykw.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const ContactForm = () => {
  useState(true);
  const [nonConsentMessage, setNonConsentMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    projectScope: "",
    campaignCategory: "development",
    electronicConsent: true,
    signUpForNewsletter: "Yes"
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  const handleConsentChange = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      electronicConsent: !prevFormData.electronicConsent
    }));
  };
  const handleNewsletterSubscribe = async () => {
    if (formData.electronicConsent) {
      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to submit form: ${errorMessage}`);
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        alert(`Error during form submission: ${error.message}`);
      }
    } else {
      setNonConsentMessage(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.signUpForNewsletter === "Yes") {
        handleNewsletterSubscribe();
      }
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // Set the content type for JSON
        },
        body: JSON.stringify(formData)
        // Send form data as JSON
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to submit form: ${errorMessage}`);
      }
      const data = await response.json();
      if (data.message) {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert(`Error during form submission: ${error.message}`);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "mt-8 w-full lg:my-16 lg:mb-32  ", children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex flex-col gap-4 text-white p-5 rounded-md w-full bg-background-primary/50 lg:p-20",
      children: [
        /* @__PURE__ */ jsxs("label", { className: "text-sm", children: [
          "First Name",
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "firstName",
              onChange: handleInputChange,
              value: formData.firstName,
              required: true,
              type: "text",
              placeholder: "First Name",
              className: "p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "text-sm", children: [
          "Email Address",
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              onChange: handleInputChange,
              value: formData.email,
              required: true,
              type: "email",
              placeholder: "Email Address",
              className: "p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "text-sm", children: [
          "Tell Me a Little About the Project.",
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "projectScope",
              value: formData.projectScope,
              onChange: handleInputChange,
              placeholder: "I want to redesign my website.",
              className: "p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "text-md", children: [
          "I'm interested in more information on",
          /* @__PURE__ */ jsxs(
            "select",
            {
              onChange: handleInputChange,
              id: "campaignCategory",
              value: formData.campaignCategory,
              className: "p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded",
              children: [
                /* @__PURE__ */ jsx("option", { value: "development", children: "Modern Web Tools" }),
                /* @__PURE__ */ jsx("option", { value: "marketing", children: "Email Marketing" }),
                /* @__PURE__ */ jsx("option", { value: "business", children: "Business Tools" }),
                /* @__PURE__ */ jsx("option", { value: "design", children: "Web Design Tips" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "text-xs mt-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              required: true,
              className: "mr-2",
              type: "checkbox",
              checked: formData.electronicConsent,
              id: "electronicConsent",
              onChange: handleConsentChange
            }
          ),
          "I consent to receiving newsletter and email communications from SPAP Technology Solutions.",
          nonConsentMessage && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-bold border-2 border-accent-pop p-4 text-lg rounded my-2", children: "Hey! Looks like you forgot to check this box. Please check it to continue." })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "text-md border-2  p-4 rounded-md  font-bold text-sm", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "rounded-xl lg:w-1/4 w-1/2 mb-2 object-cover",
              src: "https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/RiffsCodeCoffee.png"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-xl", children: "Subscribe to 'Riffs. Code. Coffee.' & Get my Guide to the Modern Web for Free!" }),
          /* @__PURE__ */ jsxs("span", { className: "block font-medium text-xs lg:text-sm mb-4 py-4 lg:w-3/4", children: [
            "A free newsletter where I talk about music, tech, coffee, and everything in between. ",
            /* @__PURE__ */ jsx("br", {}),
            "Subscribe to get my free",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: `Unf[...]k Your Tech Stack Guide` }),
            " ",
            "where I share some of my favorite modern web tools and tips."
          ] }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              onChange: handleInputChange,
              value: formData.signUpForNewsletter,
              id: "signUpForNewsletter",
              className: "p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full lg:text-lg rounded",
              children: [
                /* @__PURE__ */ jsx("option", { children: "Yes" }),
                /* @__PURE__ */ jsx("option", { children: "No" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            className: "my-8 p-10 bg-accent-primary text-text-primary",
            type: "submit",
            children: "Get In Touch."
          }
        )
      ]
    }
  ) });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Let's Chat | SPAP Technology" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex flex-col justify-center items-center"> <h1 class="text-4xl lg:text-7xl lg:p-2 text-center font-bold bg-gradient-to-r from-accent-primary to-accent-pop bg-clip-text text-transparent">
Ready to Amplify Your Web Presence?
</h1> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/ContactForm", "client:component-export": "default" })} </section> ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/contact.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
