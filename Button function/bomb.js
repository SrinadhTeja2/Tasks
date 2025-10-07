let timer=document.getElementById("timer");
let img=document.getElementById("img");
let span=document.getElementById("span");
let head=document.getElementById("head");
let count=10;
span.textContent=count;
let time=setInterval(function(){
     count--;
     
      span.textContent=count;
      if(count<=3){
        span.style.color="red";
        
      }
      if(count==0){
        clearInterval(time);
        img.src="https://thumbs.dreamstime.com/b/explosion-cartoon-dynamite-bomb-fire-boom-clouds-smoke-element-dangerous-explosive-detonation-atomic-vector-hand-draw-259268075.jpg "
        img.style.height="300px";
        img.style.width="400px"; 
        head.textContent="Bomb Blasted";
        head.style.color="red";
      }
    
},1000)

