let items = document.getElementById("total-items");
let hours = document.getElementById("hours-worked");
let bottone = document.getElementById("button");

function colliTotali(colli, ore) {
  const result = parseFloat(items.value) / parseFloat(hours.value);
  alert(result);
}

bottone.addEventListener("click", colliTotali);
