var timerEl = document.querySelector("#time");
var srtBtn = document.querySelector("#start");
var srtScreen = document.querySelector("#start-screen");
var questionsEl = document.querySelector("#questions");
var questionIndex = 0;
var container = document.getElementsByClassName("container");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");
var submit = document.querySelector("#submit");
var sec = 90;
var timer;
var finalScore = document.querySelector("#final-score");

// lets get this started
https: function beginQuiz() {
  srtBtn.classList.add("hide");
  srtScreen.classList.add("hide");
  beginTimer();
  questionsEl.removeAttribute("class");
  nextQuestion();
}

// Timer needs to start along with the game
function beginTimer() {
  timer = setInterval(() => {
    sec--;
    timerEl.innerHTML = sec;
    if (sec <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// function to go from question to question
function nextQuestion() {
  var currentQuestion = questions[questionIndex];
  // questions [0].question= "How many Pokemnon were there when the show orginally launched?"
  questionTitle.textContent = currentQuestion.question;
  choices.innerHTML = "";
  currentQuestion.choices.forEach(function (input) {
    var choicesBtn = document.createElement("button");
    choicesBtn.textContent = input.text;
    choicesBtn.setAttribute("class", "btn");
    choicesBtn.setAttribute("value", input.isCorrect);
    choicesBtn.onclick = checkChoice;
    choices.append(choicesBtn);
  });

  function checkChoice() {
    if (this.value === "true") {
      console.log("Correct!");
    } else {
      console.log("Wrong!");
      sec = sec - 10;
      timerEl.innerHTML = sec;
    }
    questionIndex++;
    if (questionIndex === questions.length) {
      stopQuiz();
    } else {
      nextQuestion();
    }
  }

  function stopQuiz() {
    clearInterval(timer);
    questionsEl.setAttribute("class", "hide");
    finalScore.textContent = sec;
    endScreen.removeAttribute("class");
  }
}

function saveScore() {
  var scoreArray = JSON.parse(localStorage.getItem("scores")) || [];
  var newScore = {
    score: sec,
    name: initials.value,
  };
  scoreArray.push(newScore);
  localStorage.setItem("scores", JSON.stringify(scoreArray));

  loadData();
}

// create a function to load the highscores from local storage
function loadData() {
  var load = localStorage.getItem("scores"); // targeted the right key in localstorage
  console.log(load);
  if (!load) {
    return false;
  }

  load = JSON.parse(load);
  let container1 = document.getElementById("scoreContainer"); // target a container to display scores

  for (var i = 0; i < load.length; i++) {
    var highScorestext = document.createElement("li");
    highScorestext.classList.add("list", "text");
    highScorestext.setAttribute("id", "quiz-mark");
    highScorestext.textContent = load[i].name + " : " + load[i].score;
    container1.appendChild(highScorestext);
  }
}

var questions = [
  {
    question: "How many Pokemnon were there when the show orginally launched?",
    choices: [
      { text: "69", isCorrect: false },
      { text: "204", isCorrect: false },
      { text: "151", isCorrect: true },
      { text: "3", isCorrect: false },
    ],
  },
  {
    question: "How many types of pokemon are there originally?",
    choices: [
      { text: "15", isCorrect: true },
      { text: "13", isCorrect: false },
      { text: "151", isCorrect: false },
      { text: "20", isCorrect: false },
    ],
  },
  {
    question:
      "What is the name of the profesor that gave Ash his first pokemon?",
    choices: [
      { text: "Mel Gibson", isCorrect: false },
      { text: "George W. Bush", isCorrect: false },
      { text: "Johnny Sins", isCorrect: false },
      { text: "Samuel Oak", isCorrect: true },
    ],
  },
  {
    question: "Who is the main pokemon in the series?",
    choices: [
      { text: "Charzard", isCorrect: false },
      { text: "Pikachu", isCorrect: true },
      { text: "Raichu", isCorrect: false },
      { text: "Bulbasaur", isCorrect: false },
    ],
  },
  {
    question: "Which character type does NOT exist?",
    choices: [
      { text: "Fire", isCorrect: false },
      { text: "Glass", isCorrect: true },
      { text: "Water", isCorrect: false },
      { text: "Psychic", isCorrect: false },
    ],
  },
];

srtBtn.onclick = beginQuiz;
submit.onclick = saveScore;
