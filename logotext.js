$(function() {
  var logotext = $(".logotext");
    var logosubtext = $(".logosubtext");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll <= 0) {
            logosubtext.removeClass("hidden");
      logotext.removeClass("hidden");
    }

    else {
                  logosubtext.addClass("hidden");
      logotext.addClass("hidden");
    }
  });
});
