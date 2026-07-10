// =====================================
// CloudNote Lite v2
// app.js Part 1
// =====================================

import { db } from "./firebase.js";

const loadingPage = document.getElementById("loadingPage");
const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");

const roomInput = document.getElementById("roomInput");
const pinInput = document.getElementById("pinInput");
const loginBtn = document.getElementById("loginBtn");
const roomLabel = document.getElementById("roomLabel");

// Data aplikasi
let currentRoom = "";
let currentPin = "";

// Loading
window.addEventListener("load", () => {
    setTimeout(() => {
        loadingPage.style.display = "none";
    }, 800);
});

// Login
loginBtn.addEventListener("click", () => {

    const room = roomInput.value.trim().toLowerCase();
    const pin = pinInput.value.trim();

    if (room === "") {
        alert("Nama ruang wajib diisi");
        return;
    }

    if (pin.length < 4) {
        alert("PIN minimal 4 digit");
        return;
    }

    currentRoom = room;
    currentPin = pin;

    localStorage.setItem("cloudnote_room", room);
    localStorage.setItem("cloudnote_pin", pin);

    roomLabel.textContent = room;

    loginPage.classList.add("hidden");
    homePage.classList.remove("hidden");

    console.log("Masuk ke room :", room);

});

// Auto Login
const savedRoom = localStorage.getItem("cloudnote_room");
const savedPin = localStorage.getItem("cloudnote_pin");

if (savedRoom && savedPin) {

    roomInput.value = savedRoom;
    pinInput.value = savedPin;

    loginBtn.click();

}
