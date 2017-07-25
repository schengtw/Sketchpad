$(document).ready(function () {
    for (var i = 0; i < 16; i++) {
        $('table').append('<tr></tr>');
    }

    for (var i = 0; i < 16; i++) {
        $('tr').append('<td></td>');
    }

    var className = 'single';

    $('.clear').click(function () {
        $('td').removeClass();
    });

    $('.one-color').click(function () {
        className = 'single';
    });

    $('.two-color').click(function () {
        className = 'alternating-0';
    });

    $('.many-colors').click(function () {
    });

    $('td').mouseenter(function () {
        $(this).removeClass();
        $(this).addClass(className);
        if (className === 'alternating-0') {
           className = 'alternating-1';
        } else if (className === 'alternating-1') {
            className = 'alternating-0';
        }
    });
});
