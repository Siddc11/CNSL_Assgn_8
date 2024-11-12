import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  encryptedData: Buffer,
  iv: Buffer,
  aesKeyEncrypted: Buffer,
});

export default mongoose.model("Image", imageSchema);
