$(document).ready(function(){
    $('.problemsSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        variableWidth: true,
        autoplay: true,
        infinite: true,
        centerMode: true,
        dots: true,
        prevArrow: "<img src='media/icons/arrow-left.png' class='slick-arrows slick-prev' alt='1'>",
        nextArrow: "<img src='media/icons/arrow-right.png' class='slick-arrow slick-next' alt='2'>",
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              arrows: false
            }
          }
        ]
    });
  });