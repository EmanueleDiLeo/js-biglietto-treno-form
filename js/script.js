const buttonCreate = document.getElementById("create")

buttonCreate.addEventListener("click", function(){

  let name = document.getElementById("name")
  let kilometres = parseInt(document.getElementById("km"));
  let age = document.getElementById("age");
  let check = true;
  let message;
  let price;

  if(isNaN(kilometres) || kilometres < 0){
    message = "Valore di kilometri non valido";
    check = false;
  }

  if(check){
    price = kilometres * 0.21;

    if(age === "Minorenne"){
      price*= 0.8;
    }

    if(age === "Over 65"){
      price*= 0.8;
    }
    
    message = "IL TUO BIGLIETTO"
    console.log(price);
  }

  document.getElementById("message").innerHTML = message;

});
  


