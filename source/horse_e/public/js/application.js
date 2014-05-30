$(document).ready(function() {
   $("#form_generate").on('click', function(event){
    event.preventDefault();

      $.post('/', function(response){

        $(".horse_text").html(response);

        $(document).on('submit', '#twilio-text-form', function(event){
          event.preventDefault();
          var phone = $("input[name='destination']:checked").val();
          var data = {number:phone}
          // console.log(data);

          $.post('/text', data, function(TwilioResponse) {
            console.log(TwilioResponse);
            $('#appending').append(TwilioResponse)

            });
        });

      });



   });
});
