let count=200;
let img=document.getElementById("img");
let para=document.getElementById("para");
function zoomin(){
    if(count<500){
     count+=10;
     img.style.height=count+"px";
     para.textContent="";

}

}
function zoomout(){
    if(count>80){
    count-=10;
    img.style.height=count+"px";
}
}