const buttonColors = ["red", "blue", "green", "yellow"]
const animTime = 100
let gamePattern = [];
let userClickPattern = [];
let started = false;
let level = 0;
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickPattern.length-1);
    console.log(userClickPattern);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        console.log("success");
        if (userClickPattern.length === gamePattern.length){
            setTimeout(function () {
            nextSequence();
            }, animTime * 10);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, animTime*2);
        startOver();
    }
}

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum]
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(animTime).fadeOut(animTime).fadeIn(animTime);
    playSound(randomChosenColor);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, animTime);
}
  
function startOver() {
    level = 0;
    gamePattern = [];
    userClickPattern = [];
    started = false;
}