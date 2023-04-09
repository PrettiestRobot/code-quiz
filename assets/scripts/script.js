var questionContent = document.querySelector(".question");
var answersContent = document.querySelector(".answers");
var responseContent = document.querySelector("response");
var timerContent = document.querySelector(".timer");

function quizDefault() {
    timerContent.textContent = "00";
    questionContent.textContent = "Welcome to the Code quiz! Answer all the questions before the time runs out and beat the high score! Incorrect answers subtract points. Correct andswers add points. Good luck!"
    
}

quizDefault();


