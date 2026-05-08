export function encrypt(text, key) {
  if (!key) return "Key required";
  return [...text]
    .map((c, i) =>
      String.fromCharCode(c.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    )
    .join("");
}

export function decrypt(text, key) {
  return encrypt(text, key);
}
