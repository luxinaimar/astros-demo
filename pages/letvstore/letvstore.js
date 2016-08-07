$(function(){
    var domViewBig = $('.view-big'),
        domSurIndex = $('.superapp-index'),
        domSupBigImg = $('.superapp-big-img');
        domViewBigBack = $('.view-big-back');

    domViewBig.click(function(){
      domSurIndex.fadeOut(600);
      domSupBigImg.fadeIn(1200); 
      domViewBigBack.fadeIn(1200);
    });

    domViewBigBack.click(function(){
      domSupBigImg.fadeOut(600); 
      domViewBigBack.fadeOut(600);
      domSurIndex.fadeIn(1200);
    });


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

  var domFestivalSliderIndex = $('.festival-slider-index a'),
      domFestivalImgUl = $('.festival-img ul'),
      domFestivalImgLi = $('.festival-img li'),
      ulMarginLeft = domFestivalImgUl.css('margin-left').replace('px',''),
      liW = 530;

  domFestivalSliderIndex.click(function(){
    var item = $(this),
        i = item.parent().index();
        domFestivalImgUl.animate({marginLeft:ulMarginLeft-liW*i},500);
        domFestivalImgLi.eq(i).animate({opacity:1},500).siblings().animate({opacity:0.3},500);
        item.parent().addClass('active').siblings().removeClass('active');
        domFestivalImgLi.eq(i).addClass('on').siblings().removeClass('on');    
  });
})