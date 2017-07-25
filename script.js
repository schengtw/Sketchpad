$(document).ready(function () {
    for (var i = 0; i < 16; i++) {
        $('table').append('<tr></tr>');
    }

    for (var i = 0; i < 16; i++) {
        $('tr').append('<td></td>');
    }

    var className = 'single';

    var manyColorNames = [
        'many-colors-0',
        'many-colors-1',
        'many-colors-2',
        'many-colors-3',
        'many-colors-4'
    ]

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
        className = manyColorNames[0];
    });

    $('td').mouseenter(function () {
        $(this).removeClass();
        $(this).addClass(className);
        if (className === 'alternating-0') {
           className = 'alternating-1';
        } else if (className === 'alternating-1') {
            className = 'alternating-0';
        } else if (className.startsWith('many-colors-')) {
            var index = manyColorNames.indexOf(className);
            console.log(index);
            className = manyColorNames[(index + 1) % manyColorNames.length];
        }
    });
});
