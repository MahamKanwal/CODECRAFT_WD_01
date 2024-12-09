// let home = document.getElementById("home");
// let about = document.getElementById("about");
// let services = document.getElementById("services");
// let faq = document.getElementById("faq");
// let contact = document.getElementById("contact");

// home.addEventListener("click", (event) => {
//      event.preventDefault();
// })

// about.addEventListener("click", (event) => {
//      event.preventDefault();
// })

// services.addEventListener("click", (event) => {
//    event.preventDefault();
// })

// faq.addEventListener("click", (event) => {
//      event.preventDefault();
// })

// contact.addEventListener("click", (event) => {
//      event.preventDefault();
// })
  
// Select the navbar
const navbar = document.querySelector('.navbar');

// Add an event listener to check scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

  

// // Select all navigation links
// const navLinks = document.querySelectorAll('.nav-link');

// // Add smooth scrolling behavior
// navLinks.forEach(link => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();

//     // Get the target section ID from the href attribute
//     const targetId = link.getAttribute('href').substring(1);
//     const targetSection = document.getElementById(targetId);

//     // Scroll to the target section smoothly
//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: 'smooth', // Smooth scrolling
//         block: 'start',     // Align section to the top
//       });
//     }
//   });
// });


