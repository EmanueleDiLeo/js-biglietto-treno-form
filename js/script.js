function validateForm() {
  const name = document.forms["my-form"]["name"].value;
  const kilometres = parseInt(document.forms["my-form"]["km"].value);
  const age = parseInt(document.forms["my-form"]["km"].value);
  let check = true;
  let message;

  if(isNaN(kilometres) || kilometres < 0){
    message = "Valore di kilometri non valido";
    check = false;
  }
  console.log(age);

  document.getElementById("message").innerHTML = message;
  
}

