$(document).ready(function(){
     var tabs = $("#tabs");
     $(".tabs-content > div",tabs).each(function(i){
       if (i!=0) $(this).hide(0);
 });
 tabs.on('click','.tabs a', function(e){
      e.preventDefault();
      var tabID = $(this).attr('href');
      $('.tabs a', tabs).removeClass();
      $(this).addClass('active');
      $('.tabs-content >div',tabs).hide(0);
      $(tabID).show();
});
});
