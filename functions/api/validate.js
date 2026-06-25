// ================================================================
//  POST /api/validate — 验证激活码
//  绑定: KV namespace "ACTIVATION_CODES" + secret "SIGNING_SECRET"
// ================================================================

async function hmacSign(data, secret) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function createToken(code, ua, secret) {
  const expiry = Date.now() + 30 * 24 * 60 * 60 * 1000;
  const payload = code + ':' + ua + ':' + expiry;
  const sig = await hmacSign(payload, secret);
  return payload + ':' + sig;
}

export async function onRequestPost({ request, env }) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const body = await request.json();
    const code = (body.code || '').trim().toUpperCase();
    const ua = (body.ua || request.headers.get('User-Agent') || '');

    if (!/^FIFASEK-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/.test(code)) {
      return new Response(JSON.stringify({ success: false, error: 'invalid_format' }), { status: 400, headers });
    }

    const raw = await env.ACTIVATION_CODES.get('code:' + code);
    if (!raw) {
      return new Response(JSON.stringify({ success: false, error: 'invalid_code' }), { status: 403, headers });
    }

    const record = JSON.parse(raw);
    if (record.usedCount >= record.maxUses) {
      return new Response(JSON.stringify({ success: false, error: 'exhausted' }), { status: 403, headers });
    }

    record.usedCount++;
    record.lastUsedAt = new Date().toISOString();
    record.lastUA = ua;
    await env.ACTIVATION_CODES.put('code:' + code, JSON.stringify(record));

    const secret = env.SIGNING_SECRET || 'dev-secret';
    const token = await createToken(code, ua, secret);
    return new Response(JSON.stringify({ success: true, token: token }), { status: 200, headers });

  } catch (e) {
    return new Response(JSON.stringify({ success: false, error: 'server_error' }), { status: 500, headers });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400' }
  });
}
