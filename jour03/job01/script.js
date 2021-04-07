$('#button').click(function() {
$('#button').after("<p class='paragraph'>le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</p>")    
})
$('#hide').click(function(){
$('.paragraph').remove()
})