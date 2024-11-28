const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = new Array()
alert(buttonColors)
function nextSequence() {
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum]
    gamePattern.push(randomChosenColor);
}
for (let i = 0; i < 20; i++) {
    nextSequence();
}
console.log(gamePattern)