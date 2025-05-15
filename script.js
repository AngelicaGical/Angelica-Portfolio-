const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Toggle dark mode or background color
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Animate h2 elements on scroll
function animateHeadingsOnScroll() {
  const headings = document.querySelectorAll(".animated-heading");
  const triggerPoint = window.innerHeight - 100;

  headings.forEach(h2 => {
    const top = h2.getBoundingClientRect().top;
    if (top < triggerPoint) {
      h2.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", animateHeadingsOnScroll);
window.addEventListener("load", animateHeadingsOnScroll);

function animateHeadingsOnScroll() {
  const headings = document.querySelectorAll(".animated-heading");
  const triggerPoint = window.innerHeight - 100;

  headings.forEach(h2 => {
    const top = h2.getBoundingClientRect().top;
    if (top < triggerPoint) {
      h2.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", animateHeadingsOnScroll);
window.addEventListener("load", animateHeadingsOnScroll);