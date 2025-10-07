let height=document.getElementById("height");
let width=document.getElementById("width");
let color=document.getElementById("cr");
let input=document.getElementById("input");
let para=document.getElementById("para");
function btnclicked(){
    let a=Number(height.value);
    let b=Number(width.value);
    let c=color.value;
    let d=input.value;
    
    para.style.height=a+"px";
    para.style.width=b+"px";
    para.textContent=d;
    para.style.color=c;
    para.style.display = "inline-block";
    para.style.border = "2px solid black";
    para.style.backgroundColor = "#f0f0f0";
    para.style.textAlign = "center";
}