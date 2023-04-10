var questionContent = document.querySelector(".question");
var answersContent = document.querySelector(".answers-option");
var responseContent = document.querySelector(".response");
var timerContent = document.querySelector(".timer");
var startBtn = document.querySelector(".start-btn");
var defaultCont = document.querySelector(".default-container");
var quizCont = document.querySelector(".quiz-container");

startBtn.addEventListener('click', startQuiz)

const questions = [
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        answer: [
            {text: 'Numbers', correct: false},
            {text: 'Strings', correct: false},
            {text: 'Objects', correct: false},
            {text: 'All of the above', correct: true},
        ]
    },
    {
        question: 'In Math.random() what best describes .random() at its most basic?',
        answer: [
            {text: 'a method', correct: true},
            {text: 'an object', correct: false},
            {text: 'a property', correct: false},
            {text: 'a d&d rule set', correct: false},
        ]
    },
]



function quizDefault() {
    timerContent.textContent = "00";
    if(!responseContent.classList.contains('hidden')){
        responseContent.classList.add('hidden');
    }
    if(!quizCont.classList.contains('hidden')){
        quizCont.classList.add('hidden');
    }
    if(defaultCont.classList.contains('hidden')){
        defaultCont.classList.remove('hidden');
    }
}
quizDefault();


function startQuiz() {
    defaultCont.classList.add("hidden");
    if(quizCont.classList.contains('hidden')){
        quizCont.classList.remove('hidden');
    }
}

function setNextQuestion() {
    
}

function selectAnswer() {

}