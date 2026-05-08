export function encrypt(text) {
  return btoa(unescape(encodeURIComponent(text)));
}

export function decrypt(text) {
  return decodeURIComponent(escape(atob(text)));
}
