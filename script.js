let questions = [
{ question: "what does . do ", answers:["A. nothing", "B.selects a class", "C.targets a id ","D. chickens "],
correctAnswer: "B.selects a class" },

{ question: "what does # do ", answers:["A. nothing", "B. selects a class", "C. selects a id ","D. chickens "],
correctAnswer: "C. selects a id" },

{ question: "java script is considered to be the what of a website?  ", answers:["A. brain", "B. skeleton", "C. skin ","D. cloths  "],
correctAnswer: "A. brain " },

{ question: "what does CSS stand for  ", answers:["A. Cascading Style Sheets", "B. code style sheets", "C. coffe stew salad  ","D. chickens suit styles "],
correctAnswer: "A. Cascading Style Sheets" }

];


let answerButtons = document.querySelector(".answerButtons");
let answers = document.querySelector("h2");
let questionText = document.querySelector("#question");
let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let currentQuestionIndex = 0
let timeEl = document.querySelector("#timer")

let start = document.getElementById("start")
start.addEventListener("click", startQuiz)

answerButtons.addEventListener("click", function(){
    currentQuestionIndex++;
    renderQuestion();
})

function renderQuestion() {   //rotates the questions as answered
    let question = questions[currentQuestionIndex];

    questionText.innerText = question.question;
    A.innerText = question.answers[0];
    B.innerText = question.answers[1];
    C.innerText = question.answers[2];
    D.innerText = question.answers[3];
}

function checkCorrect(el) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    console.log(correctAnswer);
    console.log(el.textContent)
   if(el.textContent === correctAnswer){
   }
   else{
    secondsLeft -=5;
   }
}

let secondsLeft = 100;

function startQuiz() {
    appear.style.display="block";
    disappear.style.display="none";
    
    let timerInterval = setInterval(function() {
        secondsLeft --;
        timeEl.textContent = secondsLeft 
        
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            
            
      
        
    }
    
}, 1000);
}
setTime();


function endQuiz(){
    
    
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


// function checkCorrect(el) {
    // let correctAnswer = questions[currentQuestionIndex].correctAnswer
    // if(el.textContent === correctAnswer){
    //    console.log(correctAnswer);
    //    console.log(el.textContent)
// }
// else{
    secondsLeft -=10;
// }
// }