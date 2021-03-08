
sommenombrespremiers(11,13)
function isPrime(var1){
    for(let i = 2; i < var1; i++){
        if( var1% i === 0){ 
         return false;
        }
    }
    return true
}

function sommenombrespremiers(var1,var2){
    if(isPrime(var1)==true && isPrime(var2)==true){
        let var3=var1+var2
        console.log(var3) 
    }else{
        console.log(false)
    }
}
