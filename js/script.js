// Element assignments.
var start = document.querySelector(".start");
var ready = document.querySelector(".ready");
var quizContent = document.querySelector(".quiz-content");
var hsPageNumber = document.querySelector(".hs-page-number");
var timerPageNumber = document.querySelector(".timer-page-number");
var questionPage = document.querySelector("#question");
var choicesPage = document.querySelector("#choices");

// Storing questions + answers.
var questionList = [
    {
        question: "This is question one?",
        choice1: "Choice one",
        choice2: "Choice two",
        choice3: "Choice three",
        correct: 1
    },
    {
        question: "When you store a function inside of an object, what is this called?",
        choice1: "Object method",
        choice2: "Object grouping",
        choice3: "Object function",
        correct: 2
    },
    {
        question: "This is question three?",
        choice1: "Choice one",
        choice2: "Choice two",
        choice3: "Choice three",
        correct: 3
    },
    {
        question: "How do you find the number of items present in an array?",
        choice1: ".howmany",
        choice2: ".length",
        choice3: ".number",
        correct: 3
    }
];

// Other variables.
var timer;
var timerNumber;
var score = 0;

// Adds event listener to start button.
start.addEventListener("click", startGame);


// Timer function.
function startTimer() {
    timer = setInterval(function() {
        timerNumber--;
        timerPageNumber.textContent = timerNumber;
        if (timerNumber <= 0) {
            console.log ("The game has officially ended.");
            clearInterval(timer)
            start.style.display = "";
            quizcontent.style.display= "none";
            return
        }
    }, 1000);
}

// Display question + choices function.
function displayQuestions() {
    var x = questionList[0];
    questionPage.textContent = x.question;
    console.log(x);
    choice1.textContent = x.choice1;
    choice2.textContent = x.choice2;
    choice3.textContent = x.choice3;
};

// Check answer function.
function checkAnswer(answer){
    if (answer == questionList[0].correct){
        console.log("Correct")
        score++;
    } else {
        console.log("Incorrect")
        timerNumber-= 5;
    }
}

// Starts the game.
function startGame() {
    console.log ("The game has successfully started upon click.");
    timerNumber = 15;
// Hides button and "Ready?" text when game is started.
    start.style.display = "none";
    quizcontent.style.display = "";
    startTimer()
    console.log ("The start button and text has been hidden.")
//   Shows questions and choices.
    displayQuestions()

};


// Establishes high score and saves to local storage.
// var highScore = whatever points are at end
// localStorage.setItem("highScore", JSON.stringify(highScore));