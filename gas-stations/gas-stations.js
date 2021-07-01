$(document).ready(function() {
    $(".details1").hide();
    $("#details1").hide();
    $("#det1").click(function() {
        $(".details1").toggle();
    });
    $("#location").click(function() {
        $("#details1").toggle();
    });
    $(".details2").hide();
    $("#details2").hide();
    $("#det2").click(function() {
        $(".details2").toggle();

        $("#location1").click(function() {
            $("#details2").toggle();
        });
    });
    $(".details3").hide();
    $("#details3").hide();
    $("#det3").click(function() {
        $(".details3").toggle();

        $("#location2").click(function() {
            $("#details3").toggle();
        });
    });
    $(".details4").hide();
    $("#details4").hide();
    $("#det4").click(function() {
        $(".details4").toggle();

        $("#location3").click(function() {
            $("#details4").toggle();
        });
    });


    $(".details5").hide();
    $("#details5").hide();
    $("#det5").click(function() {
        $(".details5").toggle();

        $("#location4").click(function() {
            $("#details5").toggle();
        });
    });
    $(".details6").hide();
    $("#details6").hide();
    $("#det6").click(function() {
        $(".details6").toggle();

        $("#location5").click(function() {
            $("#details6").toggle();
        });
    });
});