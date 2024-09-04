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


// === HOME PAGE ===
// document.getElementById("nav-home").addEventListener('click',function(){
//     document.querySelector('.home').style.display='block';
//     document.querySelector('.services').style.display='none';
//     document.querySelector('.about').style.display='none';
//     document.querySelector('.contact').style.display='none';

//  })

 document.querySelector('.btn-contact').addEventListener('click',function(){
    document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
 })
//  === SERVICES PAGE === 

// document.getElementById("nav-services").addEventListener('click',function(){
//     document.querySelector('.home').style.display='none';
//     document.querySelector('.services').style.display='block';
//     document.querySelector('.about').style.display='none';
//     document.querySelector('.contact').style.display='none';
//  })


//   === ABOUT PAGE ===

// document.getElementById("nav-about").addEventListener('click',function(){
//     document.querySelector('.home').style.display='none';
//     document.querySelector('.services').style.display='none';
//     document.querySelector('.about').style.display='block';
//     document.querySelector('.contact').style.display='none';
//  })

//  === CONTACT PAGE === 
// document.getElementById("nav-contact").addEventListener('click',function(){
//     document.querySelector('.home').style.display='none';
//     document.querySelector('.services').style.display='none';
//     document.querySelector('.about').style.display='none';
//     document.querySelector('.contact').style.display='block';
//  })

