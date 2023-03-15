$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  if (scroll >= screenHeight) {
    $(".nav-list").addClass("nav-colored");
  } else {
    $(".nav-list").removeClass("nav-colored");
  }
});

const projects = [
  {
    src: "img/orange_cycle.png",
    alt: "a screenshot of the game of life",
    title: "Game of Life screenshot",
    href: "https://github.com/stevensonmat2/game_of_life",
  },
  {
    src: "img/orange_gear.png",
    alt: "gear",
    title: "test1",
    href: "",
  },
  {
    src: "img/orange_pencil.png",
    alt: "pencil",
    title: "test2",
    href: "",
  },
];

var currentProject = 0;

document
  .querySelector("#right-chevron")
  .addEventListener("click", shiftRight, false);
document
  .querySelector("#left-chevron")
  .addEventListener("click", shiftLeft, false);

function shiftRight() {
  var projectImage = document.getElementById("project-image");
  var projectLink = document.getElementById("project-link");

  if (currentProject == projects.length - 1) {
    currentProject = 0;
  } else {
    currentProject += 1;
  }

  projectImage.src = projects[currentProject].src;
  projectImage.alt = projects[currentProject].alt;
  projectImage.title = projects[currentProject];
  projectLink.href = projects[currentProject].href;
}

function shiftLeft() {
  var projectImage = document.getElementById("project-image");
  var projectLink = document.getElementById("project-link");

  if (currentProject == 0) {
    currentProject = projects.length - 1;
  } else {
    currentProject -= 1;
  }

  projectImage.src = projects[currentProject].src;
  projectImage.alt = projects[currentProject].alt;
  projectImage.title = projects[currentProject];
  projectLink.href = projects[currentProject].href;
}
