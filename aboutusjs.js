gsap.registerPlugin(ScrambleTextPlugin);

$(document).ready(function() {
    gsap.to("#idk", {duration: 3.6, scrambleText: "Wanna know more about us?Here you go ฅ^･ω･^ฅ"});
    gsap.to("#idk", {opacity:0,duration:0.2,delay:3.6,onComplete:niggawhat});
    gsap.to(".iidk", {opacity:1,duration:0.2,delay:3.8});
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
    function niggawhat(){
        $("#idk").style.display="none";
    }
        
    

});

    


