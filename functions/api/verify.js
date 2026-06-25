// ================================================================
//  GET /api/verify — 校验 token 有效性
// ================================================================

async function hmacSign(data, secret) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function onRequestGet({ request, env }) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  const url = new URL(request.url);
  const token = url.searchParams.get('token') || '';
  const ua = url.searchParams.get('ua') || request.headers.get('User-Agent') || '';

  if (!token) {
    return new Response(JSON.stringify({ valid: false, error: 'missing_token' }), { status: 400, headers });
  }

  try {
    const parts = token.split(':');
    const sig = parts.pop();
    const payload = parts.join(':');
    const secret = env.SIGNING_SECRET || 'dev-secret';
    const expectedSig = await hmacSign(payload, secret);

    if (sig !== expectedSig) {
      return new Response(JSON.stringify({ valid: false }), { status: 200, headers });
    }

    const payloadParts = payload.split(':');
    const boundUA = payloadParts[1];
    const expiry = parseInt(payloadParts[2]);

    if (ua !== boundUA || Date.now() > expiry) {
      return new Response(JSON.stringify({ valid: false }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ valid: true }), { status: 200, headers });
  } catch (e) {
    return new Response(JSON.stringify({ valid: false }), { status: 200, headers });
  }
}
