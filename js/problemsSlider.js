$(document).ready(function(){
    $('.problemsSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        centerMode: true,
        autoplay: true,
        prevArrow: "<img src='media/icons/arrow-left.png' class='slick-arrows slick-prev' alt='1'>",
        nextArrow: "<img src='media/icons/arrow-right.png' class='slick-arrow slick-next' alt='2'>"
    });
  });