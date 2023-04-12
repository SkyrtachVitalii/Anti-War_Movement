$( ".header__burger" ).click(function() {
    $(".navigation").css( "display", "flex" );
    $(".nav-back").css( "display", "block" );
    $("body").addClass("lock");
  });

  $( ".mobile__burger" ).click(function() {
    $(".navigation").css( "display", "none" );
    $(".nav-back").css( "display", "none" );
    $("body").removeClass("lock");
  });