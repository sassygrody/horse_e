$(document).ready(function() {
   $("#form_generate").on('click', function(event){
    event.preventDefault();

      $.post('/', function(response){
        console.log(response);
        $("#appending").html(response);
      });

   });
});
