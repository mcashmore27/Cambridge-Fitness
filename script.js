"use strict";

// SECTION Selectors
const menuBtn = document.querySelector(".menu-btn");
const heroContainer = document.querySelector(".hero--container");
const heroTextArr = document.querySelectorAll(".hero--text");
const viewInfo = document.querySelectorAll(".view--btn");
const potInfoContainerNodeList = document.querySelectorAll(".pot--info");
const slider = document.querySelector(".slider");
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
