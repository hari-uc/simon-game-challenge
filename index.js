var level = 1

// finding which color is clicked


$(".btn").click(function(event){
    var btncolor = (event.target.className);
    btnextcolo(btncolor);

    const id = $(this).attr("id");
    $('#'+id).addClass("pressed");
    setTimeout(function() {
        $("#"+id).removeClass('pressed');
    }, 200);

    
    
    var num_1 = Math.floor(Math.random()*5);
    var num_2 = Math.floor(Math.random()*5);


    
    // checking win or lose

    if (num_1 === num_2) {
        level = level+1;
        $("h1").text("Level" + " " + level);
        
    }else{
        $("body").addClass("game-over") 
        setTimeout(function() {
            $("body").removeClass('game-over');
        }, 200);

        btnextcolo("wrong");
        $("h1").text("game over")
    }

    
});










// adding sounds to corresponding buttons on clicked
function btnextcolo(key) {
    switch (key) {
        case "btn green":
             var audio = new Audio("sounds/green.mp3");
             audio.play()
             break;
        case "btn red":
             var audio = new Audio("sounds/red.mp3");
             audio.play()
             break;
        case "btn yellow":
             var audio = new Audio("sounds/yellow.mp3");
             audio.play()
             break;
        case "btn blue":
             var audio = new Audio("sounds/blue.mp3");
             audio.play()
             break;
        case "wrong":
             var audio = new Audio("sounds/wrong.mp3");
             audio.play()
             break;            
    
        default:
            break;
    }
    
    
}
