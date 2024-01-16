let startEl = document.querySelector('#start')
let timeEl = document.querySelector("#time");


timeEl.textContent = 75;
let secondsLeft = 75;


//Adding event listener to start button for quiz timer to start
startEl.addEventListener('click',function countdown() {

//Counts down to 0 and ends quiz when time runs out
    let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
}, 1000);

})

function switchToQuestions(){
    startScreen.classList.toggle('hide');
    questions.classList.toggle('hide');
}

