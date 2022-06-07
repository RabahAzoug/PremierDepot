function dateEtHeur() {
  const d = new Date();
  d.setFullYear(2022);
  document.getElementById("démo").innerHTML = d;
}
window.onload = function () {
  setInterval("dateEtHeur()");
}
//compteur
function cherche_valeur() {
  var valeur = "";
  if (document.cookie) {
    var valeur_depart = document.cookie.indexOf("=") + 1;
    var valeur_fin = document.cookie.indexOf(";");
    if (valeur_fin == -1)
      valeur_fin = document.cookie.length;
    valeur = document.cookie.substring(valeur_depart, valeur_fin);
  }
  return valeur;
}

function fixer_valeur(indicateur, valeur, expire) {
  var maintenant = new Date();
  var temps = new Date(maintenant.getTime() + expire);
  document.cookie = indicateur + "=" + valeur + "; expires=" + temps.toGMTString() + ";";
}

function etat_compteur() {
  var peremption = 1000 * 60 * 60 * 24 * 365;
  var nombre = cherche_valeur();
  var compteur = 0;
  if (nombre != "") compteur = parseInt(nombre);
  if (document.cookie) {
    compteur = compteur + 1;
    fixer_valeur("compteur", compteur, peremption);
  }
  else {
    compteur = 1;
    fixer_valeur("compteur", compteur, peremption);
  }
  return (compteur);
}
var x = etat_compteur();
alert(" BIENVENUE, Vous ête le " + x + " visiteur!"); 
