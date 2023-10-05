$('#addbutton').click(function() {
    $('#box').addClass('first');

    // $('#box').addClass('first second');

    // $('#box,h1').addClass('second');
})


$('#removebutton').click(function() {
    $('#box').removeClass('first');

    // $('#box').removeClass('first second');

    // $('#box,h1').removeClass('second');
})

$('#togglebutton').click(function() {
    $('#box').toggleClass('second');

    // $('#box').toggleClass('first second');

    // $('#box,h1').toggleClass('second');
})