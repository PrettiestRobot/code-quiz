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
let timeInterval; 
// sets 2 empty variables with one const
let shuffledQuestions, currentQuestions;

// on click call the funstion to start the quiz
startBtn.addEventListener("click", startQuiz);

// Questions Array
const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answer: [
      { text: "const", correct: false },
      { text: "let", correct: false },
      { text: "var", correct: true },
      { text: "set", correct: false }
    ],
  },
  {
    question:
      "What method is used to add an item to the end of an array in JavaScript?",
    answer: [
      { text: " concat()", correct: false },
      { text: "shift()", correct: false },
      { text: "push()", correct: true },
      { text: " join()", correct: false }
    ],
  },
  {
    question: "What operator is used to compare the values and data types in JavaScript?",
    answer: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!==", correct: false },
      { text: ">", correct: false }
    ],
  },
  {
    question:
      "What method is used to convert a string to an array in JavaScript?",
    answer: [
      { text: "split()", correct: true },
      { text: "join()", correct: false },
      { text: "slice()", correct: false },
      { text: "reverse()", correct: false }
    ],
  },
  {
    question:
      "What method is used to remove the last item from an array in JavaScript?",
    answer: [
      { text: "slice()", correct: false },
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ],
  },
  {
    question:
      "What method is used to get the length of an array in JavaScript?",
    answer: [
      { text: "length()", correct: false },
      { text: "count()", correct: false },
      { text: "size()", correct: false },
      { text: "length", correct: true }
    ],
  },
  {
    question:
      "What keyword is used to declare a function in JavaScript?",
    answer: [
      { text: "method", correct: false },
      { text: "def", correct: false },
      { text: "function", correct: true },
      { text: "class", correct: false }
    ],
  },
  {
    question:
      "What method is used to find the index of a specified element in an array in JavaScript?",
    answer: [
      { text: "filter()", correct: false },
      { text: "find()", correct: false },
      { text: "search()", correct: false },
      { text: "indexOf()", correct: true }
    ],
  },
  {
    question:
      "What method is used to convert a number to a string in JavaScript?",
    answer: [
      { text: "toString()", correct: true },
      { text: "stringify()", correct: false },
      { text: "convertToString()", correct: false },
      { text: "numToStr()", correct: false }
    ],
  },
  {
    question:
      "What operator is used to concatenate strings in JavaScript?",
    answer: [
      { text: "+", correct: true },
      { text: ".", correct: false },
      { text: "&", correct: false },
      { text: "/", correct: false }
    ],
  },
];

function countdown() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerContent.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      endState();
    }
  }, 1000);
}

// Returns page to default state if game is not in session
function quizDefault() {
  timeLeft = 50;
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

function endState() {
  clearInterval(timeInterval);
  score = score + timeLeft;
  console.log(score);
  quizDefault();
}

quizDefault();

// starts quiz
function startQuiz() {
  timerContent.textContent = timeLeft;
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
  currentQuestionIndex++;
  if (shuffledQuestions.length > currentQuestionIndex) {
    setNextQuestion();
  } else {
    // clearInterval(timeInterval);
    // score = score + timeLeft;
    // console.log(score);
    // quizDefault()
    endState();
  }

}

