$(document).ready(function(){
    for (var i=0; i<16; i++){
        $('table').append('<tr></tr>');
    }

    for (var i=0; i<16; i++){
     $('tr').append('<td></td>');
    }

  $('td').mouseenter(function(){
    $(this).addClass('change-background-color');
  });
});
