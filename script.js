// Test heure en live :

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-112025576-2');




let name = prompt("Veuillez entrer votre nom / pseudo", "Invité");
if (!name) {
name = "Anonyme 🕵️"
}
let ligne1Statut = "Partagez ce lien à fond ! \n"
let ligne2Statut = "bit.ly/2049-jeu"
let statut = ligne1Statut + ligne2Statut
alert("⚠Le site est en développement. \n Merci de votre patience et de votre fidélité !⚠")
alert(statut)
swal("Bravo !", "Tu as entré le bon mot de passe.", "success")
