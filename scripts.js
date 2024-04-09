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
  