let theScore = document.getElementById('highscores')
let theButton = document.getElementById('clear')


let playerHistory = JSON.parse(localStorage.getItem('highScores')) || []

if (playerHistory.length > 0) {
  // sort the playerHistory array for the highest to lowest
  for (let i = 0; i < playerHistory.length; i++) {
    const Scores = playerHistory[i];
    console.log(Scores)
    let listEL = document.createElement("li")
    listEL.textContent = Scores.initials + " : " + Scores.score
    theScore.append(listEL)
  }
}

function clearAll() {
theScore.innerHTML = '';
}

function Clear() {
  localStorage.clear('highScores')
}



theButton.addEventListener('click', Clear)