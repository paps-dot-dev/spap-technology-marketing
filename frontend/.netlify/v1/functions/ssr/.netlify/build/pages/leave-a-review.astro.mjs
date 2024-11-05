import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DpFPBP4F.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../chunks/RootLayout_DbRVkTIL.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';
import { I as Input } from '../chunks/input_CikJfABC.mjs';
import { c as cn, B as Button } from '../chunks/NavigationContainer_DgaB91Uh.mjs';
import * as SliderPrimitive from '@radix-ui/react-slider';
import 'clsx';
import { MdStar, MdStarBorder } from 'react-icons/md';
export { renderers } from '../renderers.mjs';

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-900/20 dark:bg-neutral-50/20", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-neutral-900 dark:bg-neutral-50" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-neutral-200 border-neutral-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-50/50 dark:bg-neutral-950 dark:focus-visible:ring-neutral-300" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

const StarRatingSelector = ({ setRatingValue, ratingValue }) => {
  const ratingValues = [1, 2, 3, 4, 5];
  const handleValueChange = (event, value) => {
    event.preventDefault();
    setRatingValue(value);
  };
  return /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center md:justify-start md:space-x-8", children: ratingValues.map((item) => /* @__PURE__ */ jsx("button", { value: item, className: "text-4xl", onDrag: () => setRatingValue(ratingValue + 1), onClick: (event) => handleValueChange(event, item), children: ratingValue >= item ? /* @__PURE__ */ jsx(MdStar, {}) : /* @__PURE__ */ jsx(MdStarBorder, {}) }, item)) });
};

function TestimonialForm(props) {
  const [ratingValue, setRatingValue] = React__default.useState(1);
  const [formData, setFormData] = React__default.useState({
    name: "",
    companyName: "",
    message: "",
    email: ""
  });
  const saveTestimonial = async () => {
    let formAndRating = {
      name: formData.name,
      company: formData.companyName,
      message: formData.message,
      email: formData.email,
      rating: ratingValue
    };
    try {
      const response = await fetch("/api/testimonials/save-testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // Set the content type for JSON
        },
        body: JSON.stringify(formAndRating)
        // Send form data as JSON
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to submit form: ${errorMessage}`);
      }
      const data = await response.json();
    } catch (error) {
      console.error("Error during form submission:", error);
      alert(`Error during form submission: ${error.message}`);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveTestimonial();
    let formAndRating = {
      name: formData.name,
      company: formData.companyName,
      message: formData.message,
      email: formData.email,
      rating: ratingValue
    };
    try {
      const response = await fetch("/api/testimonials/new-testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // Set the content type for JSON
        },
        body: JSON.stringify(formAndRating)
        // Send form data as JSON
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to submit form: ${errorMessage}`);
      }
      const data = await response.json();
      if (data.message) {
        alert(data.message);
        window.location.href = `/referrals/${formAndRating.email}`;
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert(`Error during form submission: ${error.message}`);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  let { name, companyName, message, email } = formData;
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white p-10 lg:p-20 rounded-xl font-medium space-y-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Leave a Review!" }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Name",
      /* @__PURE__ */ jsx(Input, { onChange: handleChange, id: "name", value: name, className: "text-black", required: true, placeholder: "Your Name" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Company",
      /* @__PURE__ */ jsx(Input, { onChange: handleChange, id: "companyName", value: companyName, className: "text-black", placeholder: "Company Name" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Email Address",
      /* @__PURE__ */ jsx(Input, { onChange: handleChange, id: "email", value: email, className: "text-black", required: true, placeholder: "Company Name" })
    ] }),
    /* @__PURE__ */ jsx(StarRatingSelector, { setRatingValue, ratingValue }),
    /* @__PURE__ */ jsx(Textarea, { onChange: handleChange, id: "message", value: message, className: "min-h-36 text-black", placeholder: "Leave your thoughts here..." }),
    /* @__PURE__ */ jsx(Button, { type: "submit", className: "", size: "lg", children: "Submit Review" })
  ] });
}

const $$LeaveAReview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center justify-center min-h-[50vh] lg:min-h-screen w-full"> <section class="bg-text-primary/25 text-accent-pop font-bold p-8 lg:p-20 rounded-xl w-screen max-w-screen-xl"> ${renderComponent($$result2, "TestimonialForm", TestimonialForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/components/react/TestimonialForm", "client:component-export": "default" })} </section> </main> ` })}`;
}, "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/leave-a-review.astro", void 0);

const $$file = "/Users/shawnpapineau/Developer/SPAP/spap-technology-marketing/frontend/src/pages/leave-a-review.astro";
const $$url = "/leave-a-review";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LeaveAReview,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
