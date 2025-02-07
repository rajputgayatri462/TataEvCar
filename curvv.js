/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')
//  =========MENU SHOW ============
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
})
}
// ===========MENU HIDDDEN==========
// validate if constant exists\
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
    
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link , we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
// we loop through each nav__link and calls the linkAction function to remove the show-menu class
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height , add scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}


/*=============== POPULAR SWIPER ===============*/


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/