function openModal(projectId, projectDescription) {
  var modal = document.getElementById("modal" + projectId.replace(/ /g, ''));
  modal.style.display = "block";

  // Send Google Analytics event (Open Modal)
  gtag('event', 'Open Modal', {
    'event_category': 'Portfolio Interaction',
    'event_label': projectId,
    'event_value': 1 
  });
}


function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  stopVideoInModal(modal);
  modal.style.display = "none";
}

function stopVideoInModal(modal) {
  var iframes = modal.querySelectorAll('iframe');
  iframes.forEach(function(iframe) {
    var src = iframe.src;
    if (src.includes('youtube.com')) {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else if (src.includes('vimeo.com')) {
      iframe.contentWindow.postMessage('{"method":"pause"}', '*');
    } else if (src.includes('drive.google.com')) {
      // For Google Drive, replace the iframe with a new one
      var newIframe = document.createElement('iframe');
      newIframe.setAttribute('src', src);
      newIframe.setAttribute('style', iframe.getAttribute('style'));
      newIframe.setAttribute('frameborder', iframe.getAttribute('frameborder'));
      newIframe.setAttribute('allow', iframe.getAttribute('allow'));
      newIframe.setAttribute('allowfullscreen', iframe.getAttribute('allowfullscreen'));
      iframe.parentNode.replaceChild(newIframe, iframe);
    }
  });
}

window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    if (event.target == modal) {
      stopVideoInModal(modal);
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



window.addEventListener('load', function() {
  var hash = window.location.hash;
  if (hash === '#modalProject2' || hash === '#modalProject5') {
    var modalId = hash.substring(1); // Remove the '#' from the hash
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Get the text content of the clicked link
    const buttonText = event.target.textContent.trim(); 

    // Send the Google Analytics event
    gtag('event', 'Nav Click', {
      'event_category': 'Navigation',
      'event_label': buttonText
    });
  });
});