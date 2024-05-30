import type { APIRoute } from "astro";

export async function GET() {
  /*if (!product) {
        return new Response(null, {
            status: 404,
            statusText: "Product not found"
        });
    }*/

  return new Response(
    JSON.stringify({ message: "Product retrieved successfullt!" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
