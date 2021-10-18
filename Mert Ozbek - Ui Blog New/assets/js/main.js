///////////////////////
//// SCROLL NAV /////
/////////////////////

const navbar = document.querySelector('.nesting-navbar');
const logo = document.querySelector('.nesting-navbar');
window.onscroll = () => {
    if (window.scrollY > 250) {
        navbar.classList.add('nav-down');
    } else {
        navbar.classList.remove('nav-down');
    }
};

///////////////////////
//// OPEN NAV /////
/////////////////////


var opennav = () => {
    
    nav = document.querySelector('.social')
    burger = document.querySelector('.burger');

    burger.addEventListener('click',()=> {
        nav.classList.toggle('social-active');
    });

}

opennav();



