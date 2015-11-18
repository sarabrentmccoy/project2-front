$(document).ready(function(){

var msg = function(message) {
    $('#message').text(message);
  };

  // Registration Handler/Callback
  $('#register').on('submit', User.registrationHandler);


});


var msg = function(message) {
    $('.message').text(message);
  };