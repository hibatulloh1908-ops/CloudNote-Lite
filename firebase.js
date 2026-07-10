// ===============================
// CloudNote Lite
// firebase.js
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD_Ho3nI5d-n7lZf3jnD8E19JMpnMV8-eM",
  authDomain: "cloudnote-9bb7f.firebaseapp.com",
  projectId: "cloudnote-9bb7f",
  storageBucket: "cloudnote-9bb7f.firebasestorage.app",
  messagingSenderId: "371579501428",
  appId: "1:371579501428:web:aee883867bac141af14a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Export
export { db };
