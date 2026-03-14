console.log("portfolio loaded");

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});
var typed = new Typed("#typing", {
strings: [
"Web Developer",
"JavaScript Developer",
"Freelancer",
"I build modern websites"
],
typeSpeed: 60,
backSpeed: 40,
loop: true
});