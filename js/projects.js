"use strict";

//--- FOR PROJECTS.HTML ---//

let shownProject;

window.onload = function() {
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
const projectGrid = document.querySelector(".grid--project");

function fillTemplate(project) {
  const copy = template.cloneNode(true);
  let article = copy.querySelector("article");
  article.id = project.id;

  copy.querySelector("#projectname").textContent = project.projectheader;
  copy.querySelector("#subheader").textContent = project.subheader;
  copy.querySelector("#projectintro").textContent = project.introduction;
  copy.querySelector("#projectlink").href = project.projectlink;
  copy.querySelector("#skillslist").innerHTML = project.skills;

  copy.querySelector(".project--image > img").src = `${project.mainimage}`;

  copy.querySelector(".project-description").innerHTML =
    project.longdescription;

  projectGrid.appendChild(copy);
}
