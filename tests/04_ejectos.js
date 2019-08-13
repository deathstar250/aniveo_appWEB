$(document).ready(function () {
    
    //1

    $("#box").hide();
    
    $("#show_button").click(function (e) { 
        $("#box").show("normal");
    });

    $("#hide_button").click(function (e) { 
        $("#box").hide("fast");
    });

    //2

    $("#hide_button2").hide();
    $("#box2").hide();  
    
    $("#show_button2").click(function (e) { 
        $(this).hide();
        $("#hide_button2").show("");
        $("#box2").fadeIn("fast");
    });

    $("#hide_button2").click(function (e) { 
        $(this).hide();
        $("#show_button2").show();
        $("#box2").fadeOut("fast");
    });


});