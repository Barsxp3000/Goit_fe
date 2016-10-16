(function($){

       $.fn.carousel = function(){

  var $left = $('.carousel-arrow-left');
  var $right = $('.carousel-arrow-right');
  var $elements = $('.carousel-list');

  var pixelsOffset=225;
  var currentLeftValue = 0;

  var elementsCount = $elements.find('li').length;
  var minOffset = -((elementsCount-2)*pixelsOffset);
  var maxOffset=0;


  $left.click(function(){
    if(currentLeftValue!=maxOffset){
      currentLeftValue+=225;
      $elements.animate({left:currentLeftValue+'px'},600);
    }
  });
  $right.click(function(){
    if (currentLeftValue!=minOffset){
       currentLeftValue-=225;
       $elements.animate({left:currentLeftValue+'px'},600);
    }
    });
  };
  })(jQuery);
