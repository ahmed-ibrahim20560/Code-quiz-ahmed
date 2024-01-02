let timerEl = document.getElementById("time")
let startScreen = document.getElementById("start-screen")
const startBtn = document.getElementById("start")
const question = document.getElementById("questions")
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
    title: "Second Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  },
  {
    title: "third Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  },
  {
    title: "Fourth Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  },
  {
    title: "Fifth Question",
    choices: "ChoiceA, ChoiceB, ChoiceC",
    answer: "ChoiceB",
  }
]

let timerInterval;
let questionIndex = 0
let timer = questions.length * 15


function startQuiz() {
  startScreen.setAttribute("class", "hide")
  question.removeAttribute("class")

  timerInterval = setInterval(function() {
    timer--
    timerEl.textContent = timer

    if (timer <= 0) {
      endQuiz()
    }
  }, 1000)

  getQuestions()
}


function getQuestions() {
  let currentQuestion = questions[questionIndex]

  questionTitle.textContent = currentQuestion.title

  let choices = currentQuestion.choices.split(", ")

  questionChoices.innerHTML = ""

  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i];
    let choiceBtn = document.createElement("button")
    choiceBtn.setAttribute('class', 'choices')
    choiceBtn.setAttribute('value' , choice) 
    choiceBtn.textContent = choice
    choiceBtn.addEventListener('click' , selectAnswer)
    questionChoices.appendChild(choiceBtn)
  }
}



function endQuiz() {
  clearInterval(timerInterval)
  question.setAttribute("class", "hide")
  endScreen.removeAttribute("class")
  }
  
  startBtn.addEventListener("click" , startQuiz)