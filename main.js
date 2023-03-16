const projects = [
  {
    src: "./img/game-of-life.png",
    alt: "A screenshot of the game of life",
    title: "Game of Life",
    href: "https://github.com/stevensonmat2/game_of_life",
  },
  {
    src: "./img/mobile-phone-inbox.jpg",
    alt: "A hand holding a mobile phone showing an email inbox",
    title: "Mass-mailer Script",
    href: "https://github.com/stevensonmat2/mass_mailer",
  },
  {
    src: "./img/chess.jpg",
    alt: "A child with glasses moving chess pieces on a chess board",
    title: "Chess-playing AI",
    href: "https://github.com/stevensonmat2/ai_group_project",
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
  projectImage.src = projects[currentProject].src;
  projectImage.alt = projects[currentProject].alt;
  projectImage.title = projects[currentProject].title;
  projectLink.href = projects[currentProject].href;
  projectTitle.innerText = projects[currentProject].title;
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

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  if (scroll >= screenHeight) {
    $(".nav-list").addClass("nav-colored");
  } else {
    $(".nav-list").removeClass("nav-colored");
  }
});
