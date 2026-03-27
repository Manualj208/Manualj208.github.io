// Manual J USA - Main JavaScript

// Mobile Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(function (question) {
  question.addEventListener("click", function () {
    const item = this.parentElement;
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(function (faq) {
      faq.classList.remove("active");
    });
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
