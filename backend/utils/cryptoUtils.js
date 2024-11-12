import crypto from "crypto";

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

function encryptImage(imageBuffer) {
  const aesKey = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, iv);

  const encryptedData = Buffer.concat([
    cipher.update(imageBuffer),
    cipher.final(),
  ]);

  const aesKeyEncrypted = crypto.publicEncrypt(publicKey, aesKey);

  return { encryptedData, iv, aesKeyEncrypted };
}

function decryptImage(encryptedData, iv, aesKeyEncrypted) {
  const aesKey = crypto.privateDecrypt(privateKey, aesKeyEncrypted);

  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv);
  const decryptedData = Buffer.concat([
    decipher.update(encryptedData),
    decipher.final(),
  ]);

  return decryptedData;
}

export { encryptImage, decryptImage };
