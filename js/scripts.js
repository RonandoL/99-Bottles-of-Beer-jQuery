$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    $('.results').empty();
    var number = parseInt($('input.number').val());
    // Stupid lyrics
    var lyrics1 = ' bottles of beer on the wall, ';
    var lyrics2 = ' bottles of beer! Take one down, pass it around, ';
    var lyrics3 = ' bottles of beer on the wall! ';

    for (var i = number; i > 0; i -= 1) {
      $('.results').append('<h4>' + i + lyrics1 + i + lyrics2 + (i - 1) + lyrics3 + '</h4>');
    }

  }); // form.submit

});
