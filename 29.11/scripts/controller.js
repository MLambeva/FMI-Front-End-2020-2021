function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9+=!?$%^&*()~]+@[-0-9a-zA-Z]+.[-0-9a-zA-Z]+$/;
    if (inputText.match(mailformat)) {      
        return true;
    }
    else {
        return false;
    }
}

function ValidatePassword(inputText) {
    if (inputText.length > 5 && inputText.match(/[A-Z]/) && inputText.match(/[0-9]/) && inputText.match(/[!@#$%^&]/)) {      
        return true;
    }
    else {
        return false;
    }
}

function ValidateData(){
    const email = document.getElementsByName("email");
    const password = document.getElementsByName("password");
    var error = document.getElementById("errors");
    if(!ValidateEmail(email[0].value)){
        error.innerHTML = "Invalid email!";
        return false;
    }
    else if(!ValidatePassword(password[0].value)){
        error.innerHTML = "Invalid password!";
        return false;
    }
    else{
        return true;
    }
}

document.getElementsByClassName("auth-button")[0].addEventListener("click", function(e) {
    e.preventDefault();
    
    if(ValidateData()) {
        alert("Регистрацията е успешна!");
        window.location = "./posts.html"
    }
})