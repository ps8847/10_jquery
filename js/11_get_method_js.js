$(document).ready(function() {

    // var a = $('#box').html();
    // console.log(a);

    // var a = $('body').html();
    // console.log(a);

    // var a = $('#box p').html();
    // console.log(a);

    // var a = $('#box p').text();
    // console.log(a);

    // var a = $('#box').attr('class');
    // console.log(a);

    $('#sform').submit(function() {
        /*
        var name = $('#sname').val();
        alert("hello " + name);

        var classname = $('#sclass').val();
        alert("hello " + classname);

        var country = $('#scountry').val();
        alert("hello " + country);
        */

        var name = $('#sname').val();
        var classname = $('#sclass').val();
        var country = $('#scountry').val();
        alert("name : " + name + ", class : " + classname + ", country : " + country)


    })
})