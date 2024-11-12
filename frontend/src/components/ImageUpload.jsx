import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/images/upload",
        formData
      );
      setMessage(response.data.message);
      setImageId(response.data.imageId);
    } catch (error) {
      setMessage("Failed to upload image");
    }
  };

  return (
    <div style={styles.cardContainer}>
      <h3>Upload an Image</h3>
      <input type="file" onChange={handleFileChange} style={styles.fileInput} />
      <button onClick={handleUpload} style={styles.uploadButton}>
        Upload Image
      </button>
      {message && <p style={styles.message}>{message}</p>}
      {imageId && (
        <div style={styles.successMessage}>
          <p>Image uploaded successfully!</p>
          <p>
            Image ID: <strong>{imageId}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  cardContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
    marginBottom: "20px",
  },
  fileInput: {
    marginBottom: "12px",
    padding: "8px",
    width: "90%",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  uploadButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  uploadButtonHover: {
    backgroundColor: "#45a049",
  },
  message: {
    color: "#d9534f",
    fontSize: "14px",
  },
  successMessage: {
    backgroundColor: "#e6f7e6",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "6px",
  },
};

export default ImageUpload;
