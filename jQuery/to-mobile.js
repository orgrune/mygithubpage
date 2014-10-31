
    $(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.height() <= 999) { 
            $("#mobile").show();
            $("#navigationBar").hide();
      }
      if (win.width() >= 1000) { 
            $("#mobile").hide();
            $("#navigationBar").show();
      }
});