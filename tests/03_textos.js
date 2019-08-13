$(document).ready(function() {
    console.log($('a').lenght)
    
    $('#add_button').click(function () { 
        $('#menu').append('<li><a href="' + $('#add_text').val()+'"></a></li>');
        //  $('#menu').prepend('<li><a href="' + $('#add_text').val()+'"></a></li>');
        //$('#menu').before('<li><a href="' + $('#add_text').val()+'"></a></li>');
        //$('#menu').after('<li><a href="' + $('#add_text').val()+'"></a></li>');
        reloadLinks();
        
    });

});

function reloadLinks () { 
    $('a').each( function(index) {
        var that = $(this);
        var enlace = that.attr("href");
        that.attr("target","blank");
        that.text(enlace);
    })
 }