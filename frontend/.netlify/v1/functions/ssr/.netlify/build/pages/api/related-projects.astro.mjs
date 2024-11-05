import { s as supabase } from '../../chunks/supabase_C8GpD8xL.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  try {
    const searchParams = new URL(url).searchParams;
    const tags = searchParams.getAll("tags");
    if (!tags || tags.length === 0) {
      return new Response(JSON.stringify({ error: "Missing tags parameter" }), {
        status: 400
      });
    }
    const { data, error } = await supabase.from("projects").select("*").contains("tags", tags);
    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
