// Portfolio interactions
// Add your custom JS here (e.g. scroll animations, form handling, etc.)

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded");
});
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Tutup menu otomatis kalau salah satu link diklik
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("open");
    navLinks.classList.remove("open");
  });
});
