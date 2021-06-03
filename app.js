let value = document.getElementById("userEntry");

let h2 = document.querySelector("h2");

let span = document.querySelector(".spany");
function checkBtn(Selected) {
  if (Selected == "Calorie") {
    h2.innerHTML = Math.floor(value.value / 4.184) + " Calories";
  } else if (Selected == "KJ") {
    h2.innerHTML = Math.floor(value.value * 4.184) + " KJ";
  } else {
    value.value = "";
  }
}
