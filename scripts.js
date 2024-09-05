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
  iframes.forEach(function (iframe) {
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

window.onclick = function (event) {
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



window.addEventListener('load', function () {
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

document.addEventListener('DOMContentLoaded', function () {
  const jobCards = document.querySelectorAll('.job-card');
  const modal = document.getElementById('jobModal');
  const closeBtn = modal.querySelector('.close');
  const modalTitle = document.getElementById('modalJobTitle');
  const modalCompany = document.getElementById('modalCompany');
  const modalDate = document.getElementById('modalDate');
  const modalAchievements = document.getElementById('modalAchievements');
  const eduItems = document.querySelectorAll('.education-item');
  const eduModal = document.getElementById('eduModal');
  const eduCloseBtn = eduModal.querySelector('.close');
  const modalEduTitle = document.getElementById('modalEduTitle');
  const modalInstitution = document.getElementById('modalInstitution');
  const modalEduDate = document.getElementById('modalEduDate');
  const modalDiploma = document.getElementById('modalDiploma');

  // Job data (you can replace this with actual data from your backend)
  const jobData = {
    1: {
      achievements: [
        "Pioneer a content marketing strategy focused on promoting the Pensacola lifestyle, transforming the brand into a trusted resource for potential homebuyers and significantly boosting engagement.",
        "Design visually compelling print and digital advertising adhering to brand guidelines, enhancing overall marketing aesthetics.",
        "Manage automated email marketing campaigns using CRM tools, ensuring personalized communication with leads and clients.",
        "Conduct website audits and implement SEO best practices, resulting in improved search visibility and user retention.",
        "Utilize CRM tools to segment audiences and tailor marketing campaigns, increasing open rates and click-through rates."
      ]
    },
    2: {
      achievements: [
        "Created and reviewed over 400 marketing materials using Adobe Illustrator, InDesign, and Photoshop, ensuring quality, consistency, and alignment with brand guidelines.",
        "Optimized marketing processes with project management software, boosting team efficiency by 22% and enhancing workflow and communication.",
        "Led a campaign to boost Google My Business rating from 3.0 to 4.6 stars in 3 months, increasing reviews by 850% and surpassing the 12-month goal in just one quarter.",
        "Implemented marketing analytics tools to track KPIs and provide data-driven insights for campaign optimization.",
        "Managed and organized marketing assets including photography, video, and renderings, improving asset retrieval time and supporting organizational goals.",
        "Spearheaded a rebranding campaign for 15 communities, updating marketing materials, signage, and branded items within one month.",
        "Designed and executed high-impact paid search campaigns, including Red Tag and Building Memories, significantly increasing lead generation and market visibility.",
        "Contributed creatively to the naming of floorplans and communities, enhancing product appeal and market differentiation.",
        "Captured professional photographs of a division of 45+ employees to create an internal directory, improving internal communication and team collaboration.",
        "Utilized Microsoft Excel to prepare and analyze marketing reports, optimizing campaign performance and meeting deadlines with 100% accuracy."
      ]
    },
    3: {
      achievements: [
        "Managed over 3000 incoming internet leads per year and provided prompt email/phone responses while boosting appointment conversion rates to 12%.",
        "Leveraged CRM systems to manage customer relationships and optimize the sales funnel, improving lead qualification by 30%.",
        "Developed and maintained a robust marketing metrics dashboard to track campaign performance and ROI.",
        "Implemented automated drip email campaigns using marketing automation tools, ensuring consistent and timely communication with leads.",
        "Utilized social listening tools to monitor brand sentiment and engage with customers across social media platforms, increasing positive brand mentions by 40%. ",
        "Introduced a call tracking and analytics system, streamlining customer interactions, gathering critical feedback, and significantly improving customer satisfaction and training outcomes.",
        "Developed and implemented a lead scoring system, improving the efficiency of the sales funnel by 25%. ",
        "Produced and maintained weekly traffic and monthly sales reports, providing insights that improved marketing strategies and enhanced performance tracking.",
        "Trained and empowered a 20-member sales team on the new enterprise CRM system, resulting in improved adoption and sales effectiveness across the division."
      ]
    },
    4: {
      achievements: [
        "Planned and organized sales presentations, showcasing model homes and sales materials to drive interest and close deals.",
        "Maintained quality customer service and guided buyers through the sales process, improving conversion rates.",
        "Analyzed market data to ensure community competitiveness and optimize sales strategies.",
        "Managed accurate and timely contract paperwork, demonstrating attention to detail and organizational skills."
      ]
    },
    5: {
      achievements: [
        "Conducted strategic business development activities, including lead generation plans and networking efforts, which led to an average of $5 million in new home sales annually.",
        "Managed and maintained model and community like a personal retail business, increasing sales.",
        "Conducted weekly customer care calls and community team meetings, improving customer satisfaction scores.",
        "Maintained inventory of sales collateral and ensured all signage was clean and new, enhancing community appeal.",
        "Executed precise contract paperwork and managed earnest money deposits within 24 business hours.",
        "Consistently met or exceeded monthly sales and closing goals."
      ]
    },
    6: {
      achievements: [
        "Coordinated various events from intimate gatherings to large corporate functions, increasing guest satisfaction scores.",
        "Supervised and scheduled teams of cast members, ensuring optimal staffing for various events.",
        "Collaborated with cross-functional teams to plan and execute a week-long leadership training event for Big 4 firm PricewaterhouseCoopers' summer interns at all 4 Disney parks, including a \"Chopped\"-style cooking competition, ensuring a seamless, safe, and high-quality experience for clients.",
        "Awarded multiple times for exceptional guest service, maintaining a high positive feedback rate.",
        "Provided directions, answered questions, and resolved guest issues, achieving a high problem resolution rate.",
        "Escorted guests through on-stage and backstage locations, adhering to event agendas, improving event punctuality.",
        "Partnered with multiple departments to ensure high-quality service and presentation, enhancing event execution efficiency."
      ]
    },
    7: {
      achievements: [
        "Interacted with guests to provide them with accurate information about merchandise and other questions about Walt Disney World.",
        "Sold merchandise at locations throughout Walt Disney World property.",
        "Made recommendations to guests about merchandise and other topics (e.g., dinner reservations, attractions).",
        "Stocked merchandise.",
        "Rearranged fixtures to appropriately fit with new merchandise that comes in.",
        "Performed light cleaning."
      ]
    },

    // Add data for other jobs here
  };

  const eduData = {
    1: {
        diplomaImage: '../media/wgudiploma.png'
    }
    // Add more education items if needed
};

eduItems.forEach(item => {
    item.addEventListener('click', function () {
        const eduId = this.getAttribute('data-edu-id');
        const eduInfo = eduData[eduId];

        modalEduTitle.textContent = this.querySelector('h3').textContent;
        modalInstitution.textContent = this.querySelector('.institution').textContent;
        modalEduDate.textContent = this.querySelector('.date').textContent;
        modalDiploma.src = eduInfo.diplomaImage;

        eduModal.style.display = 'block';

        // Google Analytics event
        gtag('event', 'Open Education Modal', {
            'event_category': 'Resume Interaction',
            'event_label': modalEduTitle.textContent
        });
    });
});

eduCloseBtn.onclick = function () {
    eduModal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == eduModal) {
        eduModal.style.display = 'none';
    }
};

  jobCards.forEach(card => {
    card.addEventListener('click', function () {
      const jobId = this.getAttribute('data-job-id');
      const jobInfo = jobData[jobId];

      modalTitle.textContent = this.querySelector('h3').textContent;
      modalCompany.textContent = this.querySelector('.company').textContent;
      modalDate.textContent = this.querySelector('.date').textContent;

      modalAchievements.innerHTML = '<ul>' +
        jobInfo.achievements.map(achievement => `<li>${achievement}</li>`).join('') +
        '</ul>';

      modal.style.display = 'block';

      // Google Analytics event
      gtag('event', 'Open Job Modal', {
        'event_category': 'Resume Interaction',
        'event_label': modalTitle.textContent
      });
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});

