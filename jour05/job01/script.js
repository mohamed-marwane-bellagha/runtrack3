$('#button').click(function(){
    let nom=document.getElementById('inscription')[0].value;
    let prenom=document.getElementById('inscription')[1].value;
    let email=document.getElementById('inscription')[2].value;
    let password=document.getElementById('inscription')[3].value;
    let cpassword=document.getElementById('inscription')[4].value;
    let submit=document.getElementById('inscription')[5].value;
    var specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var number=/[0-9]/;
    let check=true;
    if(nom.length<1|| prenom.length<1|| email.length<1||password.length<1){
        if($('#formvide').length==0){
        $('#inscription').after("<p id='formvide'>Faut entrer des valeurs a un moment donne</p>");
        }
        check=false;
    }else{
        if(nom.length<6){
            if($('#alertinputnom').length==0){
             $('#containernom').append("<p id='alertinputnom'>Nom trop court</p>");
            }
            check=false;
        }else{
            $('#alertinputnom').empty();
            check=true;
        }
        if(prenom.length<6){
            if($('#alertinputprenom').length==0){
            $('#containerprenom').append("<p id='alertinputprenom'>Prenom trop court</p>");
        }
        check=false
        }else{
            $('#alertinputprenom').empty();
            check=true
        }
        if(email.length<6){
            if($('#alertinputmail').length==0){
            $('#containeremail').append("<p id='alertinputmail'>Email trop court</p>");
            check=false
        }
        }else{
            $('#alertinputmail').empty();
            check=true
        }
        if(email.includes('@')==false){
            if($('#alertinputmail').length==0){
            $('#containeremail').append("<p id='alertinputmail'>Email pas au bon format</p>");
            check=false
        }
        }else{
            let emailsplit=email.split('@')
            if(emailsplit[1].includes('.')==false){
                if($('#alertinputmail').length==0){
                    $('#containeremail').append("<p id='alertinputmail'>Email pas au bon format</p>");
                }
                check=false
            }
        }
        if(password.length<6){
            if($('#alertinputpassword').length==0){
            $('#containerpassword').append("<p id='alertinputpassword'>Password trop court</p>");
            }
            check=false
        }else{
            $('#alertinputpassword').empty();
            check=true
        }
        if(number.test(password)==false){
            if($('#alertinputpassword').length==0){
            $('#containerpassword').append("<p id='alertinputpassword'>Votre password doit contenir un chiffre</p>");
            check=false
        }
        }else{
            $('#alertinputpassword').empty();
            check=true
        }
        if(specialchars.test(password)==false){
            if($('#alertinputpassword').length==0){
            $('#containerpassword').append("<p id='alertinputpassword'>Votre password doit contenir un caractere special</p>");
        }
        check=false
        }else{
            $('#alertinputpassword').empty();
            check=true
        }
        if(cpassword!=password){
            if($('#alertinputcpassword').length==0){
            $('#containercpassword').append("<p id='alertinputcpassword'>Password ne correspondent pas</p>");
        }
        check=false
        }else{
            $('#alertinputcpassword').empty();
            check=true
        }        
        if(check){
                $.ajax({
                    type: "POST",
                    url: "post.php",
                    data: {nom: nom, 
                        prenom: prenom, 
                        email: email, 
                        password:password, 
                        submit:submit },
                    datatype:'text',
                }).done(function(data){
                    if(data=='Inscription réussi'){
                        window.location.href='connexion.php'
                    }
                })
        }
        result=document.getElementById('result')
        console.log(result.innerHTML)
        
    }
    })