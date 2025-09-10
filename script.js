// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // close mobile menu after clicking
      document.querySelector("nav ul").classList.remove("show");
    }
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Highlight active section in navbar on scroll
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll("section");
  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      let id = section.getAttribute("id");
      document.querySelector(`nav a[href="#${id}"]`)?.classList.add("active");
    }
  });
});
