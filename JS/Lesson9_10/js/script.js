var rotate = 0;
function galleryspin(sign){
  spinner = document.querySelector("#spinner");
  if(!sign){
    rotate = rotate+45;
  } else {
    rotate=rotate-45;
  }
  spinner.setAttribute("style","-webkit-transform: rotateY("+ rotate +"deg); -moz-transform: rotateY("+ rotate +"deg); transform: rotateY("+ rotate +"deg);");
}

$(document).ready(function(){
  $('.dropdown').hover(
  function(){
    $(this).children('.sub-menu').slideDown(200);
  },
  function(){
    $(this).children('.sub-menu').slideUp(200);
  }
);
});


document.getElementById('nav').onmouseover = function(event){
  var target = event.target;//событие
  if (target.className=="menu-item"){
    var s = target.getElementsByClassName('submenu');
    closeMenu();
    s[0].style.display='block';
  }
}
document.onmousemove = function(event){
   var target = event.target;//событие клик
  if (target.className!='menu-item' && target.className!='submenu'){
    closeMenu();
  }
}
function closeMenu(){
  var menu = document.getElementById('nav');
  var subm = document.getElementsByClassName('submenu');
  for (var i=0;i<subm.length;i++){
    subm[i].style.display="none";
  }
}
