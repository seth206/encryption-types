
export function encrypt(text, key) {
  return [...text]
    .map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ key.charCodeAt(i % key.length)))
    .join("");
}

export function decrypt(text, key) {
  return encrypt(text, key);
}
