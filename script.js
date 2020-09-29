var buttonEl = document.querySelector("#button");
var countDownEl = document.querySelector("#countdown");
var containerEl = document.querySelector("#quiz")
var questCol = document.querySelector("#questions")

//think of questions
//var questions = []

// countdown event
function timer() {
  
	var timeLeft = 60;
  
	var timeInterval = setInterval(function () {
	  countdownEl.textContent = timeLeft;
	  timeLeft--;
	}, 1000);
  }

// quiz
function jsQuiz() {
	containerEl.innerHTML = "";
	questCol.textContent = 

}