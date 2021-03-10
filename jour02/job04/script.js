document.addEventListener("keypress", function keylogger(event){
     if(document.activeElement.tagName=="TEXTAREA"){
        let keylogger=document.getElementById("keylogger")
        let doublekey=event.key
        keylogger.value+=doublekey
     }else if(document.activeElement.tagName=="BODY"){
        let keylogger=document.getElementById("keylogger")
        keylogger.value+=event.key
     }
})