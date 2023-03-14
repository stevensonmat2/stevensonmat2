$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  if (scroll >= screenHeight) {
    $(".nav-list").addClass("nav-colored");
  } else {
    $(".nav-list").removeClass("nav-colored");
  }
});
