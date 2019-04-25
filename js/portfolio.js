"use strict";

const menuBtn = document.querySelector("#burgermenu");
const closeBtn = document.querySelector(".closebtn");
const mobileNav = document.querySelector("#mobilenav");

menuBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav() {
  mobileNav.style.height = "100%";
}

function closeNav() {
  mobileNav.style.height = "0%";
}

// in mobile: pf and about content appear on dropdown click or header click

const pfHeader = document.querySelector("#pftext");
const pfWrapper = document.querySelector("#pfwrapper");

pfHeader.addEventListener("click", togglePortfolio);

function togglePortfolio() {
  let newHeight = pfWrapper.style.height === "auto" ? "0%" : "auto";
  pfWrapper.style.height = newHeight;
}
