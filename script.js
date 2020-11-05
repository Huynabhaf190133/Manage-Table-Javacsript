function exercise2() {
  var option = "";
  for (var i = 0; i < 3; i++) {
    option += "<option>" + i + "</option>";
  }
  document.getElementById("exchange").innerHTML =
    "<select id='drop'>" + option + "</select>";
}
function exercise3() {
  if(document.getElementById("input-value").value.trim()!="")
  if (dropdown === undefined) {
    exercise2();
  }
  var dropdown = document.getElementById("drop");
  var option =
    "<option>" + document.getElementById("input-value").value + "</option>";
  dropdown.innerHTML += option;
  return;
}
document.getElementById("but").addEventListener("click", exercise3);
