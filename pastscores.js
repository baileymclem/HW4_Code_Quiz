

var recentScore = localStorage.getItem("score");
var finalScore = document.getElementById("display-score");
var saveBtnEl = document.getElementById("save-score-btn");

var highScoresEl = document.getElementById("high-scores");
var highScores = [{ name: "", score: "" }];
var initials = document.getElementById("initials-place").value;
var scoreContinerEl = document.getElementById("score-container");
var showScoresEl = document.getElementById("show-scores");


console.log('text box', document.getElementById("initials-place").value);


finalScore.textContent = recentScore;

function saveHighScores(event) {
    event.preventDefault();

    var playerInitials = localStorage.getItem("initials");
    localStorage.setItem("initials", initials);

    highScores.push({ name: playerInitials, score: recentScore });

    console.log("high scores", highScores);
    console.log("playerInitials", playerInitials);
    console.log("initials", initials);

    scoreContinerEl.setAttribute("class", "hide");
    showScoresEl.setAttribute("class", "show");

    // window.location.assign('highscores.html');
}

saveBtnEl.addEventListener("click", saveHighScores);





















// var playerInitials = localStorage.getItem("initials");
// // var initials = localStorage.getItem("initials");
// var highScoresEl = document.getElementById("high-scores");
// var highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];


// console.log("high scores", highScoresArr);

// function saveHighScores(event) {
//     event.preventDefault();
// }
// var highScores =
// {
//     name: playerInitials,
//     score: recentScore,
// };


// highScoresArr.push(highScores);
// // highScoresArr.sort();

// localStorage.setItem('highScoresArr', JSON.stringify(highScoresArr));

// var showScores = saveHighScores();

// highScoresEl.innerHTML = showScores;