$(document).ready(function () {

  //MD
  $('#detailsSchoolMD').hide();
  $('#detailsSchoolXS').hide();
  var d1 = 0;
  $('#plusSignMD').on("click",function(){
    $("#detailsSchoolMD").slideToggle(function(){
    $(window).trigger('resize.px.parallax');
    });
    $({deg: d1}).animate({deg: d1+45}, {
    duration: 300,
    step: function(now) {
        $("#plusSignMD").css({
            transform: 'rotate(' + now + 'deg)'
        });
    }
    });
     d1 = (d1+45)%360;
  });

  //XS
  var d2 = 0;
  $('#plusSignXS').on("click",function(){
    $("#detailsSchoolXS").slideToggle(function(){
    $(window).trigger('resize.px.parallax');
    });
    $({deg: d2}).animate({deg: d2+45}, {
    duration: 300,
    step: function(now) {
        $("#plusSignXS").css({
            transform: 'rotate(' + now + 'deg)'
        });
    }
    });
     d2 = (d2+45)%360;
  });

  });
