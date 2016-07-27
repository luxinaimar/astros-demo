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

    domSliderLi.hover(
      function(){
        clearInterval(player);
      },
      function(){
        sliderPlay();
      }

    );

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