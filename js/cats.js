// alert('coucou');

// POUR FAIRE APPARAITRE LE COMPORTEMENT DEMANDE D'ADOPTION

var formulaire = document.getElementById('form1');
var textarea = document.getElementById('textarea');
// if (isNaN(textarea)){
    document.querySelector('#btnForm1').addEventListener('click', function(){
        formulaire.innerHTML = "Votre demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.";
        formulaire.classList.add('alert', 'alert-success');
    })
// }else {
//     document.querySelector('#btnForm1').addEventListener('click', function(){
//         formulaire.innerHTML = "Votre demande n'a pas été prise en compte ! Vous devez remplir le champ de formulaire.";
//         formulaire.classList.add('alert', 'alert-danger');
//     })
// }
// POUR FAIRE CHANGER LA COULEUR DU CHAT

var teteDeChat = document.querySelector('#teteDeChat').addEventListener('mouseover', function(){
    this.style.backgroundColor = "#061339";
})

var teteDeChat = document.querySelector('#teteDeChat').addEventListener('mouseout', function(){
    this.style.backgroundColor = "#7885A5";
})