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
      console.log(rsp)
      $('#blue_block').append(rsp);
    });
  });

  $("#blue_block").on('submit', '#twilio-text-form', function(event){
    event.preventDefault();
    var phone = $("input[name='destination']:checked").val();
    var data = {number:phone};
    $.post('/text', data, function(sentresponse) {
      console.log(sentresponse);
      $('.phone_form').html(sentresponse);

    });
  });

});
