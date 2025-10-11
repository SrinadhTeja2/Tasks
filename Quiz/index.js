let Qstpaper = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<href>",
      "<a>",
      "<url>"
    ],
    correct: "<a>"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<line>"
    ],
    correct: "<br>"
  },
  {
    question: "Which property is used to change the text color in CSS?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground-color"
    ],
    correct: "color"
  },
  {
    question: "How do you select an element with the ID 'header' in CSS?",
    options: [
      "#header",
      ".header",
      "header",
      "*header"
    ],
    correct: "#header"
  },
  {
    question: "Which CSS property controls the size of text?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "size"
    ],
    correct: "font-size"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "var",
      "int",
      "string",
      "declare"
    ],
    correct: "var"
  },
  {
    question: "What will typeof null return in JavaScript?",
    options: [
      "null",
      "object",
      "undefined",
      "boolean"
    ],
    correct: "object"
  },
  {
    question: "Which method is used to write content into the HTML document using JavaScript?",
    options: [
      "console.log()",
      "document.write()",
      "window.alert()",
      "innerHTML()"
    ],
    correct: "document.write()"
  },
  {
    question: "What does NaN stand for in JavaScript?",
    options: [
      "Not a Number",
      "Null and None",
      "Name as Number",
      "Negative and Null"
    ],
    correct: "Not a Number"
  }
];

let instructions=document.getElementById("instructions");
let Questions=document.getElementById("Questions");
let result=document.getElementById("result");
let btn=document.getElementById("btn");
let que=document.getElementById("que");
let opt=document.getElementsByClassName("opt");
let timer=document.getElementById("timer");
let res=document.getElementById("res");

let questioncount = 0;
let is_time = false;
let min = 10;
let sec = 60;
let time;
let marks = 0;

instructions.style.display = "block";
Questions.style.display = "none";
result.style.display = "none";
timer.style.display = "none";

btn.onclick = function() {
   
    if (btn.textContent == "Reset") {
        instructions.style.display = "block";
        Questions.style.display = "none";
        result.style.display = "none";
        timer.style.display = "none";
        btn.textContent = "Start";
        marks = 0;
        min = 10;
        sec = 60;
        questioncount = 0;
        clearInterval(time);
        is_time = false;
        return;
    }

    
    if (questioncount == Qstpaper.length) {
        instructions.style.display = "none";
        Questions.style.display = "none";
        result.style.display = "block";
        timer.style.display = "none";
        btn.textContent = "Reset";
        res.textContent = "Result: " + (marks > 0 ? marks : 0);
        clearInterval(time);
        return;
    }

    if (!is_time) {
        is_time = true;
        time = setInterval(function() {
            sec--;
            if (sec === 0) {
                if (min === 0) {
                    clearInterval(time);
                    instructions.style.display = "none";
                    Questions.style.display = "none";
                    result.style.display = "block";
                    timer.style.display = "none";
                    btn.textContent = "Reset";
                    res.textContent = "Result: " + (marks > 0 ? marks : 0);
                    return;
                }
                min--;
                sec = 59;
            }
            timer.textContent = "Timer: " + min + ":" + (sec < 10 ? "0" + sec : sec);
        }, 1000);
    }


    timer.style.display = "block";
    instructions.style.display = "none";
    Questions.style.display = "block";
    result.style.display = "none";
    btn.textContent = "Next";

    que.textContent = Qstpaper[questioncount].question;
    for (let i = 0; i < 4; i++) {
        opt[i].textContent = Qstpaper[questioncount].options[i];
        opt[i].style.backgroundColor = "white";
        opt[i].disabled = false;
    }
    questioncount++;
}


for (let i of opt) {
    i.onclick = function() {
        if (i.textContent == Qstpaper[questioncount - 1].correct) {
            i.style.backgroundColor = "green";
            marks += 2;
        } else {
            i.style.backgroundColor = "red";
            marks--;
            for (let j of opt) {
                if (j.textContent == Qstpaper[questioncount - 1].correct) {
                    j.style.backgroundColor = "green";
                }
            }
        }
        for (let j of opt) {
            j.disabled = true;
        }
    }
}
