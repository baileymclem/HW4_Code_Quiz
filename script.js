const startButton = document.getElementById("start-btn");
const containerQuestionEl = document.getElementById("question-container");
const containerStartEl = document.getElementById("start-container");
const choicesEl = document.getElementById("buttons");


var currentIndex = 0;
var score = 0;
var timeLeft = 60;
var currentQuestion = 0;
var maxQuestions = 4;


startButton.addEventListener("click", startQuiz);


var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<scritping>", "<script>"],
    correctAnswer: "<script>",
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function = myFunction()",
      "myFunction function()",
      "function myFunction()",
      "function: myFunction()",
    ],
    correctAnswer: "function: myFunction()",
  },
  {
    question: "How does a FOR loop start?",
    choices: [
      "for (i<=5;i++)",
      "for i= 1 to 5",
      "for (i = 0;i <=5)",
      "for (i = 0; i < 5; i++)",
    ],
    correctAnswer: "for (i = 0; i < 5; i++)",
  },
  {
    question: "How can you add a comment in a JavaScript?",
    choices: [
      "<!--This is a comment-->",
      "//This is a comment",
      ":This is a comment",
      "*This is a comment",
    ],
    correctAnswer: "//This is a comment",
  },
];

function timer() {
  const countDownEl = document.getElementById("countdown");

  var timeInterval = setInterval(function () {
    timeLeft--;
    countDownEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      alert("Time's Up!");
    }
  }, 1000);
}

function startQuiz() {
  containerStartEl.setAttribute("class", "hide");
  containerQuestionEl.setAttribute("class", "show");
  timer();
  quizQuestion();
}

function quizQuestion() {

	if (questions.length === 0 || currentIndex >= maxQuestions) {
		return window.location.assign('score.html');
	}
  var questionTitle = document.getElementById("question-title");
  questionTitle.innerText = questions[currentIndex].question;
  var choicesListEl = document.getElementById("choices");

  for (var i = 0; i < questions[currentIndex].choices.length; i++) {
    
    var answer = questions[currentIndex].choices[i];
    var btn = document.createElement("button");
    btn.textContent = answer;
    btn.setAttribute("value", answer);
    choicesListEl.append(btn);

    btn.addEventListener("click", selectAnswer);
  }

}

function selectAnswer() {
  if (this.value === questions[currentIndex].correctAnswer) {
    score++;
    localStorage.setItem("score", score);
  }

  if (this.value !== questions[currentIndex].correctAnswer) {
    timeLeft = timeLeft - 10;
  }

  document.querySelector(".choices-list").innerHTML = "";

  currentIndex++;

  quizQuestion();
}