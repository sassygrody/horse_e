$(document).ready(function() {

  // some type of if statement depending on which page we are on
   $("#form_generate").on('click', function(event){
    event.preventDefault();
    $.post('/horse', function(response){
      $("#twitter_copy").html(response);
      $('.sent').remove();
      });
    });

    $(document).on('click', '#friends', function(event){
      event.preventDefault();
      $.post('/friends', function(rsp){
        $('#blue_block').append(rsp);
      });
    });

  $("#blue_block").on('submit', '#twilio-text-form', function(event){
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
