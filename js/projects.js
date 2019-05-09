"use strict";

//--- FOR PROJECTS.HTML ---//

let shownProject;

window.onload = function() {
  navInit();
  //get user chosen project from local
  shownProject = JSON.parse(window.localStorage.getItem("project"));
  console.log(shownProject.projectname);

  //get all projectdata from JSON
  fetch("js/projectdata.json")
    .then(res => res.json())
    .then(projectdata => {
      findProject(projectdata, shownProject.projectname);
    });
};

//find chosen project in JSON

function findProject(projectArray, projectName) {
  let chosenProject = projectArray.find(obj => obj.id === projectName);

  fillTemplate(chosenProject);
}

//populate template with chosen project info + append

const template = document.querySelector("#projectTemplate").content;
const main = document.querySelector(".main--project");

function fillTemplate(project) {
  const copy = template.cloneNode(true);
  let article = copy.querySelector("article");
  article.id = project.id;

  copy.querySelector("#projectname").textContent = project.projectheader;
  copy.querySelector("#subheader").textContent = project.subheader;
  copy.querySelector("#projectintro").textContent = project.introduction;

  if (project.id == "playground") {
    copy.querySelector("#projectlink").style.display = "none";
  } else if (project.id == "bastard") {
    copy.querySelector("#projectlink").style.display = "block";
    copy.querySelector("#projectlink").href = project.projectlink;
    copy.querySelector("#projectlink").classList.add("bastardopenlink");
    // bastardWindow(copy);
  } else {
    copy.querySelector("#projectlink").style.display = "block";
    copy.querySelector("#projectlink").href = project.projectlink;
  }

  copy.querySelector("#skillslist").innerHTML = project.skills;
  copy.querySelector(".project--image").innerHTML = project.mainimage;

  copy.querySelector(".project--description").innerHTML =
    project.longdescription;

  main.appendChild(copy);
}

// function bastardWindow(copy) {
//   // if projectlink in bastard clicked
//   const bastardLink = copy.querySelector(".bastardopenlink");
//   bastardLink.addEventListener("click", resizeWindow);

//   function resizeWindow() {
//     event.preventDefault();
//     window.open(
//       this.href,
//       "targetWindow",
//       "toolbar=no, location=no, status=no, menubar=no,scrollbars=yes,resizable=yes,width=360,height=740"
//     );
//     return false;
//     // window.open(
//     //   "http://www.javascript-coder.com",
//     //   "mywindow",
//     //   "menubar=1,resizable=1,width=360,height=640"
//     // );
//   }
// }

// NAVIGATION //
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
