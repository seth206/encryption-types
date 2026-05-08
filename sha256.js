
export async function encrypt(text) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

export function decrypt() {
  return "SHA‑256 is one‑way and cannot be decrypted";
}
