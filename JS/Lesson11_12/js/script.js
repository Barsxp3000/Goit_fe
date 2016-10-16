
//script for template

$(function(){


var data = {
  name : "Лыгута Ксения Владимировна",
  photo : {
    src : "img/photo.jpg",
    alt : "photo"
  },
  job : "Аналитик департамента закупок",
  why : "Хочу учить фронтенд, потому что:",
  reasons: ['Хочу заниматься любимым делом',
            'Фронтенд - очень крутая штука',
            'Люблю развиваться и учиться'
         ],
  phone: "Мой контактный телефон:",
  number: "+380962340485",
  vk: "Мой профиль в контакте",
  vk_link: '<a href="https://vk.com/ksu_dp">vk.com</a>'
};

//JavaScript Micro-Templating by John Resig
var html = $("#profile").html();
var content = tmpl(html,data);

 $('.template').append("<h3 style='color:#63103C; font-weight:bold; font-size:25px'>JavaScript Micro-Templating</h3>");
 $('.template').append(content);

//LoDash
var html = $("#profile").html();
var content = _.template(html)(data);
$(".template").append("<h3 style='color:#63103C; font-weight:bold; font-size:25px'>LoDash</h3>");
$(".template").append(content);
});
