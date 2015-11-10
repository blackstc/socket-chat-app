$(function() {
  var socket = io();
  $('form').on('submit', function(e) {
    e.preventDefault();

    var message = $('#m').val();

    socket.emit('chat message', message);
    $('#m').val('');
  })

  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
});
