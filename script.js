let questions = [
{ question: "what does . do ", answers:["A. nothing", "B.selects a class", "C.targets a id ","D. chickens "],
correctAnswer: "B.selects a class" },

{ question: "what does # do ", answers:["A. nothing", "B. selects a class", "C.selects a id","D. chickens "],
correctAnswer: "C.selects a id" },

{ question: "java script is considered to be the what of a website?  ", answers:["A.brain", "B. skeleton", "C. skin ","D. cloths  "],
correctAnswer: "A.brain" },

{ question: "what does CSS stand for  ", answers:["A.Cascading Style Sheets", "B. code style sheets", "C. coffe stew salad  ","D. chickens suit styles "],
correctAnswer: "A.Cascading Style Sheets" }

];


let answerButtons = document.querySelector(".answerButtons");
let answers = document.querySelector("h2");
let questionText = document.querySelector("#answer");
let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let currentQuestionIndex = 0
let timeEl = document.querySelector("#timer")
let highEl =document.querySelector("#highScore")
let start = document.getElementById("start")
let correct = 0

let timerInterval;


answerButtons.addEventListener("click", function(){
    currentQuestionIndex++;
    
    renderQuestion();
    console.log (currentQuestionIndex)
    if (currentQuestionIndex === 4 ) {//when question  3 is answered timer stops 
    clearInterval(timerInterval)
    appear.style.display= "none";}
})

function renderQuestion() {   //rotates the questions as answered
    let question = questions[currentQuestionIndex];
    if (currentQuestionIndex === 4 )
    appear.style.display= "none";
    
    
    

    else{
        questionText.innerText = question.question;
        A.innerText = question.answers[0];
        B.innerText = question.answers[1];
        C.innerText = question.answers[2];
        D.innerText = question.answers[3];
    }
    
}

function checkCorrect(el) { //checks if answer is correct
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    console.log(correctAnswer);
    console.log(el.textContent);
    if(el.textContent === correctAnswer){
        correct ++;
        console.log(correct);
        
    }else{
        secondsLeft -=5;
        
    }
  
  
}
start.addEventListener("click", startQuiz)
let secondsLeft = 25;

function startQuiz() { //starts timer when start is clicked 
    appear.style.display="block";
    
    
     timerInterval = setInterval(function() {
        secondsLeft --;
        timeEl.textContent = secondsLeft 

        

        
        if(secondsLeft === 0) {
            // timer stops when seconds left hits 0 
            clearInterval(timerInterval)
            appear.style.display= "none";
           


        
    }
    
}, 1000);
}




