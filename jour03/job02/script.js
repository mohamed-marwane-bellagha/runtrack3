let bonordre=document.getElementById('melangees').querySelectorAll(".img")
let array = [];

$('#button').click(function() {
     var parent = $("#melangees");
    var divs = parent.children();
    for(let i=0;i<divs.length;i++){
        console.log(divs[0])
    }
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }});

$('img').click(function(event){
    $('#rangees').append($('#'+event.target.id))
    let ordre=document.getElementById("rangees").querySelectorAll(".img")
    array.push( $('#'+event.target.id).attr('src').match(/[0-9]+/g)[0])_
    for (i = 0; i != array.length && parseInt(array[i]) < parseInt(array[i + 1]); i++);
    if (array.length == 6 && i == 5)
        console.log("bravo c'est gagné");
    else if (array.length == 6 && i != 5)
        console.log("t'es nul");

})