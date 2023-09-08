const name = document.getElementById("name");
const kilometres = document.getElementById("km");
const age = document.getElementById("age");
let check = true;
let message;

if(isNaN(age) || isNaN(kilometres) || age < 0 || kilometres < 0){
  message = "Valori inseriti non validi";
  check = false;
}