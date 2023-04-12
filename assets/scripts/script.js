const questionContent = document.querySelector(".question");
const answersContent = document.querySelector(".answers-option");
const responseContent = document.querySelector(".response");
const timerContent = document.querySelector(".timer");
const startBtn = document.querySelector(".start-btn");
const defaultCont = document.querySelector(".default-container");
const quizCont = document.querySelector(".quiz-container");
const answerBtns = document.querySelector(".answer-container");
const answerResult = document.querySelector(".answer-result");

let score = 0;
let timeLeft = 50;
// sets 2 empty variables with one const
let shuffledQuestions, currentQuestions;

// on click call the funstion to start the quiz
startBtn.addEventListener("click", startQuiz);

// Questions Array
const questions = [
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answer: [
      { text: "Numbers", correct: false },
      { text: "Strings", correct: false },
      { text: "Objects", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question:
      "In Math.random() what best describes .random() at its most basic?",
    answer: [
      { text: "a method", correct: true },
      { text: "an object", correct: false },
      { text: "a property", correct: false },
      { text: "a d&d rule set", correct: false },
    ],
  },
];


function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerContent.textContent = timeLeft;
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      quizDefault();
    }
  }, 1000);
} 

// Returns page to default state if game is not in session
function quizDefault() {
  timerContent.textContent = "00";
  if (!responseContent.classList.contains("hidden")) {
    responseContent.classList.add("hidden");
  }
  if (!quizCont.classList.contains("hidden")) {
    quizCont.classList.add("hidden");
  }
  if (defaultCont.classList.contains("hidden")) {
    defaultCont.classList.remove("hidden");
  }
}
quizDefault();

// starts quiz
function startQuiz() {
  countdown();
  defaultCont.classList.add("hidden");
  // use the sort method and an arrow function to shuffle the questions into a new array
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  if (quizCont.classList.contains("hidden")) {
    quizCont.classList.remove("hidden");
  }
  setNextQuestion();
}

// remove current question li so new questions can populate
function resetState() {
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Populate the question container
function showQuestion(question) {
  questionContent.innerText = question.question;
  question.answer.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("answer-option");
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
    answerBtns.appendChild(btn);
  });
}

function selectAnswer(e) {
  // sets selected button as the target of the  click event
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct;
  if (isCorrect) {
    if (responseContent.classList.contains("hidden")) {
      responseContent.classList.remove("hidden");
    }
    score = score + 10;
    answerResult.textContent = "CORRECT!";
    console.log("thats correct");
  } else {
    if (responseContent.classList.contains("hidden")) {
      responseContent.classList.remove("hidden");
    }
    score = score - 10;
    answerResult.textContent = "INCORRECT!";
    console.log("thats not correct");
  }
  console.log(score);
  currentQuestionIndex++;
  setNextQuestion();
}

answersContent.addEventListener("click", selectAnswer);
