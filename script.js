console.log("portfolio loaded");

particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    size: { value: 5 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.9)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.5)";
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// SCROLL ANIMATION (SAFE VERSION)
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

projects.forEach((p) => observer.observe(p));

var typed = new Typed("#typing", {
strings: [
"Web Developer",
"Web Designer",
"Freelancer",
"I build modern websites"
],
typeSpeed: 60,
backSpeed: 40,
loop: true
});