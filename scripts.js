function openModal(projectId, projectDescription) {
  var modal = document.getElementById("modal" + projectId.replace(/ /g, ''));
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Update current year in the footer
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerText = currentYear;

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      behavior: 'smooth',
      top: section.offsetTop,
    });
  }
}

// Testimonial carousel functionality
let slideIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonials() {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > testimonials.length) {
        slideIndex = 1;
    }

    testimonials[slideIndex - 1].style.display = 'block';
    setTimeout(showTestimonials, 5000); // Change testimonial every 5 seconds
}

showTestimonials(); // Start testimonial carousel
