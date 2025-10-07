let ar=[
    {
        url:"https://media.assettype.com/freepressjournal/2023-11/3995a50d-c922-4f43-bf0a-004a65b11367/GL_lead_freepik_nov_19.jpg",
        text:"Lower"
    },
    {
        url:"https://c8.alamy.com/comp/2G6H3CM/a-happy-positive-boy-and-a-cute-smiling-girl-hugging-cartoon-style-illustration-brother-and-sister-drawing-2G6H3CM.jpg",
        text:"Brother&Sister"
    },
    {
        url:"https://img.freepik.com/premium-vector/couple-holding-hands-vector-illustration_101266-28389.jpg?w=2000",
        text:"Wife&Husband"
    }
   
];
let count=0;
let image=document.getElementById("image");
let para=document.getElementById("para");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
function btnclicked(){
    if(input1.value==""||input2.value==""){
        alert("Invalid userName");
        return;
    }
    let time=setInterval(function(){
        let random=Math.floor(Math.random()*ar.length);
        image.src=ar[random].url;
        para.textContent=ar[random].text;
        count++;
        if(count==80){
        clearInterval(time);
        count=0;
        input1.value="";
        input2.value="";
        }
    },100)
}