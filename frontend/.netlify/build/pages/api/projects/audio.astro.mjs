import { s as supabase } from '../../../chunks/supabase_C8GpD8xL.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url }) => {
  try {
    const { data, error } = await supabase.from("pro_audio_projects").select("*");
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
