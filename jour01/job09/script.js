tri()
function tri(numbers,order){
    if(order=="asc"){
        numbers.sort(function(a, b) {
            return a - b;
          })
          console.log(numbers)
    }else{
        numbers.sort(function(a, b) {
            return b - a;
          });
          console.log(numbers)
    }
}