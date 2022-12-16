function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstInput = document.querySelector("#first");
const btnclose = document.querySelectorAll(".close");
const form = document.querySelectorAll(".form");
const submitBtn = document.querySelector(".btn-submit");
const checkboxInput = document.querySelector("#checkbox1");

//regex

const datebirthRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const charRegex = /^[a-zA-Z-\s]+$/;
const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,6}$/;

//messages d'érreurs
const messagesErrors = {
  lastNameMsg: "Le prénom doit comporter au moins deux caractères",
  firstNameMsg: "Le nom doit comporter au moins deux caractères",
  emailMsg: "Veuillez entrer une adresse mail valide",
  birthdateMsg: "Veuillez entrer une date de naissance valide",
  tounamentsMsg: "Veuillez entrer un nombre de tournois",
  locationMsg: "Veuillez séléctionner une ville",
  checkboxMsg: "Veuillez cocher accepter les conditions d'utilisation",
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close event form
btnclose.forEach((btn) => btn.addEventListener("click", closeform));

// function close form
function closeform() {
  modalbg.style.display = "none";
  form.reset();
}

formData[0].addEventListener("input", firstnameValid);
function firstnameValid() {
  if (firstname.value.trim() == "" || firstname.value.length < 3) {
    let firstnameError = document.getElementById("firstname-message");
    firstnameError.innerHTML = messagesErrors.firstNameMsg;
    return false;
  } else if (charRegex.test(firstname.value) == false) {
    let firstnameError = document.getElementById("firstname-message");
    firstnameError.innerHTML = messagesErrors.firstNameMsg;
    return false;
  } else {
    document.getElementById("firstname-message").innerHTML = "";
    return true;
  }
}

formData[1].addEventListener("input", lastnameValid);
function lastnameValid() {
  if (lastname.value.trim() == "" || lastname.value.length < 3) {
    let lastnameError = document.getElementById("lastname-message");
    lastnameError.innerHTML = messagesErrors.lastNameMsg;
    return false;
  } else if (charRegex.test(lastname.value) == false) {
    let lastnameError = document.getElementById("lastname-message");
    lastnameError.innerHTML = messagesErrors.lastNameMsg;
    return false;
  } else {
    document.getElementById("lastname-message").innerHTML = "";
    return true;
  }
}

formData[2].addEventListener("input", emailValid);
function emailValid() {
  if (emailRegex.test(email.value) == false) {
    let emailError = document.getElementById("email-message");
    emailError.innerHTML = messagesErrors.emailMsg;
    return false;
  } else {
    document.getElementById("email-message").innerHTML = "";
    return true;
  }
}
formData[3].addEventListener("input", birthdateValid);
function birthdateValid() {
  if (datebirthRegex.test(birthdate.value) == false) {
    let birthdateError = document.getElementById("birthdate-message");
    birthdateError.innerHTML = messagesErrors.birthdateMsg;

    return false;
  } else {
    document.getElementById("birthdate-message").innerHTML = "";
    return true;
  }
}
formData[4].addEventListener("input", quantityValid);
function quantityValid() {
  if (quantity.value.trim() == "" || quantity.value.length < 1) {
    let quantityError = document.getElementById("quantity-message");
    quantityError.innerHTML = messagesErrors.tounamentsMsg;
    return false;
  } else {
    document.getElementById("quantity-message").innerHTML = "";
    return true;
  }
}

formData[5].addEventListener("input", locationValid);

const citiesLoc = document.querySelectorAll('[name="location"]:checked');
function locationValid() {
  if (citiesLoc.length < 1) {
    let locationError = document.getElementById("location-message");
    locationError.innerHTML = messagesErrors.locationMsg;
}
else{
  document.getElementById("location-message").innerHTML = "";
  return true;
}
}

formData[6].addEventListener("input", checkboxValid);
function checkboxValid(){
  console.log(form.checkboxMsg.checked);
  }


submitBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  if (
    firstnameValid() == true &&  
    lastnameValid() == true &&
    emailValid() == true &&
    birthdateValid() == true &&
    tournamentsValid() == true &&
    locationValid() == true &&
    checkboxValid() == true
  ) {
    confirmation();
  }
  // sinon return false et affiche les messages d'erreurs

}
function confirmation() {
  document.querySelector(".modal-body").style.display = "none";
  document.querySelector(".confirmation").style.display = "block";
}
