
const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


