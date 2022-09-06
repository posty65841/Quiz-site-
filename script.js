let questions = [
{ question: "what does . mean ", answers:["A. nothing", "B.selects a class", "C.targets a id ","D. chickens "],
correctAnswer: "B.selects a class" },

{ question: "what does # mean ", answers:["A. nothing", "B.selects a class", "C.selects a id ","D. chickens "],
correctAnswer: "C.selects a id" },

{ question: "java script is considered to be the what of a website?  ", answers:["A. brain", "B.skeleton", "C.skin ","D. cloths  "],
correctAnswer: "A. brain " },

{ question: "what does CSS stand for  ", answers:["A. Cascading Style Sheets", "B.code style sheets", "C. coffe stew salad  ","D. chickens suit styles "],
correctAnswer: "A.Cascading Style Sheets" }

];


let answerButtons = document.querySelector(".answerButtons");
let answers = document.querySelector("h2");
let questionText = document.querySelector("#question");
let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let currentQuestionIndex = 0

answerButtons.addEventListener("click", function(){
    currentQuestionIndex++;
    renderQuestion();
})

function renderQuestion() {
    let question = questions[currentQuestionIndex];

    questionText.innerText = question.question;
    A.innerText = question.answers[0];
    B.innerText = question.answers[1];
    // c, d...
    C.innerText = question.answers[2];
    D.innerText = question.answers[3];
}

function checkCorrect(el) {
   
}



 // el
    // var question = questions[currentQuestionIndex];
    // compare el.innerText against question.correctAnswer
    // if true...
        // add to the score/timer
    // else...
        // subtract from timer
    // update currentQuestionIndex
    // renderQuestion