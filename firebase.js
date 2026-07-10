// ===============================
// CloudNote Lite
// Firebase Config
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
getAuth,
signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// ===============================
// GANTI DENGAN FIREBASE CONFIG
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyD_Ho3nI5d-n7lZf3jnD8E19JMpnMV8-eM",
  authDomain: "cloudnote-9bb7f.firebaseapp.com",
  projectId: "cloudnote-9bb7f",
  storageBucket: "cloudnote-9bb7f.firebasestorage.app",
  messagingSenderId: "371579501428",
  appId: "1:371579501428:web:aee883867bac141af14a21"
};

// ===============================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


// Login Anonymous

signInAnonymously(auth)
.then(()=>{

console.log("Anonymous Login Success");

})
.catch((err)=>{

console.error(err);

});

export {

db,

auth

};
