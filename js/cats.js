// alert('coucou');

// POUR FAIRE APPARAITRE LE COMPORTEMENT DEMANDE D'ADOPTION

var formulaire = document.getElementById('form1');
var textarea = document.getElementById('textarea');
    document.querySelector('#btnForm1').addEventListener('click', function(){
        formulaire.innerHTML = "Votre demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.";
        formulaire.classList.add('alert', 'alert-success');
    })

var teteDeChat = document.querySelector('#teteDeChat').addEventListener('mouseover', function(){
    this.style.backgroundColor = "#061339";
})

var teteDeChat = document.querySelector('#teteDeChat').addEventListener('mouseout', function(){
    this.style.backgroundColor = "#7885A5";
})