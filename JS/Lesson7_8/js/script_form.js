$(document).ready(function() {
         $('[title]').addClass('tooltip');
            $('.tooltip').each(function() {
               $(this).attr('data-tooltip');
      });
      $("button").attr('data-tooltip').insertAfter('#send-form');
   });
