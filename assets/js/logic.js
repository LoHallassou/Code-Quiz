let startScreen = document.getElementById('start-screen');
let questions = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

let startBtn = document.querySelector('#start')
let timeEl = document.querySelector("#time");
let questionsEl = document.querySelector('#question-title');
let choicesEl = document.querySelector('choices');
let initalsEl = document.querySelector('intials');
let submitBtn = document.querySelector('submit');
let feedbackEl = document.querySelector('feedback');


timeEl.textContent = 7 * questionsChoices.length;
let secondsLeft = 7 * questionsChoices.length;
let timerInterval;
let questionIndex = 0;

function startQuiz () {

    startScreen.classList.toggle('hide');
    questions.classList.toggle('hide');

    startBtn.addEventListener('click',function countdown() {

    //Counts down to 0 and ends quiz when time runs out
        timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        
        if (secondsLeft <= 0) {
            endQuiz();
            }
        }, 1000);
        })
    
    loadQuestions();
}

// //Adding event listener to start button for quiz timer to start
// startBtn.addEventListener('click',function countdown() {


// //Counts down to 0 and ends quiz when time runs out
//     let timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;

//     if (secondsLeft === 0) {
//         clearInterval(timerInterval);
//         endQuiz();
//     }
// }, 1000);

// })

// if (secondsLeft === 0) {
//     endQuiz();
// }

//Gaining random index to select questions and corresponding answers
// function randomIndex() {
//     return Math.floor(Math.random() * questionTitles.length);
// }

function loadQuestions() {

    let quizQuestion = questionsChoices[questionIndex];
    questionEl.textContent = quizQuestion.question;
    
    choicesEl.innerHTML = ''

   quizQuestion.options.forEach(function(choice){
        let optionButton = document.createElement('button');
        optionButton.setAttribute('class','options')
        optionButton.setAttribute('value', choice);

        optionButton.textContent = choice;

        optionButton.addEventListener('click', resultOfChoice);

        choicesEl.appendChild(optionButton);
        
    });
    }

//Function to switch to questions when start button is clicked
// function switchToQuestions(){
//     startScreen.classList.toggle('hide');
//     questions.classList.toggle('hide');
//     loadQuestions();
// }

function resultOfChoice() {

if (this.value === questions[questionIndex].answer) {   
    timerEl.textContent = secondsLeft;
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.fontSize = "24px"
    feedbackEl.style.color = "green";
}

else {
    secondsLeft -= 5;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    feedbackEl.textContent = "Wrong!";
    feedbackEl.style.fontSize = "24px"
    feedbackEl.style.color = "red";
}


feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);
    
  questionIndex++;
   
  if (questionIndex === questionsChoices.length) {
    endQuiz();
  } else {
    loadQuestions();
  }     

}


let buttonPressCount = 0

function endQuiz() {

    questions.classList.toggle('hide');
    endScreen.classList.toggle('hide');

    let fScore = document.getElementById('final-score');
    fScore.textContent = secondsLeft;

    clearInterval(timerInterval);
}




