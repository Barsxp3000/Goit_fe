$(document).ready(function(){
  $(".niceCheck").each(function(){
    changeCheckStart($(this));
  });
});
function changeCheck(el){
  var el = el,
  input = el.find('input').eq(0);
  if (el.attr('class').indexOf('niceCheckDisabled')==1)
  {
  if (!input.attr('checked')){
    el.addClass('niceChecked');
    input.attr('checked',true);
  } else{
    el.removeClass('niceChecked');
    input.attr("checked",false).focus();
  }
}
return true;
}

 function changeVisualCheck(input){
   var wrapInput = input.parent();
   if(!input.attr('checked')){
     wrapInput.removeClass('niceChecked');
   } else {
     wrapInput.addClass('niceChecked');
   }
 }

  function changeCheckStart(el){
    try{
      var el = el,
      checkName=el.attr('name'),
      checkId = el.attr('id'),
      checkChecked=el.attr('checked'),
      checkDisabled=el.attr('disabled'),
      checkValue=el.attr("value");
      if (checkChecked)
      el.after("<span class='niceCheck niceChecked'"+
      <"<input type='checkbox'" +
        "name' " + checkName +" '"+
        "checked='" + checkChecked + "'"+
         "value= '" +checkvalue +" '"+
       "id='" +checkId+"'" +
        "tabindex='" +checkTab +"'/></span>");
    } else
    el.after("<span class='niceCheck niceChecked'"+
    <"<input type='checkbox'" +
      "name' " + checkName +" '"+
       "value= '" +checkvalue +" '"+
     "id='" +checkId+"'" +
      "tabindex='" +checkTab +"'/></span>");
  }


function startChangeCheck(el){
  var el=el,
  input = el.getElementById('input')[0];
  if(input.checked){
    el.style.backgroundPosition="0 -17px";
  }
  return true;
}
function startCheck(){
  startChangeCheck (documentGetElementById('niceCheckBox1'));
}
window.onload = startCheck;
