let mode=document.getElementById("heading");
let btn=document.getElementById("btn");
let card=document.getElementById("card");
let is_light=true;
function btnclicked(){
    if(is_light){
        is_light=false;
         btn.textContent="light Mode";
         mode.textContent="Dark Mode";
         mode.style.color="white";
         card.style.backgroundColor="black";
    }
    else{
        is_light=true;
         btn.textContent="Dark Mode";
         mode.textContent="Light Mode";
         mode.style.color="black";
         card.style.backgroundColor="white";
    }

}