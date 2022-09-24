"use strict";

// SECTION Selectors
const menuBtn = document.querySelector(".menu-btn");
const heroContainer = document.querySelector(".hero--container");
const heroTextArr = document.querySelectorAll(".hero--text");
const viewInfo = document.querySelectorAll(".view--btn");
const potInfoContainerNodeList = document.querySelectorAll(".pot--info");

const slideNodeList = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".fa-angle-left");
const btnRight = document.querySelector(".fa-angle-right");
const navMobile = document.querySelector(".nav--mobile");
const overlay = document.querySelector(".blured--background");
const allSections = document.querySelectorAll(".section");
const sweatSection = document.querySelectorAll(".our--vision")
console.log(sweatSection.offsetHeight);

// SECTION Global variables
let menuOpen = false;

const hamburger = function () {
  // Hamburger functionality
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
};

const exitEnterMobileNav = function () {
  // Displaying the nav
  navMobile.classList.toggle("nav--hidden");
  if (navMobile.classList.contains("nav--hidden")) {
    navMobile.style.opacity = '0';
  } else {
    navMobile.style.opacity = '1';
  }
  console.log('cliked');
  hamburger();
};

const exitMobilNav = function () {
  navMobile.classList.add("nav--hidden");

  hamburger();
};



// Initialization function (what needs to be set when the page is loaded)
const init = function () {};
init();
// SECTION Event listeners

menuBtn.addEventListener("click", exitEnterMobileNav);


// SECTION slider

const slider = function () {
  // Selectors
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  // Global variables
  let currentSlide = 0; // this allows the value to change in the event listeners
  const maxSlide = slides.length; // this hold the value of how many slides there are and will help with a stopping function so that the slides do not go on for ever.

  // Function that creates the dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // This sets the position of all the slides right next to each other
  slides.forEach(
    (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)
  );

  // Scaling the slider down so that it is easy to see functionality
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // An external function that makes the active slides button visible, it is made externally so that it can be called on the arrow buttons and on the left and right keys
  const activateDot = function (slide) {
    // Select all the dots and remove the active class from all of them and then add the active class to the current slide.
    // Removing the class
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    // Adding the active class to the right slide.
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // Function to determine what slide we are on
  const goToSlide = function (slid) {
    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slid)}%)`)
    );
  };

  // Make the next slide function an external one as then it can be called with different events, such as an arrow press or a click on different buttons
  const nextSlide = function () {
    // This reads if you are at the end of the slides so that you go back to the beginning if you are.
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    // Makes the slider go to the last slide if you go for to the left.
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // This is an initialization function, it is all the functions that need to be called when the page first loads so that the proper active classes are on the right elements and other good shit like that
  const init = function () {
    goToSlide(0);
    createDots();
    // This makes the active dot visible when the page is first loaded.
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    // You can use both of the next methods, if statement or short circuiting
    // If statement
    if (e.key === 'ArrowLeft') previousSlide();
    // Short circuiting
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

