var startEl = document.querySelector('#start')
var timeEl = document.querySelector("#time");

var secondsLeft = 75;

//Adding event listener to start button for quiz timer to start
startEl.addEventListener('click',function countdown() {
//Counts down to 0 and ends quiz when time runs out
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
}, 1000);
})

