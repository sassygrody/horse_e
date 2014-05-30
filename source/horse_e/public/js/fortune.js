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

   $(document).on('click', '#friends', function(event){
    event.preventDefault();
    $.post('/friends', function(rsp){
      $('#green_block').append(rsp);
    });
  });

  $("#green_block").on('submit', '#twilio-text-form', function(event){
    event.preventDefault();
    var numbers = $("input[name='checkbox[]']:checked").map(function(){
      return this.value;
    }).get()


    var counter = 0;
    $('#twilio-text-form').remove();

    while ( counter < numbers.length ) {
      $.post('/text', {number: numbers[counter]}, function(sentresponse) {
        $('.phone_form').html(sentresponse);
      });
    counter ++;
    }

  });

});
