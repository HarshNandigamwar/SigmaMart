# 🛒 SigmaMart: Modern Serverless E-Commerce Application

## 🌟 Project Overview

**SigmaMart** is a robust, scalable, and performance-driven e-commerce platform designed with a **modern Serverless architecture**.  
Built using **React** for a dynamic frontend and **Firebase** for secure, real-time backend services, SigmaMart offers reliable data persistence and an intuitive shopping experience.

---

## 👨‍💻 Developer & Attribution
**Developer:** Shriharsh Nandigamwar

---

## ✨ Core Feature Set

| Feature | Description | Technical Implementation |
|----------|--------------|---------------------------|
| **Multi-Factor Authentication** | Secure user registration and sign-in via Email/Password and Google Auth providers. | Firebase Authentication |
| **Persistent User State** | Real-time sync of user data, including Cart and Wishlist, across sessions. | Firebase Firestore |
| **Optimized Media Pipeline** | UI images served through a CDN for fast, low-latency delivery. | Cloudinary Integration |
| **Enhanced Search Experience** | Instant search triggered on *Enter* key rotating placeholder text updates every 2 seconds. | React Hooks & Dynamic State |
| **Responsive UI/UX** | Mobile-first, adaptive design across all screen sizes. | Tailwind CSS |
| **Scalable Architecture** | Fully managed, auto-scaling backend without server provisioning. | Serverless BaaS (Firebase) |

---

## 🛠 Tech Stack and Architecture

SigmaMart follows a **modern JAMstack / Serverless Full Stack** architecture for speed, scalability, and simplicity.

### **Frontend (Client-Side)**
- **Framework:** React (Functional Components, Hooks)  
- **Styling:** Tailwind CSS (Utility-First Framework)  
- **Routing:** React Router  
- **Future Enhancements:** Framer Motion (for animations & micro-interactions)

### **Backend (BaaS)**
- **Database:** Firebase Firestore (Real-time NoSQL)  
- **Authentication:** Firebase Auth  
- **Asset Management:** Cloudinary (Image Hosting & Optimization)

---

## ⚙️ Project Setup & Installation

Follow these steps to set up SigmaMart locally:

### **Prerequisites**
- Node.js (LTS version)
- npm or yarn
- Active Firebase Project (with Console Access)

---

### **Step 1: Clone the Repository**
```bash
git clone <your-repo-link>
cd SigmaMart
```
### **Step 2: Install Dependencies**
```bash
npm install
# or
yarn install
```
### **Step 3: Configure Environment Variables**
```bash
# VITE is required for React/Vite dev environment
VITE_FIREBASE_API_KEY="AIzaSy..."
VITE_FIREBASE_AUTH_DOMAIN="your-app-domain.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="your-project-id"
# ...include other required Firebase keys
```
### **Step 4: Run the Application**
```bash
npm run dev
# or
yarn dev

The app will run at your local Vite port, typically:
👉 http://localhost:5173/
```
