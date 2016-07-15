$(function(){
  var domPList = $('.p-list'),
      domMask = $('.mask'),
      domClose = $('.i-close'),
      domPopLayer = $('.pop-layer'),
      domPItemHover = $('a',domPList);
    
  domClose.click(function(e){
    e.preventDefault();
    closePop();
   });
  
  domMask.click(function(e){
    e.preventDefault();
    closePop();
  });

  domPItemHover.click(function(e){
    e.preventDefault();
    var scrollTop = $(window).scrollTop(); //滚动条位置，滚出可视区的位置
        //viewportHeight = $(window).height(), //可视区的高
       // top = (scrollTop+viewportHeight)/2;

    domMask.show();
    domPopLayer.css('top',scrollTop+100);
    domPopLayer.show();
  });

  function closePop(){
    domMask.hide();
    domPopLayer.hide();
  }
   /*$(window).scroll(function () {
      var height = domPopLayer.height(), //元素的高
        scrollTop = $(window).scrollTop(), //滚动条位置，滚出可视区的位置
        viewportHeight = $(window).height(), //可视区的高
        top = scrollTop+(viewportHeight-height)/2;
       domPopLayer.css('top',top);    
   });
   $(window).resize(function () {
      var height = domPopLayer.height(), //元素的高
        scrollTop = $(window).scrollTop(), //滚动条位置，滚出可视区的位置
        viewportHeight = $(window).height(), //可视区的高
        top = scrollTop+(viewportHeight-height)/2;
       domPopLayer.css('top',top);    
   });*/

})

