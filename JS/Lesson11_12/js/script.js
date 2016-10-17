// Part 1 - Слайдер

$(function() {
  $('.carousel-hider').slider();
});

//Part2 - Шаблонизатор

$(function () {

var html = $('#page').html();

var myProfile = [
  {
    title: 'Логунов Владимир Сергеевич',
    content: 'Студент ХНУРЭ и GO_IT'
  },
  {
    title: 'Хочу учить фронтенд, потому что:',
    reason1: 'Это красиво',
    reason2: 'Это интересно',
    reason3: 'Потому что я смогу'
  },
  {
    title: 'Мой контактный телефон',
    content: '+380505477704'
  },
  {
    title: 'Мой профайл в Facebook',
    link: 'https://www.facebook.com/barsxp3000'
  }
];

var content = tmpl(html, {
  data: myProfile
});

$('.profile').append(content);
});
