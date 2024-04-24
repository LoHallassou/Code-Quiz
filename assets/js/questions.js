let startScreen = document.getElementById('start-screen');
let questions = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

let questionEl = document.getElementById('question-title');
let choicesEl = document.getElementById('choices')



//Arrays of questions and answers


let answeredIndex = [];

let questionsChoices = [{
    question: 'Where can you put JavaScript?',
    options: ['1. In the <head> section','2. In the <body> section','3. In an external file','4. All of the above'],
    answer: "4. All of the above"
},
{
    question: 'Which word is used to define a function in JavaScript?',
    options: ['1. function','2. func','3. def','4. define function'],
    answer: '1. function'
},
{
    question:'JavaScript uses what kind of interface to access the DOM structure?',
    options: ['1. CSS3','2. API','3. HTML5','4. IDE'],
    answer: '2. API'
},
{
    questions: 'Which of these options does NOT require the use of parentheses?',
    options: ['1. console.log','2. prompt','3. innerHTML','4. alert'],
    answer: '3. inner.HTML'
},
{
    questions: 'Which of the following is not a valid method for generating output to the screen?',
    options: ['1. document.write', '2. prompt','3. alert','4. print'],
    answer: '1. document.write',   
},
{
    questions: 'Every valid web page can be represented as a tree. This tree is referred to as the____.',
    options: ['1. Javascript','2. RAM','3. DOM','4. Linux'],
    answer: '3. DOM',
},
{
    questions: 'When a function returns a node from the DOM, it is of type______.',
    options: ['1. Object','2. Number','3. String','4. Boolean'],
    answer: '1. Object'
}
]

//Gaining random index to select questions and corresponding answers
function randomIndex() {
    return Math.floor(Math.random() * questionTitles.length);
}

function loadQuestions() {

    let quizQuestions = questionTitles.slice();
    let selectedQuestion = quizQuestions[randomIndex()];

    let quizChoices = choices.slice();
    let selectedChoices = quizChoices[randomIndex()];
    
    
    //Displaying the questions and choices on the page
    questionEl.textContent = selectedQuestion;
    
    selectedChoices.forEach(function(choice){
        let button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', resultOfChoice);
        choicesEl.appendChild(button);

        console.log(answeredIndex);
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

if (buttonPressCount >= 7) {
    endQuiz();
}
}

