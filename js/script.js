// Element assignments.
var start = document.querySelector(".start");
var ready = document.querySelector(".ready");
var choice = document.querySelector(".choice");
var result = document.querySelector(".result");
var scoretext = document.querySelector(".scoretext");
var quizContent = document.querySelector(".quizcontent");
var hsPageNumber = document.querySelector(".hs-page-number");
var timerPageNumber = document.querySelector(".timer-page-number");
var questionPage = document.querySelector("#question");
var choicesPage = document.querySelector("#choices");



// Storing questions + answers.
var questionList = [
    {
        question: "What are the three basic types of data?",
        choice1: "numbers, strings, booleans",
        choice2: "letters, numbers, equations",
        choice3: "input, text, numbers",
        correct: 1
    },
    {
        question: "When you store a function inside of an object, what is this called?",
        choice1: "Object method",
        choice2: "Object grouping",
        choice3: "Object function",
        correct: 1
    },
    {
        question: "Where within the HTML must the .js file be called? ",
        choice1: "In <head>",
        choice2: "In <footer>",
        choice3: "Before </body>",
        correct: 3
    },
    {
        question: "How do you find the number of items present in an array?",
        choice1: ".howmany",
        choice2: ".length",
        choice3: ".number",
        correct: 2
    }
];

// Other variables.
var timer;
var timerNumber;
var score = 0;
var currentQuestion = 0;
var lastQuestion = questionList.length - 1;

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
            quizContent.style.display="none"
            console.log("Score: " + score)
            score =scoretext.textContent = score;
            result.style.display = "block";
            ready.style.display = "";
            return
        }
    }, 1000);
}

// Display question + choices function.
function displayQuestions() {
    var x = questionList[currentQuestion];
    questionPage.textContent = x.question;
    choice1.textContent = x.choice1;
    choice2.textContent = x.choice2;
    choice3.textContent = x.choice3;
    return
};

// Check answer function.
function checkAnswer(answer){
    if (answer == questionList[currentQuestion].correct){
        console.log("Correct")
        score++;
    } else {
        console.log("Incorrect 🤡")
        timerNumber-= 5;
    }
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        displayQuestions();
    }
    return
};

// Starts the game.
function startGame() {
    score = 0;
    currentQuestion= 0;
    timer = 0;
    console.log ("The game has successfully started upon click.");
    timerNumber = 20;
// Hides start button and "Ready?" text when game starts.
    start.style.display = "none";
    quizContent.style.display = "block";
    ready.style.display = "none";
    result.style.display = "none";
    
    startTimer()
    console.log ("The start button and text has been hidden.")
//   Shows questions and choices.
    displayQuestions()
    return
};

// Establishes high score and saves to local storage.
localStorage.setItem("score", JSON.stringify(score));