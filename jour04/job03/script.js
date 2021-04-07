$('document').ready(function(){
    let arr=[];
    $.ajax({
        url:'pokemon.json',
        type:'GET',
        datatype:'json',
        success:function(data){
            for (var i = 0; i != data.length; i++){
                for (var x = 0; x != data[i]['type'].length; x++)  
                    arr.push(data[i]['type'][x]) 
            }
            // console.log(data)
            // arr.push(data)
            // if(data==arr){
            //     console.log('caca')
            // }
            // console.log(data)
            // console.log(data[0]);
        }
    })
    //console.log(arr);
   // console.log(arr.length)
    console.log(arr)

    // let type=[]
    // for(let i=0;i<arr.length;i++){
    //     type.push(arr[i])
    // }
    
})