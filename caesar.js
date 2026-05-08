
const shiftChar = (c, shift) => {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90)
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  if (code >= 97 && code <= 122)
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  return c;
};

export function encrypt(text, shift) {
  shift = Number(shift) || 0;
  return [...text].map(c => shiftChar(c, shift)).join("");
}

export function decrypt(text, shift) {
  shift = Number(shift) || 0;
  return [...text].map(c => shiftChar(c, 26 - shift)).join("");
}
