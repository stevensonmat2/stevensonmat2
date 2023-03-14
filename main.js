$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  if (scroll >= screenHeight) {
    $(".navbar").addClass("nav-colored");
  } else {
    $(".navbar").removeClass("nav-colored");
  }
});
