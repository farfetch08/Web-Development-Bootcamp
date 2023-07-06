
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let started = false;

// keyboard event
$(document).on("keypress", function(event){
    if(!started){
        console.log(event.key);
        nextSequence();
        started = true;
    }
})

function nextSequence(){
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random()*4);
    
    let randomChoosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChoosenColor);
    // animating button
    // animatePress(randomChoosenColor);
    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    // playing sound
    playSound(randomChoosenColor);
    
    $("h1").text("Level "+ level);
    
    level++;
}

// mouse clicks event
$(".btn").on("click", function(){
    console.log(this);
    let userChoseColor = $(this).attr("id"); 
    userClickedPattern.push(userChoseColor);
    animatePress(userChoseColor);
    playSound(userChoseColor);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }

    else{
        wrongDisplay();
        startOver();
    }
}

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);

}


function playSound(name){
    let audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function wrongDisplay(){
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
}



function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}