// GET /api/verify → 代理到 Worker
export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const workerUrl = 'https://fifaseek-activation.122196401.workers.dev/verify' + url.search;
  const resp = await fetch(workerUrl);
  const data = await resp.text();
  return new Response(data, {
    status: resp.status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
