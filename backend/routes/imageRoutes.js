import express from "express";
import multer from "multer";
import Image from "../models/Image.js";
import { encryptImage, decryptImage } from "../utils/cryptoUtils.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { encryptedData, iv, aesKeyEncrypted } = encryptImage(
      req.file.buffer
    );

    const image = new Image({
      encryptedData,
      iv,
      aesKeyEncrypted,
    });
    await image.save();

    res.status(201).json({
      message: "Image uploaded and encrypted successfully!",
      imageId: image._id,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload image" });
  }
});

router.get("/download/:id", async (req, res) => {
  const { id } = req.params;

  if (!id.includes("sidd")) {
    return res.status(400).json({ error: "Invalid ID or missing keyword" });
  }

  const imageId = id.replace("sidd", "");

  try {
    const image = await Image.findById(imageId);
    if (!image) return res.status(404).json({ error: "Image not found" });

    const decryptedImage = decryptImage(
      image.encryptedData,
      image.iv,
      image.aesKeyEncrypted
    );

    res.setHeader("Content-Type", "image/png");
    res.send(decryptedImage);
  } catch (error) {
    res.status(500).json({ error: "Failed to download image" });
  }
});

export default router;
