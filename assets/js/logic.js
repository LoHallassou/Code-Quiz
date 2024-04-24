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
let questionIndex = 0;

function startQuiz () {

    startScreen.classList.toggle('hide');
    questions.classList.toggle('hide');

    startBtn.addEventListener('click',function countdown() {

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
    
    
   quizQuestion.options.forEach(function(choice){
        let optionButton = document.createElement('button');
        optionButton.setAttribute('class','options')
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


let buttonPressCount = 0

function resultOfChoice(event) {

    buttonPressCount++;
    if (answeredIndex.includes(randomIndex())) {
        randomIndex();
    }
    else {
        answeredIndex.push(randomIndex());
    }

    for (let i=0; i<questionTitles.length; i++) {
    let selectedChoice = event.target.textContent;

    if (correctAnswers.includes(selectedChoice)) {
        choicesEl.innerHTML = ''
        loadQuestions();
    }
    else if (!correctAnswers.includes(selectedChoice)) { 
        choicesEl.innerHTML = '';
        if (answeredIndex.includes(randomIndex()) === false) {
            answeredIndex.push(randomIndex());
        }
        else {
            randomIndex();
        }
        loadQuestions();
    }
    
}

function endQuiz() {
    questions.classList.toggle('hide');
    endScreen.classList.toggle('hide');
}

if (buttonPressCount >= 7) {
    endQuiz();
}
}

