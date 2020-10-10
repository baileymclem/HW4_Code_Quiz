/* code quiz
A. click the start button
    I. a timer starts
        a. start time is 60 seconds
        b. timer decretements 1 second at a time
    II. question is presented
        a. 4 answer buttons presented below question
        b. each button has a hover event
B. question is answered
    I. correct answer is highlighted in some way
    II. another question is then presented
C. answer a question incorrectly
    I. time is subtracted from the clock
        a. 10 seconds are decremented from timer
D. all questions are answered or the timer reaches 0
    I. the game is over
    II. results are shown
E. save initials and score
``` */



/* const buttonEl = document.getElementById("button");
const countDownEl = document.getElementById("countdown");
const containerEl = document.getElementById("quiz");
//const questCol = document.getElementById("question-container");
const startButton = document.getElementById("quizButton");
const questionEl = document.getElementById("displayQuestion")

startButton.addEventListener("click", startQuiz)
//finishButtonEl.addEventListener('click', showResults)

// countdown event
function timer() {
  
	var timeLeft = 60;
  
	var timeInterval = setInterval(function () {
	  countDownEl.textContent = timeLeft;
	  timeLeft--;

	  /*if(secondsLeft === 0) {
		clearInterval(timerInterval);
		showScore();
	  } */

/* 	}, 1000);
  }

// quiz
function startQuiz() {
	containerEl.setAttribute('class', 'hide');
	.removeAttribute('class')
	timer();
	quizQuesetion();
}

//questions
var questions = [{
	title: 'Inside which HTML element do we put the JavaScript?',
	choices: ['<js>', '<javascript>', '<scritping>', '<script>'],
	correctAnswer: '<script>'
},{
	title: 'How do you create a function in JavaScript?',
	choices: ["function = myFunction()", "myFunction function()", "function myFunction()", "function: myFunction()"],
	correctAnswer: "function: myFunction()"
},{
	title: 'How does a FOR loop start?',
	choices: ["for (i<=5;i++)", "for i= 1 to 5", "for (i = 0;i <=5)", "for (i = 0; i ,=5; i++)"],
	correctAnswer: "for (i = 0; i ,=5; i++)"
},{
	title: "How can you add a comment in a JavaScript?",
	choices: ["<!--This is a comment-->", "//This is a comment", ":This is a comment", "*This is a comment"],
	correctAnswer: "//This is a comment"
}
]





var currentIndex = 0;
var quizTitleEl = document.getElementById('quizTitle')
var choicesDisplayEl = document.getElementById('choicesDisplay')

function quizQuesetion() {
	quizTitleEl.textContent = questions[currentIndex].title;
	var button = document.createElement('button');
	button.textContent = questions[currentIndex].choices;                                                            

	choicesDisplayEl.append(button);

	
}

function showScore() {} */