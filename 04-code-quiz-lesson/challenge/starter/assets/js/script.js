let timerEl = document.getElementById("time")
let startScreen = documen.getElementById("start-screen")
const startBtn = document.getElementById("start")
const questionTitle = document.getElementById("question-title")
const questionChoices = document.getElementById("choices")
const endScreen = document.getElementById("end-screen")
const finalScore = document.getElementById("final-score")
const initials = document.getElementById("initals")
const submitBtn = document.getElementById("submit")
const feedbackEl = document.getElementById("feedback") 

let questions = [ 
  {
    title: "First Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  },
  {
    title: "First Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  },
  {
    title: "First Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  },
  {
    title: "First Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  },
  {
    title: "First Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  }
]

let timerInterval;
let questionIndex = 0
let timer = questions.length * 15

function startQuiz() {
  startScreen.setAttribute("class", "hide")
  questions.removeAttribute("class")
  timerInterval = setInterval(function() {
   timer--
   timerEl.textcontent = timer 

   if (timer <= 0) {
    endQuiz()
  }
  }, 1000)


}
