let sec=60;
let min=10;
let timer;
let tenmin=document.getElementById("tenmin");
let twenmin=document.getElementById("twenmin");
function btnclicked(){
 timer=setInterval(function(){
       sec--;
       let seconds;
       let minutes;
       if(sec==0){
           min--;
           
        sec=60;
       }
       if(min<0){
        clearInterval(timer);
        
         tenmin.textContent="00:00";
         return;
       }
       if(sec<10){
           seconds="0"+sec;
       }
       else{
        seconds=sec;
       }
       if(min<10){
        minutes="0"+min;
       }
       else{
        minutes=min;
       }
       tenmin.textContent=minutes+":"+seconds;
},1000);
}


let seco=60;
let mini=20;
let time;
function btnstart(){
 time=setInterval(function(){
       seco--;
       let seconds;
       let minutes;
       if(seco==0){
           mini--;
           
        seco=60;
       }
       if(mini<0){
        clearInterval(time);
        
         twenmin.textContent="00:00";
         return;
       }
       if(seco<10){
           seconds="0"+seco;
       }
       else{
        seconds=seco;
       }
       if(mini<10){
        minutes="0"+mini;
       }
       else{
        minutes=mini;
       }
       twenmin.textContent=minutes+":"+seconds;
},1000);
}