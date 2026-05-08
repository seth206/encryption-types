export async function encrypt(text, key) {
  const keyData = new TextEncoder()
    .encode(key.padEnd(16, "0").slice(0, 16));

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    "AES-GCM",
    false,
    ["encrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    cryptoKey,
    new TextEncoder().encode(text)
  );

  return JSON.stringify({
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(encrypted))
  });
}

export async function decrypt(payload, key) {
  const parsed = JSON.parse(payload);

  const keyData = new TextEncoder()
    .encode(key.padEnd(16, "0").slice(0, 16));

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    "AES-GCM",
    false,
    ["decrypt"]
  );

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: new Uint8Array(parsed.iv) },
    cryptoKey,
    new Uint8Array(parsed.data)
  );

  return new TextDecoder().decode(decrypted);
}
