// app/api/contact/route.js
export async function POST(req) {
  const body = await req.json();

  console.log("Received contact form data:", body);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
