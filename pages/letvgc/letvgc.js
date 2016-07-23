$(function(){
   var player,
      domSlider = $(".slider"),
      domSliderLi = $("li",domSlider),
      domSliderIndex = $(".slider-index"),
      domSliderIndexSpan = $("span",domSliderIndex);

    domSliderIndexSpan.click(function(){
        var item = $(this),
            i = item.index(),
            currShow = domSliderLi.filter(".slider-on"), 
            act = domSliderLi.eq(i);
        domSliderIndexSpan.removeClass("active");
        item.addClass("active");     
        currShow.removeClass('slider-on').fadeOut(600);
        act.addClass('slider-on').fadeIn(1200);      
      });

    domSlider.hover(
      function(){
        clearInterval(player);
      },
      function(){
        sliderPlay();
      }

    );

    domSliderLi.mouseenter(function() {
       var that = $(this);
       var thisPX = that.offset().left;
       var thisPY = that.offset().top;
       var boxWidth = that.outerWidth();
       var boxHeight = that.outerHeight();
       that.addClass("animating");
       $('.animating').mousemove(function(event) {
         var mouseX = event.pageX - thisPX;
         var mouseY = event.pageY - thisPY;
         var X;
         var Y;
         if (mouseX > boxWidth / 2) {
           X = mouseX - boxWidth/2;
         } else {
           X = mouseX - boxWidth/2;
         }
         if (mouseY > boxHeight / 2) {
           Y = boxHeight/2 - mouseY;
         } else {
           Y = boxHeight/2 - mouseY;
         }
         that.css({
           "-webkit-transform": "rotateY(" + X / 300 + "deg) " + "rotateX(" + Y / 300 + "deg)",
           "-moz-transform": "rotateY(" + X / 300 + "deg) " + "rotateX(" + Y / 300 + "deg)"
         });
       });
     });

      domSliderLi.mouseleave(function() {
         var that = $(this);
         that.removeClass("animating");
         that.css({
            "-webkit-transform": "rotateY(0deg) rotateX(0deg)",
            "-moz-transform": "rotateY(0deg) rotateX(0deg)"
          });
        });

  function sliderPlay(){
      if(player){
          clearInterval(player);
      }
      player = setInterval(function(){
          var act = domSliderIndexSpan.filter('.active');
          if(act.next().size()){
              act.next().click();
          }else{
              $('span:first',domSliderIndex).click();
          }
      },3000)
  }
  sliderPlay();
})