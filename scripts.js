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

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showTestimonial() {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove('active');
    });
    testimonials[index].classList.add('active');
    index = (index + 1) % testimonials.length;
  }

  setInterval(showTestimonial, 7000);
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}