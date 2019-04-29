"use strict";

// --- NAVIGATION --- //
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

// --- PORTFOLIO SECTION --- //
// in mobile: pf and about content appear on dropdown click or header click

const pfHeader = document.querySelector("#pftext");
const pfWrapper = document.querySelector("#pfwrapper");

pfHeader.addEventListener("click", togglePortfolio);

function togglePortfolio() {
  let newHeight = pfWrapper.style.height === "auto" ? "0%" : "auto";
  pfWrapper.style.height = newHeight;
}

// --- ABOUT SECTION ---//

//JSON object for different explanation texts
let explanations = [
  {
    id: 0,
    header: "Your Users",
    text: `Currently, I'm working in digital content marketing for an online application made for small businesses. This entails conducting user research in different industries for our marketing purposes. I've learned much about user behaviour, working with user feedback and carrying out user interviews. I'll always prioritize giving your users the best experience they can get. <span class="nextarrow"> >>> </span>`
  },
  {
    id: 1,
    header: "Your Business",
    text: `I'm not just the regular designer-developer who has never set foot in the world outside design and development and has no clue of what your business is all about. I worked for companies and organizations ranging from incredibly big to incredibly small, and I understand that problems are never as simple to solve as it may seem. I have the capability to critically think with you in a larger context, which I believe will add value to a meaningful collaboration. <span class="nextarrow"> >>> </span>`
  },
  {
    id: 2,
    header: "The importance of clean code",
    text: `I'm passionate about learning to program and grow my skills in front-end development. My work manner is very organized and accurate. Eventually, it's my goal to become a front-end developer who has a strong affinity and understanding of related areas as design and marketing. Being all-round means I can ensure clearer communication between different specialties. <span class="nextarrow"> >>> </span>`
  }
];

//eventlisteners for icons
const usersIcon = document.querySelector("#usersicon");
const businessIcon = document.querySelector("#businessicon");
const codeIcon = document.querySelector("#codeicon");
const explainHeader = document.querySelector("#explheader");
const explainText = document.querySelector("#explanation");

//default value users
let counter = explanations[0].id;
explainHeader.textContent = explanations[0].header;
explainText.innerHTML = explanations[0].text;

usersIcon.addEventListener("click", showExplanation);
businessIcon.addEventListener("click", showExplanation);
codeIcon.addEventListener("click", showExplanation);

// function showExplanation with the right JSON object

function showExplanation(newCounter) {
  let selected;
  if (this === usersIcon || newCounter === 3) {
    selected = explanations[0];
    usersIcon.classList.add("iconselected");
    businessIcon.classList.remove("iconselected");
    codeIcon.classList.remove("iconselected");
  } else if (this === businessIcon || newCounter === 1) {
    selected = explanations[1];
    businessIcon.classList.add("iconselected");
    usersIcon.classList.remove("iconselected");
    codeIcon.classList.remove("iconselected");
  } else if (this === codeIcon || newCounter === 2) {
    selected = explanations[2];
    codeIcon.classList.add("iconselected");
    usersIcon.classList.remove("iconselected");
    businessIcon.classList.remove("iconselected");
  }

  counter = selected.id;
  explainHeader.textContent = selected.header;
  explainText.innerHTML = selected.text;

  loadNext(counter);
}

// go to the next explanation when next arrow is clicked
function loadNext(newCounter) {
  const nextArrow = document.querySelector(".nextarrow");
  nextArrow.addEventListener("click", () => {
    newCounter++;
    showExplanation(newCounter);
  });
}

loadNext(counter);
