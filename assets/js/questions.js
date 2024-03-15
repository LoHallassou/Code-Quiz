let startScreen = document.getElementById('start-screen');
let questions = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

let questionEl = document.getElementById('question-title');
let choicesEl = document.getElementById('choices')



//Arrays of questions and answers
let questionTitles = ['Where can you put JavaScript?', 'Which word is used to define a function in JavaScript?', 'JavaScript uses what kind of interface to access the DOM structure?','Which of these options does NOT require the use of parentheses?','Which of the following is not a valid method for generating output to the screen?','Every valid web page can be represented as a tree. This tree is referred to as the____.','When a function returns a node from the DOM, it is of type______.'];
let choices = [
['1. In the <head> section','2. In the <body> section','3. In an external file','4. All of the above'],
['1. function','2. func','3. def','4. define function'],
['1. CSS3','2. API','3. HTML5','4. IDE'],
['1. console.log','2. prompt','3. innerHTML','4. alert'],
['1. document.write', '2. prompt','3. alert','4. print'],
['1. Javascript','2. API','3. DOM','4. Linux'],
['1. Object','2. Number','3. String','4. Boolean']
];
let correctAnswers = ['4. All of the above','1. function','2. API','3. inner.HTML','1. document.write','3. DOM','1. Object']



//Gaining random index to select questions and corresponding answers
let randomIndex = Math.floor(Math.random() * questionTitles.length);

function loadQuestions() {

    let randomIndex = Math.floor(Math.random() * questionTitles.length);

    let quizQuestions = questionTitles.slice();
    let quizChoices = choices.slice();

    let selectedQuestion = quizQuestions[randomIndex];
    let selectedChoices = quizChoices[randomIndex];
    
    quizQuestions.splice(randomIndex, 1);
    quizChoices.splice(randomIndex, 1);
    
    //Displaying the questions and choices on the page
    questionEl.textContent = selectedQuestion;
    
    selectedChoices.forEach(function(choice){
        let button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', resultOfChoice);
        choicesEl.appendChild(button);

    
    });
    }

//Function to switch to questions when start button is clicked
function switchToQuestions(){
    startScreen.classList.toggle('hide');
    questions.classList.toggle('hide');
    loadQuestions();
}

function endQuiz() {
    questions.classList.toggle('hide');
    endScreen.classList.toggle('hide');
}

let buttonPressCount = 0

function resultOfChoice(event) {

    buttonPressCount++;

    for (let i=0; i<questionTitles.length; i++) {
    let selectedChoice = event.target.textContent;

    if (correctAnswers.includes(selectedChoice)) {
        choicesEl.innerHTML = ''
        loadQuestions();
    }
    else if (!correctAnswers.includes(selectedChoice)) { 
        choicesEl.innerHTML = '';
        loadQuestions();
    }
    
}

if (buttonPressCount >= 7) {
    endQuiz();
}
}

