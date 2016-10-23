$(function() {

    var $tab = $('.tablist');

    $tab.on('click', 'li:not(tab-current)', function() {
        $(this).addClass('tab-current');
        $(this).siblings().removeClass('tab-current');
        $(this).closest('div.tabs').find('div.content').hide().eq($(this).index()).slideDown(300);
    });
});

// part 2 - Tooltips
$(function() {

    $('.tooltip').hide();

    function showTip(field) {
        $(field).siblings('.tooltip').fadeIn(200)
    }

    $('input').hover( function() {
        $('.tooltip').fadeOut();
        showTip(this);
    },
      function () {
        $('.tooltip').fadeOut();
      });

    $('button').on('click', function(e) {
        e.preventDefault();
        $('.tooltip').fadeIn(500);
    })
});
