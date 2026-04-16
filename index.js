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