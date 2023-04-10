const questionContent = document.querySelector(".question");
const answersContent = document.querySelector(".answers-option");
const responseContent = document.querySelector(".response");
const timerContent = document.querySelector(".timer");
const startBtn = document.querySelector(".start-btn");
const defaultCont = document.querySelector(".default-container");
const quizCont = document.querySelector(".quiz-container");

// sets 2 empty variables with one const
let shuffledQuestions, currentQuestions;

// on click call the funstion to start the quiz
startBtn.addEventListener("click", startQuiz);

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

function startQuiz() {
  defaultCont.classList.add("hidden");
  // use the sort method and an arrow function to shuffle the questions into a new array
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  if (quizCont.classList.contains("hidden")) {
    quizCont.classList.remove("hidden");
  }

  setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContent.innerText = question.question;
    question.answer.forEach(answer => {
        const btn = document.createElement('button')
    })
}

function selectAnswer() {}
