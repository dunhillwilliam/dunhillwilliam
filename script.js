document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .hero");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 }
  );

  sections.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});
