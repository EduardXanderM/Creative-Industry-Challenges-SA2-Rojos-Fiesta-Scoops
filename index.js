// Firebase configuration and initialization

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRbdcNNdBWDoR9WHUYIHHb4ukoPgYcjCo",
  authDomain: "rojo-fiesta-scoops.firebaseapp.com",
  projectId: "rojo-fiesta-scoops",
  storageBucket: "rojo-fiesta-scoops.firebasestorage.app",
  messagingSenderId: "383721443070",
  appId: "1:383721443070:web:73474b342bded6e05e1faf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Newsletter form submission

const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("newsletter-email").value;

  try {
    await addDoc(collection(db, "newsletter"), {
      email: email,
      createdAt: new Date()
    });

    alert("Subscribed successfully!");
    newsletterForm.reset();
  } catch (error) {
    console.error(error);
  }
});

// Rate Us form submission

const rateForm = document.getElementById("rate-form");

rateForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("rate-name").value;
  const email = document.getElementById("rate-email").value;
  const feedback = document.getElementById("rate-feedback").value;

  try {
    await addDoc(collection(db, "reviews"), {
      name: name,
      email: email,
      feedback: feedback,
      createdAt: new Date()
    });

    alert("Thank you for your feedback!");
    rateForm.reset();
  } catch (error) {
    console.error(error);
  }
});

// Navbar scroll hide/show

let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
  navbar.style.transform = "translateY(-400%)";
} else {
  navbar.style.transform = "translateY(0)";
}

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Hamburger menu toggle

const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// FAQ toggle

const buttons = document.querySelectorAll(".faq-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const isActive = button.classList.contains("active");

    // close all
    buttons.forEach(btn => btn.classList.remove("active"));

    // open clicked one (if it wasn't already open)
    if (!isActive) {
      button.classList.add("active");
    }
  });
});