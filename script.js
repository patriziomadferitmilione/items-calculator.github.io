let items = document.getElementById("total-items");
let hours = document.getElementById("hours-worked");
let bottone = document.getElementById("button");

function colliTotali(colli, ore) {
  const result = parseFloat(items.value) / parseFloat(hours.value);
  alert(result);
  if (result < 150 && result > 130) {
    alert("Dajeeeee");
  } else if (result < 130 && result > 100) {
    alert("Muoviti coglione");
  } else if (result < 100) {
    alert("Datti all'ippica");
  } else {
    alert("Bravo, continua cosí");
  }
}

bottone.addEventListener("click", colliTotali);
