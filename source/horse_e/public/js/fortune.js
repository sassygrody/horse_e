$(document).ready(function() {

  // some type of if statement depending on which page we are on
   $("#fortune_form_generate").on('click', function(event){
    event.preventDefault();
    $.post('/fortune', function(response){
      $("#fortune_twitter_copy").html(response);
      // $("#fortune_twitter_copy").fadeIn(200);
      $('.sent').remove();
      });
    });

  $("#green_block").on('submit', '#twilio-text-form', function(event){
    event.preventDefault();
    var phone = $("input[name='destination']:checked").val();
    var data = {number:phone};
    $.post('/text', data, function(sentresponse) {
      console.log(sentresponse);
      $('.phone_form').html(sentresponse);

    });
  });

});
