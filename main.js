document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach((el, index) => {

      // Skip if already revealed
      if (el.classList.contains("active")) return;

      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 120) {
        // Subtle stagger for premium feel
        setTimeout(() => {
          el.classList.add("active");
        }, index * 80);
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  revealOnScroll();

});
