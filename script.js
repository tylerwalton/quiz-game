var timerEl = document.querySelector("#time");
var srtBtn = document.querySelector("#start");
var srtScreen = document.querySelector("#start-screen");



// lets get this mf started
function beginQuiz () {
  countDown = 90;
  srtBtn.disabled = true;
}




var questions = [
    {
        question: "How many Pokemnon were there when the show orginally launched?",
        choices: [
            { text: "69", isCorrect: true},
            { text: "204", isCorrect: false },
            { text: "151", isCorrect: true },
            { text: "3", isCorrect: false },
        ],
    },
    {
        question: "How many types of pokemon are there originally?",
        choices: [
            { text: "15", isCorrect: true},
            { text: "13", isCorrect: false },
            { text: "151", isCorrect: false },
            { text: "20", isCorrect: false },
        ],
    },
    {
        question: "What is the name of the profesor that gave Ash his first pokemon?",
        choices: [
            { text: "Mel Gibson", isCorrect: false},
            { text: "George W. Bush", isCorrect: false },
            { text: "Johnny Sins", isCorrect: false },
            { text: "Samuel Oak", isCorrect: true },
        ],  
    },
    {
        question: "Who is the main pokemon in the series?",
        choices: [
            { text: "Charzard", isCorrect: false},
            { text: "Pikachu", isCorrect: true },
            { text: "Raichu", isCorrect: false },
            { text: "Bulbasaur", isCorrect: false },
        ],  
    },
    {
        question: "Which character type does NOT exist?",
        choices: [
            { text: "Fire", isCorrect: false},
            { text: "Glass", isCorrect: true },
            { text: "Water", isCorrect: false },
            { text: "Psychic", isCorrect: false },
        ],  
    },]

// right or wrong answers
function answers() {
    var dataCorrect = this.dataset.isCorrect;
    
    if (dataCorrect) {
        promptEl.textContent = "CORRECT!";
    }
    else {
        promptEl.textContent = "WRONG!";
    }
}