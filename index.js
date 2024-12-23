let level = 0;
let gameStarted = false;
let sequence = [];
let playerSequence = [];
const buttonColors = ["green", "red", "yellow", "blue"];

document.addEventListener("keypress", () => {
  if (!gameStarted) {
    gameStarted = true;
    playerSequence = [];
    sequence = [];
    level = 0;
    increaseLevel();
    setTimeout(nextLevel, 2000);
  }
});

buttonColors.forEach((color) => {
  document.getElementById(color).addEventListener("click", function () {
    if (gameStarted) {
      const userChosenColor = this.id;
      console.log(userChosenColor);
      playerSequence.push(userChosenColor);
      buttonClicked(playerSequence.length - 1);
    }
  });
});

function buttonClicked(input) {
  if (sequence[input] === playerSequence[input]) {
    if (playerSequence.length === sequence.length) {
      increaseLevel();
      setTimeout(nextLevel, 1000);
    }
  } else {
    gameOver();
  }
}

function increaseLevel() {
  level++;
  document.getElementById("main").innerHTML = `Level ${level}`;
}

function gameOver() {
  document.getElementById("main").innerHTML =
    "Game Over, Press Any Key to Start";
  gameStarted = false;
  sequence = [];
  playerSequence = [];
}

function nextLevel() {
  playerSequence = [];
  const random = Math.floor(Math.random() * 4);
  const randomColor = buttonColors[random];
  sequence.push(randomColor);
  console.log(randomColor);

  const button = document.getElementById(randomColor);
  button.style.backgroundColor = "black";
  setTimeout(() => {
    button.style.backgroundColor = "";
  }, 100);
}
