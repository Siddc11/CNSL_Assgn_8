import React from "react";
import ImageUpload from "./components/ImageUpload";
import ImageDownload from "./components/ImageDownload";

function App() {
  return (
    <div style={styles.appContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>CNSL Assignment 8</h1>
        <h2 style={styles.subtitle}>Secure Image Transmission</h2>
      </div>
      <div style={styles.contentContainer}>
        <ImageUpload />
        <ImageDownload />
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f9",
    height: "100vh",
    padding: "40px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "3em",
    color: "#333",
    margin: "10px 0",
  },
  subtitle: {
    fontSize: "1.5em",
    color: "#555",
  },
  contentContainer: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default App;
