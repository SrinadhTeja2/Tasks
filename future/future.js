let ar=[
   
    {
        url:"https://th.bing.com/th/id/R.98de63e760cb19800d62b0be73b0b90c?rik=r0qhufNihi0Ykw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f6%2fb%2f255102.jpg&ehk=MGHENAIyyvFgmWrVtX08tijROP%2fd4ZZcChhhEqfOuUE%3d&risl=&pid=ImgRaw&r=0",
        text:"police"
    },
    {
        url:"https://tse4.mm.bing.net/th/id/OIP.mVfSAYzVetRakNLXh9pa7wHaHa?pid=ImgDet&w=191&h=191&c=7&o=7&rm=3",
        text:"Doctor"
    },
    {
      url:"https://thumbs.dreamstime.com/z/black-male-engineer-working-machine-factory-man-checking-quality-control-condition-service-maintenance-machinery-197923723.jpg",
      text:"Engineer"
    },
     {
        url:"https://storage.googleapis.com/joblist-content/hero-images/03-lawyer.png",
         text:"lawer"
    },
     {
        url:"https://storage.googleapis.com/joblist-content/hero-images/03-lawyer.png",
         text:"lawer"
    }
]
let image=document.getElementById("image");
let para=document.getElementById("para");
let text=document.getElementById("text");
let p=document.getElementById("p");
let count=0;
function btnclicked(){
    if(text.value==""){
        alert("Invalid name.")
        return;
    }
  let timer=  setInterval(function(){
        let random=Math.floor(Math.random()*ar.length-1);
     image.src=ar[random].url;
     para.textContent=ar[random].text;
     count++;
     if(count==50){
        clearInterval(timer);
        count=0;
        p.textContent=text.value+" dream is "+ar[random].text
        text.value="";
     }
    },100);
     
}