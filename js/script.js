// Variable element assignments.
var start = document.querySelector(".start");
var highScore = document.querySelector(".high-score-number");
var timerPageNumber = document.querySelector(".timer-page-number");


// Other variable assignments.
var timer;
var timerNumber;
var hsNumber = 0;

// Calls in current high score.
function currentHS (){
    loadHS ();
}

// Adds event listener to start button.
start.addEventListener("click", startGame);

// Starts the game.
function startGame (){
  console.log ("The game has successfully started upon click.");
  timerNumber = 10;
// Hides start button when the game starts so it cannot be clicked again.
  start.style.display = "none";
  startTimer()
};

// Timer function.
function startTimer() {
    timer = setInterval(function() {
        timerNumber--;
        timerPageNumber.textContent = timerNumber;
        if (timerNumber === 0) {
            clearInterval(timer)
            document
            console.log ("The game has ended");
            return
        }
    }, 1000);

// Each question is its own function.
// function question1 {
// };

// function question2 {
// };

// function question3 {
// };

// function question4 {
// };

// function question5 {
// };

// function question6 {
// };

// function question7 {
// };

// function question8 {
// };

// function question9 {
// };

// function question10 {
// };

// Start over button

}