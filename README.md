# Secure Image Transmission

## Overview

This project allows users to upload and download images securely through a React-based frontend and a backend server. 
The backend handles image uploads and serves them with unique IDs. The user can share these IDs for downloading the images,
but only those with a specific key (e.g., "sidd" appended to the ID) are able to successfully download the image.

The app is built with React and styled with modern UI/UX principles for better interactivity and aesthetics. 
The backend uses Node.js and Express to manage image uploads and downloads.

## Features

- **Image Upload**: Allows users to upload an image and receive a unique image ID.
- **Image Download**: Allows users to enter an image ID and download the image if it matches the required key (`sidd`).
- **Responsive Design**: The UI adjusts for different screen sizes for an optimal user experience.
- **Message Notifications**: Provides feedback on the success or failure of image upload and download actions.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Image Handling**: FormData for uploading, Blob for downloading images.
- **State Management**: React hooks (`useState`)
- **API**: Axios for handling API requests
- **Styling**: CSS for layout and design, including custom styles for buttons, inputs, and containers.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your local machine.

### Steps to run the project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Siddc11/SecureImageTransmission.git
   cd SecureImageTransmission

2. **Install dependencies for frontend
   ```bash
   cd frontend
   npm install

3. **Install dependencies for backedn
   ```bash
   cd backend
   npm install

4. Start the Backend Server:

In the backend directory, run the server:
```bash
npm start

5. Run Fronted
npm run dev

**Folder Structure

secure-image-transmission/
├── backend/
│   ├── node_modules/
│   ├── server.js
│   ├── package.json
│   └── uploads/
├── frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ImageUpload.js
│   │   │   └── ImageDownload.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
└── README.md


**Screenshots
HomeScreen
![image](https://github.com/user-attachments/assets/551284a4-95d4-4bca-8e44-4932f613fb6d)
Image Uploaded 
![image](https://github.com/user-attachments/assets/445619a0-5d87-46a2-9d95-d85d4c76d834)
Download with id
![image](https://github.com/user-attachments/assets/56c0051e-b2e0-4ec9-9de7-412fcf359b81)


