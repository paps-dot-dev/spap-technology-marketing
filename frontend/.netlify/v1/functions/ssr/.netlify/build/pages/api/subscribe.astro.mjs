export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json().catch((err) => {
      console.error("JSON parsing error:", err);
      throw new Error("Invalid JSON payload");
    });
    console.log("Received data:", data);
    const targetUrl = "https://api.sender.net/v2/subscribers";
    let newSubData = {
      email: data.email,
      firstName: data.firstName,
      groups: ["bmGZOp", "e53yQx"],
      trigger_automation: true
    };
    console.log(newSubData.groups);
    const senderResponse = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDcyYjc5M2FjY2VhOWFhM2EyNjdkM2VjOTlkYjc3NWFlNzBiNjc0YjBlZDViODM3NWM0OWVjZWJmNmZiZjc3OGE5ZTY4MTZjMzNmYzkxZTMiLCJpYXQiOiIxNzI2OTQ1OTY1LjE0MTA4NSIsIm5iZiI6IjE3MjY5NDU5NjUuMTQxMDkwIiwiZXhwIjoiNDg4MDU0NTk2NS4xMzg5MTEiLCJzdWIiOiI5MTE1MDciLCJzY29wZXMiOltdfQ.phMTKDpuOCNx4UQ1vBhouML8lQ44FVbyHqSMp9CAclpwmPSlg24OaRLbwIpeoM0apySiLlpPsVpC83z7hyMKXg"}`
        // Ensure this token is set correctly
      },
      body: JSON.stringify(newSubData)
    });
    console.log("Sender.net response status:", senderResponse.status);
    if (!senderResponse.ok) {
      const errorText = await senderResponse.text();
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
