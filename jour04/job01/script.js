$("#button").click(function () {
    $.ajax({
      url:'expression.txt',
      type:'GET',
      datatype:'text'
    })
    .done(function(msg){
        $("#button").after("<p>"+msg+"</p>")
    })}

})