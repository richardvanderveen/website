//* Java script voor het scrollen tussen wallpapers *//

$(document).ready(function(){ //start wanneer DOM klaar is om javascript te runnen

  $("a").on('click', function(event)
  { //
    if (this.hash !== "")
    {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
        scrollTop: $(hash).offset().top
        }, 2000, function()
      {
        window.location.hash = hash;
      });
    }
  });
});
