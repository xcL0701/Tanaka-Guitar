// Input
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const gender = document.querySelector("#gender");
const address = document.querySelector("#address");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validasi

var gen = document.forms["form"]["gender"]
var agr = document.forms["form"]["tnc"]

function clearError(){
    for(let i = 0; i<errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    phoneInput.classList.remove("error-border");
    address.classList.remove("error-border");
}

function validEmail(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function validateForm(){
    
    clearError();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Please enter your name";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!validEmail(email.value)){
        errorNodes[1].innerText = "Your E-mail address is invalid";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(phoneInput.value.length < 11){
        errorNodes[2].innerText = "Your phone number is invalid";
        phoneInput.classList.add("error-border");
        errorFlag = true;
    }

    if(gen[0].checked==false && gen[1].checked==false){
        errorNodes[3].innerText = "Please select your gender";
        errorFlag = true;
    }

    if(address.value.length < 6){
        errorNodes[4].innerText = "Please enter your address";
        address.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Registered!";
    }
}