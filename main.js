const projects = [
  {
    src: "./img/game-of-life.png",
    alt: "A screenshot of the game of life",
    title: "Game of Life",
    href: "https://github.com/stevensonmat2/game_of_life",
    description:
      "This is my implementation of Conway's Game of Life, a cellular automata simulation.",
  },
  {
    src: "./img/mobile-phone-inbox.png",
    alt: "A hand holding a mobile phone showing an email inbox",
    title: "Mass-mailer Script",
    href: "https://github.com/stevensonmat2/mass_mailer",
    description:
      "I developed this script to help with sending personalized emails to potential volunteers.",
  },
  {
    src: "./img/chess.png",
    alt: "A child with glasses moving chess pieces on a chess board",
    title: "Chess-playing AI",
    href: "https://github.com/stevensonmat2/ai_group_project",
    description:
      "This project implements basic AI techniques to create a chess-playing program.",
  },
];
var currentProject = 0;

document.querySelector("#right-chevron").addEventListener("click", shiftRight);
document.querySelector("#left-chevron").addEventListener("click", shiftLeft);

updateProjectsData();

function updateProjectsData() {
  var projectImage = document.getElementById("project-image");
  var projectLink = document.getElementById("project-link");
  var projectTitle = document.getElementById("project-title");
  var projectDescription = document.getElementById("project-description");
  projectImage.src = projects[currentProject].src;
  projectImage.alt = projects[currentProject].alt;
  projectImage.title = projects[currentProject].title;
  projectLink.href = projects[currentProject].href;
  projectTitle.innerText = projects[currentProject].title;
  projectDescription.innerText = projects[currentProject].description;
}

function shiftRight() {
  if (currentProject == projects.length - 1) {
    currentProject = 0;
  } else {
    currentProject += 1;
  }
  updateProjectsData();
}

function shiftLeft() {
  if (currentProject == 0) {
    currentProject = projects.length - 1;
  } else {
    currentProject -= 1;
  }
  updateProjectsData();
}
