let input=document.getElementById("input");
let para=document.getElementById("para");
function btnclicked(){
    let count=0;
   for(let i=1;i<=input.value;i++){
    if(input.value%i==0){
        count++;
    }
   }
   if(count==2){
    para.textContent="The number is "+input.value+" prime";
    para.style.color="green";
   }
   else{
    para.textContent="The number  "+input.value+" is not a prime";
    para.style.color="red";
   }
}