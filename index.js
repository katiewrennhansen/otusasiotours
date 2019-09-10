

//DOM VARIABLES
const toggleBtn = document.querySelector('button');
const main = document.querySelector('main');
const collapse = document.getElementById('navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');





toggleBtn.addEventListener('click', function(){
    toggleBtn.classList.toggle('cross');
    collapse.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', function(){
        collapse.classList.remove('toggle');
        toggleBtn.classList.remove('cross');
    });
});