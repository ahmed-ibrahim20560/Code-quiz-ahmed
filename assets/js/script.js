let timerEl = document.getElementById("time")
let startScreen = document.getElementById("start-screen")
const startBtn = document.getElementById("start")
const question = document.getElementById("questions")
const questionTitle = document.getElementById("question-title")
const questionChoices = document.getElementById("choices")
const endScreen = document.getElementById("end-screen")
const finalScore = document.getElementById("final-score")
const initials = document.getElementById("initials")
const submitBtn = document.getElementById("submit")
const feedbackEl = document.getElementById("feedback") 

let questions = [ 
  {
    title: "What is 43 x 28?",
    choices: "1204, 1424, 844, 1182",
    answer: "1204",
  },
  {
    title: "Which of these animals is the heaviest on average?",
    choices: "Elephant, Rhino, Sperm whale, salt-water crocodile",
    answer: "Sperm whale",
  },
  {
    title: "What is the difference between white and milk chocolate?",
    choices: "Contains less cocoa, Has more cream, Has less sugar, Has less flour",
    answer: "Contains less cocoa",
  },
  {
    title: "What is the estimated global population?",
    choices: "10.3 Billion, 6.5 Billion, 8.1 Billion, 7.3 Billion",
    answer: "8.1 Billion",
  },
  {
    title: "Who is the currnet prime minister of the UK",
    choices: "Rishi Sunak, Boris Johnson, Suella Braverman, Priti Patel",
    answer: "Rishi Sunak",
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

function selectAnswer(event) {
  if (event.target.value !== questions[questionIndex].answer) {
    timer -= 15

    if (timer <= 0) {
      timer = 0
    }

    timerEl.textContent = timer 
    feedbackEl.textContent = "wrong answer!"
  }

  else {
    feedbackEl.textContent = "correct answer!"
  }

  feedbackEl.setAttribute('class', 'feedback')
  setTimeout(function() {
    feedbackEl.setAttribute('class' , 'feedback hide')
  }, 1000)

  questionIndex++ 

  if (questionIndex === questions.length) {
    endQuiz()
  }
  else {
    getQuestions()
  }
}


function endQuiz() {
  clearInterval(timerInterval)
  question.setAttribute("class", "hide")
  endScreen.removeAttribute("class")
  finalScore.textContent = timer
  }

  function savePlayer() {
    let playerHistory = JSON.parse(localStorage.getItem('highScores')) || []

    let Player = {
      initials: initials.value, 
      score: timer
    }

    playerHistory.push(Player)

    localStorage.setItem('highScores', JSON.stringify(playerHistory))
    document.location.replace("./highscores.html")
  }

submitBtn.addEventListener('click', savePlayer)

  
  startBtn.addEventListener("click" , startQuiz)