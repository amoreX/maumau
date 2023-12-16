$(document).ready(function() {
    $("#amorexpfp").on("mouseover", function() {
        $(".tnihal").addClass("visible");
        $(".amorecardcontent").addClass("visiblecard");
    });

    $("#amorexpfp").on("mouseout", function() {
        $(".tnihal").removeClass("visible");
        $(".amorecardcontent").removeClass("visiblecard");
    });

    $("#asadpfp").on("mouseover", function() {
        $(".tasad").addClass("visible");
        $(".asadcardcontent").addClass("visiblecard");
    });

    $("#asadpfp").on("mouseout", function() {
        $(".tasad").removeClass("visible");
        $(".asadcardcontent").removeClass("visiblecard");
    });

});

    


