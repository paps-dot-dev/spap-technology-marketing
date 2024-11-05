import { s as supabase } from '../../chunks/supabase_C8GpD8xL.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.json();
    console.log("Received data:", formData);
    for (const referral of formData.referrals) {
      const { data, error } = await supabase.from("referrals").insert([
        {
          name: referral.name,
          email: referral.email,
          referred_by: formData.referredBy
        }
      ]).select();
      if (error) {
        console.error("Supabase error:", error);
        return new Response(
          JSON.stringify({ message: "Failed to submit review", error: error.message }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
    }
    return new Response(
      JSON.stringify({ message: "Thank you for your review!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (err) {
    console.error("Request handling error:", err);
    return new Response(
      JSON.stringify({ message: "Invalid JSON payload" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
