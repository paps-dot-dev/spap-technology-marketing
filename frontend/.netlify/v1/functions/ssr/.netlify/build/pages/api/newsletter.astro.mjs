export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json().catch((err) => {
      console.error("JSON parsing error:", err);
      throw new Error("Invalid JSON payload");
    });
    console.log("Received data:", data);
    const targetUrl = `https://api.beehiiv.com/v2
/publications/${"pub_77425650-db9c-4a61-bc68-d5873180b5a9"}/subscriptions`;
    let newSubData = {
      email: data.email,
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: "SPAPWebsite",
      utm_medium: "organic",
      referring_site: "www.spaptechnology.com/contact"
    };
    const beehiivResponse = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"xi6Atroow2LOaLJ5Xok9QhM5wWUyRvISKdiSabrpGWeWt65HWV7hKSFNYzeAuwHU"}`
        // Ensure this token is set correctly
      },
      body: JSON.stringify(newSubData)
    });
    console.log("Sender.net response status:", beehiivResponse.status);
    if (!beehiivResponse.ok) {
      const errorText = await beehiivResponse.text();
      throw new Error(`Failed to send data to Sender.net: ${errorText}`);
    }
    return new Response(
      JSON.stringify({ message: "Subscription successful!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
