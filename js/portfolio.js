"use strict";

const menuBtn = document.querySelector("#burgermenu");

menuBtn.addEventListener("click", openNav);

function openNav() {
  document.getElementById("mobilenav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mobilenav").style.height = "0%";
}

// in mobile: pf and about content appear on dropdown click or header click
