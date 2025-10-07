let input=document.getElementById("input");
function btnclicked(){
    let a=Number(input.value);
    let b=Math.floor((a+4)/5);
    console.log(b);
    if(b==1){
        input.value=b+" car";
        input.style.color="green";

    }
    else{
    input.value=b+" car's";
    input.style.color="green";
    }
}