var text=''
document.addEventListener("keydown", function keylogger(event){
   let keylogger=document.getElementById("keylogger")
   
   let doublekey=event.key
   text+=doublekey
   if(text=='ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'){
      let keylogger=document.getElementById("keylogger")
      keylogger.innerHTML="La Plateforme"
   }
})