let test='{"name": "La Plateforme_", "address": "8 rue dhozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}'
jsonValueKey(test,"caca")

function jsonValueKey(str,key) {
  try
{
var json = JSON.parse(str);
}
catch(e)
{
 alert('invalid json');
 return
}
if(json.hasOwnProperty(key)){
  $("body").append(json[key])
}else{
  $("body").append(key+" n'est pas une cle existante dans le json")
}
console.log(json)
//  console.log(e) 
}