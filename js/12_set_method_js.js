$(document).ready(function() {
    $('#clickbutton').click(function() {
        $('#box h2').text("Hello Yahoo Baba");

        $('#box p').html("<br> this is dummy <b> text in </b> tag");

        $('#box h2').attr("class", "red");


    })
})


$(document).ready(function() {
    $('#sname').val("Prince Sharma");
    $('#sclass').val("btech");
})