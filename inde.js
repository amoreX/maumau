$(document).ready(function() {
    $("#but1").on("click", function(){
        window.open('https://n0uchan.github.io/Simon-Game/');
    })
    $("#but2").on("click", function(){
        window.open('https://github.com/amoreX/buggysnake');
    })
    $("#but3").on("click", function(){
        window.open('https://amorex.github.io/drumsandstuff/');
    })
    $("#but4").on("click", function(){
        window.open('https://amorex.github.io/luckgame/');
    })
})
window.addEventListener('load', (event) => {
    
    document.body.style.opacity = '1';
});
$(".img-fluid").on("mouseover", function(){
    var audio=document.getElementById("meow");
    //audio.play();
})
