const name = document.querySelector(".name");
const surname = document.querySelector(".Surname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const warningName = document.querySelector(".warning");
const warningSurname = document.querySelector(".warning2");
const warningEmail = document.querySelector(".warning3");
const warningPassword=document.querySelector(".warning4");


name.onkeydown = function (e) {
    if (e.keyCode === 13) {
        if (!isNaN(name.value) || name.value === 0 || name.value.length <= 3) {
            warningName.classList.remove("d-none");
            warningName.classList.add("d-block");
        }
        else {
            name.value.trim();
            name.value = ""
            warningName.classList.remove("d-block");
            warningName.classList.add("d-none");
        }


    }
}
surname.onkeydown = function (e) {
    if (e.keyCode === 13) {
        if (!isNaN(surname.value) || surname.value === 0 || surname.value.length <= 3) {
            warningSurname.classList.remove("d-none");
            warningSurname.classList.add("d-block");
        }
        else {
            surname.value.trim();
            surname.value = ""
            warningSurname.classList.remove("d-block");
            warningSurname.classList.add("d-none");
        }


    }
}
email.onkeydown = function (e) {
    if (e.keyCode === 13) {
        let index = email.value.indexOf("@");
        let lastIndex = email.value.lastIndexOf(".");

        if (index < 1 || lastIndex < index + 2 || lastIndex + 2 > email.value.length) {
            warningEmail.classList.remove("d-none");
            warningEmail.classList.add("d-block");
        }
        else {
            email.value.trim();
            email.value = ""
            warningEmail.classList.remove("d-block");
            warningEmail.classList.add("d-none");
        }


    }
}
password.onkeydown = function (e) {
    if (e.keyCode === 13) 
    {
        let passwordValue = password.value.trim();
        if (passwordValue.length >= 8 && isNaN(passwordValue) && passwordValue.indexOf("#","@","_","!")!==-1)
         {
            password.value="";
           console.log("valid")
           
        }
        else
        {   
           
           console.log("invalid")
            // warningPassword.classList.remove("d-none");
            // warningPassword.classList.add("d-block");
            
        }
    }
}