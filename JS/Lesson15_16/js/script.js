function search() {
  $("#results").empty();

var txt = $("#requre").val();
$.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q="+txt+"&image_type=photo",
  function(data) {
    $.each(data.hits, function(i,item){
      $("<img class='res'/>").attr("src", item.previewURL).appendTo("#results");
    });
  });
};

$(function () {
  $("#requre").keypress(function(e) {
    if(e.keyCode == 13); {
    search();

    }
  });
  $("#search").click(function(e) {
    search();
  });
});
