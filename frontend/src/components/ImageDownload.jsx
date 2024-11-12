import React, { useState } from "react";
import axios from "axios";

function ImageDownload() {
  const [imageId, setImageId] = useState("");
  const [message, setMessage] = useState("");

  const handleDownload = async () => {
    if (!imageId) {
      setMessage("Please enter an Image ID");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/images/download/${imageId}`,
        {
          responseType: "blob",
        }
      );
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.png");
      document.body.appendChild(link);
      link.click();
      link.remove();
      setMessage("Image downloaded successfully");
    } catch (error) {
      setMessage("Failed to download image");
    }
  };

  return (
    <div style={styles.cardContainer}>
      <h3>Download an Image</h3>
      <input
        type="text"
        placeholder="Enter Image ID"
        value={imageId}
        onChange={(e) => setImageId(e.target.value)}
        style={styles.inputField}
      />
      <button onClick={handleDownload} style={styles.downloadButton}>
        Download Image
      </button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  cardContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "320px",
    textAlign: "center",
    marginBottom: "20px",
  },
  inputField: {
    marginBottom: "12px",
    padding: "10px",
    width: "90%",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  downloadButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  downloadButtonHover: {
    backgroundColor: "#0056b3",
  },
  message: {
    color: "#d9534f",
    fontSize: "14px",
  },
};

export default ImageDownload;
