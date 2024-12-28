// Owl Carousel setup
$(document).ready(function () {
  $("#testimonial-carousel").owlCarousel({
    loop: true, // Allows continuous loop
    margin: 20, // Space between items
    autoplay: true, // Enable auto-play
    autoplayTimeout: 3000, // Change item every 3 seconds
    responsive: {
      0: {
        items: 1, // On smaller screens, show 1 item
      },
      600: {
        items: 2, // On medium screens, show 2 items
      },
      1000: {
        items: 3, // On larger screens, show 3 items
      },
    },
  });
});

// FAQ toggle functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active"); // Toggle active class

    // Close other open answers
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
  });
});

// Navbar toggle functionality (for `.nav-toggle`)
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Navbar toggle functionality (for `#toggle-btn`)
document.getElementById("toggle-btn").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});
