let questions = [
    {
        question:"what is js?",
        options:["java","python","oracle","javascript"],
        correct_option:"javascript"
    },
    {
        question:"what is css?",
        options:["java","python","cascading style sheet","javascript"],
        correct_option:"cascading style sheet"
    },
    {
        question:"what is Html?",
        options:["html","python","oracle","javascript"],
        correct_option:"html"
    },
    {
        question:"what is js?",
        options:["java","javascript","oracle","none of the above"],
        correct_option:"javascript"
    },
]


let instructionContainer = document.getElementById("instruction-container");
let questionContainer = document.getElementById("question-container");
let resultContainer = document.getElementById("result-container");
let startBtn = document.getElementById("startBtn");
let question = document.getElementById("question");
let options = document.getElementsByClassName("option");
let result = document.getElementById("result");

let questionCount = 0;
let marks = 0;

instructionContainer.style.display = "block";
questionContainer.style.display = "none";
resultContainer.style.display = "none";

startBtn.onclick = function(){
    console.log(questionCount == questions.length)
    if(questionCount==questions.length){
        instructionContainer.style.display = "none";
        questionContainer.style.display = "none";
        resultContainer.style.display = "block";
        startBtn.textContent = "Reset"
        result.textContent="marks: "+marks;
        return;
    }
    instructionContainer.style.display = "none";
    questionContainer.style.display = "block";
    resultContainer.style.display = "none";
    startBtn.textContent = "next";
    question.textContent = questions[questionCount].question;

    for(let i=0;i<4;i++){
        options[i].textContent = questions[questionCount].options[i];
        options[i].style.backgroundColor = "white";
        options[i].disabled = false;
    }
    questionCount++;
}

for(let option of options){
    option.onclick=function(){
        if(option.textContent == questions[questionCount-1].correct_option){
            option.style.backgroundColor = "green";
            marks+=2;
        }else{
            option.style.backgroundColor = "red";
            for(let option of options){
                if(option.textContent == questions[questionCount-1].correct_option){
                    option.style.backgroundColor = "green";
                }
            }
            marks-=1;
        }
        for(let i of options){
            i.disabled = true;
        }
}
}