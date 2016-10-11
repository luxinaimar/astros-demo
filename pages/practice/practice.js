$(function(){
  var pData = [
      {
        title:'Camera Animation',
        date:'2016/07/25',
        software:'<em class="soft-c4d"></em>',
        content:['$res("15_big_1.gif")','$res("15_big_2.jpg")']
     },
     {
        title:'Welcome Design',
        date:'2016/07/04',
        software:'<em class="soft-ps"></em><em class="soft-c4d"></em>',
        content:['$res("1_big.jpg")']
     },
     {
        title:'Building Rendering',
        date:'2016/06/30',
        software:'<em class="soft-c4d"></em><em class="soft-ps"></em>',
        content:['$res("2_big.jpg")']
     },
     {
        title:'Street Rendering',
        date:'2016/06/15',
        software:'<em class="soft-c4d"></em><em class="soft-ps"></em>',
        content:['$res("3_big_1.jpg")','$res("3_big_2.jpg")']
     },
     {
        title:'Running Page',
        date:'2016/06/10',
        software:'<em class="soft-ps"></em>',
        content:['$res("4_big.jpg")']
     },
     {
        title:'Mail Page',
        date:'2016/06/03',
        software:'<em class="soft-ps"></em>',
        content:['$res("5_big_1.jpg")','$res("5_big_2.jpg")']
     },
     {
        title:'Shopping Cart Page',
        date:'2016/05/28',
        software:'<em class="soft-ps"></em>',
        content:['$res("6_big.jpg")']
     },
     {
        title:'Icon Design',
        date:'2016/05/20',
        software:'<em class="soft-sketch"></em>',
        content:['$res("7_big.jpg")']
     },
     {
        title:'Icon Design',
        date:'2016/05/15',
        software:'<em class="soft-ps"></em>',
        content:['$res("8_big.jpg")']
     },
     {
        title:'Calculator',
        date:'2016/05/08',
        software:'<em class="soft-ps"></em>',
        content:['$res("9_big.jpg")']
     },
     {
        title:'Weather Animation',
        date:'2016/04/24',
        software:'<em class="soft-ae"></em>',
        content:['$res("10_big.gif")']
     },
     {
        title:'Baymax Animation',
        date:'2016/04/21',
        software:'<em class="soft-ae"></em><em class="soft-ps"></em>',
        content:['$res("11_big.gif")']
     },
     {
        title:'Train Animation',
        date:'2016/04/17',
        software:'<em class="soft-c4d"></em><em class="soft-ps"></em>',
        content:['$res("12_big.gif")']
     },
     {
        title:'Mountain Rendering',
        date:'2016/04/13',
        software:'<em class="soft-c4d"></em><em class="soft-ps"></em>',
        content:['$res("13_big.jpg")']
     },
     {
        title:'Rocket Animation',
        date:'2016/04/08',
        software:'<em class="soft-c4d"></em><em class="soft-ps"></em>',
        content:['$res("14_big_1.gif")','$res("14_big_2.jpg")']
     }
  ]
  var domPList = $('.p-list'),
      domMask = $('.mask'),
      domClose = $('.i-close'),
      domPopLayer = $('.pop-layer'),
      domPItemHover = $('li',domPList),
      domPop = $('.pw-bd'),
      domPre = $('.i-pre'),
      domNext = $('.i-next'),index;
    
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
    index = item.index();
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
                      '<p>Software:',pData[i].software,'</p>',
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

  domPre.click(function(e){
    e.preventDefault();
    var i = pData.length-1;
    if(index>0){
      i = index-1;
      index--;
    }else{
      index=i;
    }
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
                      '<p>Software:',pData[i].software,'</p>',
                    '</div>',          
                    contentHtml].join('');
    domPop.html(popHtml);     
    var scrollTop = $(window).scrollTop(); //滚动条位置，滚出可视区的位置 
    domPopLayer.css('top',scrollTop+100); 
  });

  domNext.click(function(e){
    e.preventDefault();
    var i = 0;
    if(index<pData.length-1){
      i = index+1;
      index++;
    }else{
      index=i;
    }
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
                      '<p>Software:',pData[i].software,'</p>',
                    '</div>',          
                    contentHtml].join('');
    domPop.html(popHtml);     
    var scrollTop = $(window).scrollTop(); //滚动条位置，滚出可视区的位置 
    domPopLayer.css('top',scrollTop+100);        
  });
  //<em class="soft-ps"></em><em class="soft-ae"></em><em class="soft-ai"></em><em class="soft-c4d"></em><em class="soft-sketch"></em>
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

