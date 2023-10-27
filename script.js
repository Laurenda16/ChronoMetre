//les variables sont on abesoin

let sp, btn_start, btn_stop, t, ms, s, mn, h;
//fonction pour initialiser les variables quand la page se charge
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t;
  ms = 0;
  s = 0;
  mn = 0;
  h = 0;
};
//mettre en place le compteur
function update_chrono() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }
  //insertion des valeurs dans les span[] permet de selectionner le premier span
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
//mettre en place la fonction du bouton start

function start() {
  //executer la function de update_chrono
  //toutes les 100 ms
  t = setInterval(update_chrono, 100);
  btn_start.disabled = true;
}

function stop() {
  clearInterval(t); //suppression de l'interval t que nous avions creer
  btn_start.disabled = false;
}
//
function reset() {
  clearInterval(t); //suppression de l'interval t que nous avions creer
  btn_start.disabled = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
  //inserer de nouvelles valeurs
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
