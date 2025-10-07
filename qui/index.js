let arr=[
    {
        url:"https://esemag.com/wp-content/uploads/2022/02/Heavy-Industry-Engineer-Stock-Photo.jpg",
        text:"Engineer"
    },
    {
        url:"https://th.bing.com/th/id/OIP.OAccJ1NQvZykkpnVEDiQ3AHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
        text:"Police"
    },
    {
        url:"https://cdn.pixabay.com/photo/2021/12/12/07/24/doctor-6864472_1280.jpg",
        text:"Doctor"
    },
    {
        url:"https://tse1.mm.bing.net/th/id/OIP.22FmiEw4YeYZlc_yZHWBRgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3 ",
        text:"Lawyer"
    },
    {
        url:" https://miro.medium.com/v2/resize:fit:640/1*hf3KRTOL0SHP7-AIMNW1OQ.jpeg",
        text:"Government Job"
    }
];
let image=document.getElementById("image");
let para=document.getElementById("para");
let text=document.getElementById("input");
let count=0;
function btnclicked(){
    if(text.value==""){
        alert("Invalid Name.");
        return;
    }
   let time= setInterval(function(){
     let random=Math.ceil(Math.random()*(arr.length-1));
   image.src=arr[random].url;
   para.textContent=arr[random].text;
    count++;
    if(count==50){
         clearInterval(time);
         count=0;
         text.textContent="";
    }
    },100)
   
   
}