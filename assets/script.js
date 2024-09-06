// NAV BAR 

// document.querySelector('.services').style.display='none'
// document.querySelector('.about').style.display='none'
// document.querySelector('.contact').style.display='none'

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    // Burger animation
    burger.classList.toggle('toggle');
});




//  === SERVICES PAGE === 

document.getElementById("nav-services").addEventListener("click", function() {
    // Redirect to section 2
    document.querySelector(".services").scrollIntoView({ behavior: "smooth" });
});


//   === ABOUT PAGE ===

document.getElementById("nav-about").addEventListener("click", function() {
    // Redirect to section 2
    document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});

//  === CONTACT PAGE === 

document.getElementById("nav-contact").addEventListener("click", function() {
    // Redirect to contact section
    document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
});


//  === WORK PAGE === 

document.getElementById("nav-work").addEventListener("click",function(){
    // Redirect to work section 
    document.querySelector(".work").scrollIntoView({behavior:"smooth"});
});