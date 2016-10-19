// Part 1 - Слайдер

$(function() {
    $('.carousel-hider').slider();
});

//Part2 - Шаблонизатор

$(function() {

    var html = $('#myProfile').html();

    var myProfile = {
        myName: 'Логунов Владимир Сергеевич',
        myPhoto: 'img/img-1.png',
        myEducation: 'Студент ХНУРЭ и GO_IT',
        capterFe: 'Хочу учить фронтенд, потому что:',
        frontend: ['Это красиво','Это интересно', 'Потому что я смогу'],
        capterPh: 'Мой контактныйтелефон',
        phone: '+380505477704',
        capterSk: 'Мой Скайп',
        skype: 'barsxp3000',
        capterFb: 'Мой профиль в фейсбуке',
        facebook: 'http://www.facebook.com/barsxp3000',
        name: 'Vladimir Logunov',
        capterFeed: 'Мой фидбек:',
        myFeedback: 'Ябадабадууу'

    };

    var content = tmpl(html, {
        data: myProfile
    });

    $('#page').append(content);
});
