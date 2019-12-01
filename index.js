//DOM VARIABLES
const toggleBtn = document.querySelector('button');
const main = document.querySelector('main');
const collapse = document.getElementById('navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.navbar');
const modal = document.getElementById('modal');
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('demo');


function removeNavClasses(){
  collapse.classList.remove('toggle')
  toggleBtn.classList.remove('cross')
  nav.classList.remove('toggle-nav')
}

function toggleNavClasses(){
  toggleBtn.classList.toggle('cross')
  collapse.classList.toggle('toggle')
  nav.classList.toggle('toggle-nav')
}

function openModal() {
    modal.style.display = 'block';
}
  
function closeModal() {
    modal.style.display = 'none';
}
  
let slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}



//toggle nav
toggleBtn.addEventListener('click', toggleNavClasses);

//hide nav after link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', removeNavClasses);
});

//hide nav classes after window with passes 1200
window.onresize = function() {
  if(window.innerWidth >= 1200){
    this.removeNavClasses()
  }
}
