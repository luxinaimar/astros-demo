$(function(){
  var pData = [
      {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("15_big_1.gif")','$res("15_big_2.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("1_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("2_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("3_big_1.jpg")','$res("3_big_2.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("4_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("5_big_1.jpg")','$res("5_big_2.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("6_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("7_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("8_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("9_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("10_big.gif")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("11_big.gif")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("12_big.gif")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("13_big.jpg")']
     },
     {
        title:'House Buliding',
        date:'2016/06/15',
        software:[1,2],
        content:['$res("14_big_1.gif")','$res("14_big_2.jpg")']
     }
  ]
  var domPList = $('.p-list'),
      domMask = $('.mask'),
      domClose = $('.i-close'),
      domPopLayer = $('.pop-layer'),
      domPItemHover = $('li',domPList),
      domPop = $('.pw-bd');
    
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
    var item = $(this),
        i = item.index(),
        scrollTop = $(window).scrollTop(); //滚动条位置，滚出可视区的位置
        //viewportHeight = $(window).height(), //可视区的高
       // top = (scrollTop+viewportHeight)/2;
    var contentHtml='';
        pData[i].content.forEach(function(it){
            contentHtml+=['<div class="content">',
                          '<img src=',
                            it,
                          '/>',
                          '</div>'].join('');
        });
    var popHtml = ['<div class="des">',
                      '<h1 class="title">',
                        pData[i].title,
                      '</h1>',
                      '<p>',
                        pData[i].date,
                      '</p>',
                      '<p>Software:<em>Cinema4D</em><em>Photoshop</em></p>',
                    '</div>',          
                    contentHtml].join('');
    domPop.html(popHtml);
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

