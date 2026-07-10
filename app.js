// ===============================
// CloudNote Lite v2
// app.js Part 1
// ===============================

import {
db
} from "./firebase.js";

// ===============================
// ELEMENT
// ===============================

const loadingPage =
document.getElementById("loadingPage");

const loginPage =
document.getElementById("loginPage");

const homePage =
document.getElementById("homePage");

const roomInput =
document.getElementById("roomInput");

const pinInput =
document.getElementById("pinInput");

const loginBtn =
document.getElementById("loginBtn");

const roomLabel =
document.getElementById("roomLabel");

// ===============================
// APP
// ===============================

let currentRoom = "";

let currentPin = "";

// ===============================
// START
// ===============================

window.addEventListener("load",()=>{

setTimeout(()=>{

loadingPage.style.display="none";

},800);

});

// ===============================
// LOGIN
// ===============================

loginBtn.addEventListener("click",()=>{

const room =
roomInput.value.trim();

const pin =
pinInput.value.trim();

if(room===""){

alert("Nama ruang wajib diisi");

return;

}

if(pin.length<4){

alert("PIN minimal 4 digit");

return;

}

currentRoom = room;

currentPin = pin;

localStorage.setItem(
"cloudnote-room",
room
);

localStorage.setItem(
"cloudnote-pin",
pin
);

roomLabel.innerText =
room;

loginPage.classList.add("hidden");

homePage.classList.remove("hidden");

});

// ===============================
// AUTO LOGIN
// ===============================

const savedRoom =
localStorage.getItem(
"cloudnote-room"
);

const savedPin =
localStorage.getItem(
"cloudnote-pin"
);

if(savedRoom && savedPin){

roomInput.value =
savedRoom;

pinInput.value =
savedPin;

loginBtn.click();

}
