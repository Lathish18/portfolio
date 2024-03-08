function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadInitialSections();
});

function loadInitialSections() {
  // Load initial sections with a small delay
  animateElement(document.getElementById('desktop-nav'), 0);
  animateElement(document.getElementById('profile'), 200);
}

// Function to animate a single element
function animateElement(element, delay) {
  setTimeout(function () {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, delay);
}

// Add a scroll event listener to load the remaining sections with delay
document.addEventListener("scroll", function () {
  loadRemainingSections();
});

function loadRemainingSections() {
  // Load remaining sections with a delay while scrolling down
  const sectionsToLoad = document.querySelectorAll('.section:not(#desktop-nav, #profile)');

  sectionsToLoad.forEach(function (section, index) {
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
      // If the section is in the viewport
      animateElement(section, index * 100); // Adjust delay for remaining sections
    }
  });
}
