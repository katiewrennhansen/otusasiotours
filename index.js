

//DOM VARIABLES
const nav = document.querySelector('nav');
const button = document.querySelector('button');
const main = document.querySelector('main');
const navbar = document.getElementById("navbar-collapse");



function navToggle(){
    button.addEventListener('click', function(){
        navbar.classList.toggle('show-nav');
      });
    main.addEventListener('click', function(){
        navbar.classList.remove('show-nav');
    });
}



navToggle();