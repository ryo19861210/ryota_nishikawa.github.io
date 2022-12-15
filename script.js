$(function(){
  $('.slider').slick({
    arrows: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0, 
    variableWidth: true, 
  });
});

$(function(){
  $('.slider2').slick({
    arrows: true,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: false,
    variableWidth: false, 
    slidesToShow: 1,
  });
});

$(function(){
const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
});
});
