//    ====================SCROLL EFFECT SCRIPT======================= -->
ScrollReveal({
  reset:true,
  distance:'70px',
  duration: 1000,
  delay:200
});

// ==========================NAVBAR SCROLL EFFECT========================
// ScrollReveal().reveal('.navbar img ',{delay :400 , origin : 'top' , interval:300});
// ScrollReveal().reveal('.nav__list li ',{delay :200 , origin : 'top' , interval:200});

//  ==================HOME SECTION SCROLL EFFECT ========================
ScrollReveal().reveal('.home__title',{delay :200 , origin : 'left'});
ScrollReveal().reveal('.home__subtitle',{delay :200 , origin : 'right'});
ScrollReveal().reveal('.home__elec',{delay :200 , origin : 'bottom'});
ScrollReveal().reveal('.home__img',{delay :200 , origin : 'left'});
ScrollReveal().reveal('.home__car-icon i',{delay :200 , origin : 'bottom' , interval :400});
ScrollReveal().reveal('.home__car-data .home__car-number ',{delay :200 , origin : 'bottom', interval:300});
ScrollReveal().reveal('.home__car-data .home__car-name ',{delay :200 , origin : 'bottom', interval:300});


      // ================================ABOUT SECTION ===========================
      // ==============MAIN TITLE =============================================
      ScrollReveal().reveal('.title', { delay: 300, origin: 'left' });

      // ========================SECTION 01 ===================================
      ScrollReveal().reveal('.vendor-row img', { delay: 300, origin: 'bottom' , interval:200});
      // ScrollReveal().reveal('.vendor-row h2', { delay: 300, origin: 'bottom' , interval:300});
     

// ============================SLIDER SECTION =============================
// ================REFRENCE TO BUTTONS=================================
var btnLeft = document.getElementById('prev-btn');
var btnRight = document.getElementById('next-btn');

// ======================REFERENCE TO SLIDER============================
var slider = document.querySelector('.contain .slider');

btnRight.addEventListener('click' , nextSlide);
function nextSlide(){
slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click' , prevSlide);
function prevSlide(){
slider.prepend(slider.lastElementChild);
}
// =================AUTO SLIDING =================================
function autoSlide(){
deleteInterval = setInterval(timer , 2000);   // 2000 mili seconds ===> 2sec
function timer(){
  nextSlide();
}
}
autoSlide();

// ==================STOP AUTO SLIDING WHEN MOUSE IS OVER=============
slider.addEventListener('mouseover',deleteAutoSliding);
btnRight.addEventListener('mouseover',deleteAutoSliding);
btnLeft.addEventListener('mouseover',deleteAutoSliding);

function deleteAutoSliding(){
clearInterval(deleteInterval);
}

// ==============RESUME AUTO SLIDING WHEN MOUSE IS OUT===================
slider.addEventListener('mouseout',resumeAutoSliding);
btnRight.addEventListener('mouseout',resumeAutoSliding);
btnLeft.addEventListener('mouseout',resumeAutoSliding);
function resumeAutoSliding(){
autoSlide();
}
