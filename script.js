function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Get all modals
var modals = document.querySelectorAll('.modal');

// Get all buttons that open a modal
var btns = document.querySelectorAll('.details-btn');

// Get all <span> elements that close the modal
var spans = document.querySelectorAll('.close');

// When the user clicks on a button, open the corresponding modal
btns.forEach(btn => {
  btn.onclick = function() {
    var modal = document.getElementById(btn.getAttribute('data-modal'));
    modal.style.display = 'block';
  }
});

// When the user clicks on <span> (x), close the modal
spans.forEach(span => {
  span.onclick = function() {
    span.parentElement.parentElement.style.display = 'none';
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}
