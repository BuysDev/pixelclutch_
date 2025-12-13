export async function generateKeyPair() {
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 4096,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  )
  return keyPair
}

export async function exportPublicKey(key: CryptoKey) {
  const exported = await window.crypto.subtle.exportKey("spki", key)
  return btoa(String.fromCharCode(...new Uint8Array(exported)))
}

export async function importPublicKey(pem: string) {
  const binary = Uint8Array.from(atob(pem), c => c.charCodeAt(0))
  return crypto.subtle.importKey(
    "spki",
    binary.buffer,
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    ["encrypt"]
  )
}
async function generateAESKey() {
  return window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  )
}

export async function encryptMessage(message: string, publicKey: CryptoKey) {
  const aesKey = await generateAESKey()

  const encoder = new TextEncoder()
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    encoder.encode(message)
  )

  const rawAes = await crypto.subtle.exportKey("raw", aesKey)
  const encryptedKey = await crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    rawAes
  )

  return { encrypted, iv, encryptedKey }
}

export async function decryptMessage(
  encrypted: ArrayBuffer,
  iv: Uint8Array,
  encryptedKey: ArrayBuffer,
  privateKey: CryptoKey
) {
  const rawAes = await crypto.subtle.decrypt({ name: "RSA-OAEP" }, privateKey, encryptedKey)
  const aesKey = await crypto.subtle.importKey(
    "raw",
    rawAes,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  )

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    aesKey,
    encrypted
  )
  return new TextDecoder().decode(decrypted)
}
