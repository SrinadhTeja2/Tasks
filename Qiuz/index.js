let questions = [
    {
        question:"what is js?",
        answers:[
            {
                text:"java",correct:false},
                {text:"python",correct:false},
                {text:"oracle",correct:false},
                {text:"javascript",correct:true},  
        ]
       
    },  
    {
        question:"what is css?",
        answers:[
            {
                text:"cascading style sheet",correct:true},
                {text:"style sheet",correct:false},
                {text:"styling language",correct:false},
                {text:"javascript language",correct:true}
            
        ]
    },
    {
        question:"what is Html?",
       answers:[
            {
                text:"java",correct:false},
                {text:"python",correct:false},
                {text:"html",correct:true},
                {text:"javascript",correct:true}
            
        ]
    },
    {
        question:"what is js?",
        answers:[
            {
                text:"java",correct:false},
                {text:"python",correct:false},
                {text:"oracle",correct:false},
                {text:"javascript",correct:true}   
        ]
    },
];
let question=document.getElementById("question");
let answer=document.getElementById("answer");
let next=document.getElementById("next");

let score=0;
let currentindexquestion=0;
function startquiz(){
    score=0;
    currentquestion=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion =questions[currentindexquestion];
    let currentnumber=currentindexquestion+1;
    

}