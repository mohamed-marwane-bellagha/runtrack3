
window.addEventListener("scroll",function scroll(){
   console.log(window.scrollY)
   if(window.scrollY>3000){
      document.getElementsByTagName("footer")[0].style.backgroundColor="#FFDAB9"
   }else if(window.scrollY>2500){
      document.getElementsByTagName("footer")[0].style.backgroundColor="#FFE4B5"
   }else if(window.scrollY>2000){
      document.getElementsByTagName("footer")[0].style.backgroundColor="#FFEFD5"
   }else if(window.scrollY>1500){
      document.getElementsByTagName("footer")[0].style.backgroundColor="#FAFAD2"
   }else if(window.scrollY>1000){
      document.getElementsByTagName("footer")[0].style.backgroundColor="#FFFACD"
   }else if(window.scrollY>500){
      document.getElementsByTagName("footer")[0].style.backgroundColor="#FFFF00"
   }
})