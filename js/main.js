$(document).ready(carouselWidth);
$(window).on('resize',carouselWidth);

function carouselWidth() {
  var x = $(".row-grid").width();
  // var y = $(".grid-img").width();

  $(".carousel_cont").outerWidth(x);
  // $(".effect-bubba").width(y);
};
