let timer=document.getElementById("timer");
let seconds=0;
let minutes=0;
let hours=0;
let time;
let is_clicked=false;

function btnstart(){
    if(is_clicked){
    return;
}
is_clicked=true;
  time= setInterval(function(){
       seconds++;
       if(seconds==60){
        minutes++;
        seconds=0;
       }
       if(minutes==60){
        hours++;
        minutes=0;
       }
       let min;
       let sec;
       let hrs;
       if(seconds<10){
        sec="0"+seconds;
       }
       else{
        sec=seconds;
       }
       if(minutes<10){
        min="0"+minutes;
       }
       else{
        min=minutes;
       }
       if(hours<10){
        hrs="0"+hours;
       }
       else{
        hrs=hours
       }
       timer.textContent=hrs+":"+min+":"+sec;
    },1000);
}
function btnreset(){
    is_clicked=false;
    clearInterval(time);
     minutes=0;
     seconds=0;
     hours=0;
     timer.textContent="00:00:00";

}
function btnstop(){
    is_clicked=false;
    clearInterval(time);
}