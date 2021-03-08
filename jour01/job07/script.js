jourtravaille("03/07/2021   ")
function jourtravaille(date){
    date=new Date(date)
    var monthname=["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
    var jourferie=["01/01/2020","04/13/2020","05/01/2020","05/08/2020","05/21/2020","06/01/2020","07/14/2020","08/15/2020","11/01/2020","11/11/2020","12/25/2020"]
    for(i=0;i<jourferie.length;i++){
        var datejourferie=new Date(jourferie[i])
        if(date.getTime()=== datejourferie.getTime()){
            var monthvalue=date.getMonth()
            console.log("Non, "+date.getDate()+" "+monthname[monthvalue]+" "+date.getFullYear()+" est un jour ferie")
            return 
        }
    }
    if(date.getDay()==0 || date.getDay()==6){
        var monthvalue=date.getMonth()
        console.log("Non, "+date.getDate()+" "+monthname[monthvalue]+" "+date.getFullYear()+" est un weekend")
    }else{
        var monthvalue=date.getMonth()
        console.log("Oui, "+date.getDate()+" "+monthname[monthvalue]+" "+date.getFullYear()+" est un jour travaille")
    }
    
}
