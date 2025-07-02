document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
 
  hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
  });
});




function redirectToChooseProfession() {
  window.location.href = 'profession.html';
}
