const buttonCreate = document.getElementById("create");
const buttonDelete = document.getElementById("delete");

buttonCreate.addEventListener("click", function(){
  const name = document.getElementById("name").value;
  const kilometres = parseFloat(document.getElementById("km").value);
  const age = document.getElementById("age").value;
  let check = true;

  text.style.display = "block";
  
  let price;
  let offer = "Biglietto Standard";
  let carriage = parseInt(Math.random() * 10) + 1;
  let code = parseInt(Math.random() * 10000) + 90000;

  if(isNaN(kilometres) || kilometres < 0){
    message = "Valore di kilometri non valido";
    check = false;
    ticket.style.display = "none";
  }

  if(check){
    price = kilometres * 0.21;

    if(age === "minorenne"){
      price *= 0.8;
      offer = "Biglietto Minorenne";
    }

    if(age === "over 65"){
      price *= 0.6;
      offer = "Biglietto Over 65";
    }

    message = "IL TUO BIGLIETTO"
    ticket.style.display = "block";
  }

  console.log(message);

  document.getElementById("message").innerHTML = message;
  document.getElementById("js-name").innerHTML = name;
  document.getElementById("js-offer").innerHTML = offer;
  document.getElementById("js-carriage").innerHTML = carriage;
  document.getElementById("js-code").innerHTML = code;
  document.getElementById("js-price").innerHTML = price;

});
  

buttonDelete.addEventListener("click", function(){
  ticket.style.display = "none";
  text.style.display = "none";
});