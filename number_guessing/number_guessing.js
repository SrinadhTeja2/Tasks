let n=Math.floor(Math.random()*100);
console.log(n);
let input=document.getElementById("input");
let para=document.getElementById("para");
let count=0;
function btnclicked(){
   
    if(Number(input.value)==n){
         para.textContent="Congrulations! your guess is right "+count+" attempts";
         para.style.color="green";
    }
    else if(input.value<n){
        para.textContent="your guess is to low..";
        para.style.color="red";
        count++;
    }
    else if(input.value>n){
         para.textContent="your guess is to high..";
         para.style.color="red";
         count++;
    }
}