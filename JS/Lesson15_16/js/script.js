//  ajax request

$(function() {
  $('button').on('click', getAjax);

  function getAjax(e) {
    e.preventDefault();

     $('img').remove();
     var $picture = $('.text').val();

    $.ajax({

      url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + $picture +"&tagmode=any&format=json&jsoncallback=?" +'&per_page=30',
      method:'GET',
      dataType: 'jsonp',
      success:function(data){
        // $(".result").hide().html(data).fadeIn('fast');

        // var $result = data.hits;
        $.each(data.items, function(i,item) {
        $("<img/>").attr("src", item.media.m).appendTo(".result");
   });
      },
      error:function(){
        alert('There is ERROR!');
      }
    });
  }
});

// prototype

function Human() {
  this.name = "Ksusha";
  this.age = 32;
  this.gender = "female";
  this.height = 180;
  this.weight = 62;
}
var newHuman = new Human();

function Worker() {
  this.placeOfWork = "SoftServe";
  this.salary = 1000;
  this.work = function() {
    alert("I want to work");
  }
}

function Student() {
  this.placeOfStudy = "GoIT";
  this.scholarship = 500;
  this.watchSerials = function() {
    alert("I like to watch serials");
  }
}

Worker.prototype = newHuman;
Student.prototype = newHuman;

var man1 = new Worker();
var man2 = new Worker();
var man3 = new Student();
var man4 = new Student();

console.log(man1);
// console.log(man2);
// console.log(man3);
// console.log(man4);
