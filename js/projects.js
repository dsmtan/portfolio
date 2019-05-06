"use strict";

let shownProject;

window.onload = function() {
  //get chosen project from local
  shownProject = JSON.parse(window.localStorage.getItem("project"));
  console.log(shownProject.projectname);

  //get JSON data to create template
  fetch("js/projectdata.json")
    .then(res => res.json())
    .then(projectdata => {
      findProject(projectdata, shownProject.projectname);
    });
};

//-- function create template for each project in JSON

function findProject(projectArray, projectName) {
  let chosenProject = projectArray.find(obj => obj.id === projectName);

  fillTemplate(chosenProject);
}

const template = document.querySelector("#projectTemplate").content;
const projectGrid = document.querySelector(".grid--project");

function fillTemplate(project) {
  console.log(project.id);
  const copy = template.cloneNode(true);
  let article = copy.querySelector("article");
  article.id = project.id;

  copy.querySelector("#projectname").textContent = project.projectheader;
  copy.querySelector("#subheader").textContent = project.subheader;
  copy.querySelector("#projectintro").textContent = project.introduction;
  copy.querySelector("#projectlink").href = project.projectlink;

  projectGrid.appendChild(copy);
}

//-- append + show chosen project
