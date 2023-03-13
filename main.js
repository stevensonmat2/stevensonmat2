$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".navbar").addClass("nav-colored");
  } else {
    $(".navbar").removeClass("nav-colored");
  }
});
