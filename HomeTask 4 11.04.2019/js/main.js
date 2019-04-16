 [...document.querySelectorAll(".imageList li")].map(li =>{
     li.onclick=function(){
         document.querySelector("li.active").classList.remove("active")
         this.classList.add("active")
         document.querySelector(".main-photo img").src=this.firstElementChild.src
         document.querySelector(".main-photo").classList.remove("d-none");
         document.querySelector(".imageList").classList.remove("d-flex");
         document.querySelector(".imageList").classList.add("d-none")


     }
 });

 let closeBtn= document.querySelector(".close")
 closeBtn.onclick=function(){
     this.classList.remove("d-block")
    document.querySelector(".main-photo").classList.add("d-none");
    document.querySelector(".imageList").classList.remove("d-none")
    document.querySelector(".imageList").classList.add("flex")


 }


 document.querySelector(".left").onclick=function()
 {
     let activeLi=  document.querySelector(".imageList li.active");

     if(activeLi.previousElementSibling)
     {
        activeLi.classList.remove("active");
        activeLi.previousElementSibling.classList.add("active");
        document.querySelector(".main-photo img").src = activeLi.previousElementSibling.firstElementChild.src;
       
     }
     else
     {   activeLi.classList.remove("active");
         document.querySelector(".imageList li:last-child").classList.add("active");
         document.querySelector(".main-photo img").src = document.querySelector(".imageList li:last-child").firstElementChild.src;
     }
 }

 document.querySelector(".right").onclick=function()
 {
     let activeLi=  document.querySelector(".imageList li.active")
     if(activeLi.nextElementSibling)
     {
        activeLi.classList.remove("active");
        activeLi.nextElementSibling.classList.add("active");
        document.querySelector(".main-photo img").src=activeLi.nextElementSibling.firstElementChild.src;
       
     }
     else
     {       document.querySelector("li.active").classList.remove("active")
         document.querySelector(".imageList li:first-child").classList.add("active")
         document.querySelector(".main-photo img").src= document.querySelector(".imageList li:first-child").firstElementChild.src;
         
     }
 }