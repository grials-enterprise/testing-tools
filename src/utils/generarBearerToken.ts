import * as crypto from 'crypto';

export const generarBearerToken = (payload: any, secretKey: string): string => {
  // 1. Header
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  // 2. Codify in Base64URL
  const base64url = (obj: any): string =>
    Buffer.from(JSON.stringify(obj)).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const headerEncoded = base64url(header);
  const payloadEncoded = base64url(payload);

  // 3. Create the signature with HMAC-SHA256
  const data = `${headerEncoded}.${payloadEncoded}`;
  const signature = crypto
    .createHmac('sha256', secretKey)
    .update(data)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  // 4. Build the token
  const token = `${data}.${signature}`;

  // 5. Return with Bearer prefix
  return `Bearer ${token}`;
};
