var recentScore = localStorage.getItem("score");
var finalScore = document.getElementById("display-score");
var saveBtnEl = document.getElementById("save-score-btn");
var scoreContinerEl = document.getElementById("score-container");
var showScoresEl = document.getElementById("show-scores");
var allScoresEl = document.getElementById("all-scores");
// var highScores = [{ name: "", score: "" }];
var highScores =[];


finalScore.textContent = recentScore;

saveBtnEl.addEventListener("click", function () {

    scoreContinerEl.setAttribute("class", "hide");
    showScoresEl.setAttribute("class", "show");

    var initials = document.getElementById("initials-place").value;
    localStorage.setItem("initials", initials);

    highScores.push({ name: initials, score: recentScore });
    localStorage.setItem('highScores', JSON.stringify(highScores));

    console.log("high scores", highScores);

    
    allScoresEl.innerHTML = JSON.parse(localStorage.getItem("highScores"));

});

