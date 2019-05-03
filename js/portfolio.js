"use strict";

window.onload = function() {
  navInit();
  setDefaultExpl();
};

const indexSection = document.querySelector(".section--index");
const pfSection = document.querySelector(".section--portfolio");
const aboutSection = document.querySelector(".section--about");

// --- MOBILE NAVIGATION --- //
const menuBtn = document.querySelector(".burgermenu");
const closeBtn = document.querySelector(".closebtn");
const mobileNav = document.querySelector(".nav--mobile");

function navInit() {
  menuBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
  document.addEventListener(
    "click",
    function(event) {
      if (event.target.classList.contains("navlink")) {
        navlinkClicked(event);
      } else if (event.target.classList.contains("uparrow")) {
        gotoTop();
      }
    },
    false
  );
}

function navlinkClicked(event) {
  event.preventDefault();
  if (event.target.id === "homelink" || event.target.id === "homeside") {
    indexSection.scrollIntoView();
  } else if (event.target.id === "pflink" || event.target.id === "pfside") {
    pfSection.scrollIntoView();
  } else if (
    event.target.id === "aboutlink" ||
    event.target.id === "aboutside"
  ) {
    aboutSection.scrollIntoView();
  }
  closeNav();
}

function openNav() {
  mobileNav.style.height = "100%";
  mobileNav.style.WebkitTransition = "0.4s";
}

function closeNav() {
  mobileNav.style.height = "0%";
  mobileNav.style.WebkitTransition = "0.2s";
}

function gotoTop() {
  indexSection.scrollIntoView();
}

// SIDE NAV -- when bottom of page is reached hide navarrow
const downArrow = document.querySelector(".navarrow");

window.onscroll = function(ev) {
  console.log(window.scrollY);
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    downArrow.classList.add("hide");
  } else {
    downArrow.classList.remove("hide");
  }
};

// --- PORTFOLIO SECTION --- //

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

//explanation section with icons
const usersIcon = document.querySelector("#usersicon");
const businessIcon = document.querySelector("#businessicon");
const codeIcon = document.querySelector("#codeicon");
const explainHeader = document.querySelector(".header-explanation");
const explainText = document.querySelector(".p--explanation");
let counter;

//default value = users
function setDefaultExpl() {
  counter = explanations[0].id;
  explainHeader.textContent = explanations[0].header;
  explainText.innerHTML = explanations[0].text;
  loadNext(counter);
}

usersIcon.addEventListener("click", showExplanation);
businessIcon.addEventListener("click", showExplanation);
codeIcon.addEventListener("click", showExplanation);

// function showExplanation with the right JSON object

function showExplanation(newCounter) {
  let selected;
  if (this === usersIcon || newCounter === 3) {
    selected = explanations[0];
    usersIcon.classList.add("icon--selected");
    businessIcon.classList.remove("icon--selected");
    codeIcon.classList.remove("icon--selected");
  } else if (this === businessIcon || newCounter === 1) {
    selected = explanations[1];
    businessIcon.classList.add("icon--selected");
    usersIcon.classList.remove("icon--selected");
    codeIcon.classList.remove("icon--selected");
  } else if (this === codeIcon || newCounter === 2) {
    selected = explanations[2];
    codeIcon.classList.add("icon--selected");
    usersIcon.classList.remove("icon--selected");
    businessIcon.classList.remove("icon--selected");
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
