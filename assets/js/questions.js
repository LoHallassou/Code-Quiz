let startScreen = document.getElementById('start-screen');
let questions = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

let questionEl = document.getElementById('question-title');
let choicesEl = document.getElementById('choices')



//Arrays of questions and answers
let questionTitles = ['Where can you put JavaScript?', 'Which word is used to define a function in JavaScript?', 'JavaScript uses what kind of interface to access the DOM structure?','Which of these options does NOT require the use of parentheses?','Which of the following is not a valid method for generating output to the screen?','Every valid web page can be represented as a tree. This tree is referred to as the____','When a function returns a node from the DOM, it is of type______'];
let choices = [
['In the <head> section','In the <body> section','In an external file','All of the above'],
['function','func','def','define function'],
['CSS3','API','HTML5','IDE'],
['console.log','prompt','innerHTML','alert'],
['document.write', 'prompt','alert','print'],
['Javascript','API','DOM','Linux'],
['Object','Number','String','Boolean']
];

//Function to switch to questions when start button is clicked
function switchToQuestions(){
    startScreen.classList.toggle('hide');
    questions.classList.toggle('hide');
}

//Gaining random index to select questions and corresponding answers
let randomIndex = Math.floor(Math.random() * questionTitles.length);

let selectedQuestion = questionTitles[randomIndex];
let selectedChoices = choices[randomIndex];

//Displaying the questions and choices on the page
questionEl.textContent = selectedQuestion;
selectedChoices.forEach(function(choice){
    let li = document.createElement('li');
    li.textContent = choice;
    choicesEl.appendChild(li);
});

questionTitles.textContent = 'hi'