let form = document.querySelector("form");

let userInfo = {};

let errorMessage = {};


function displayError(name){
    let ele = form.elements[name];
    ele.nextElementSibling.innerText = errorMessage[name];
    ele.parentElement.classList.add('error');
}

function displaySuccess(name){
    let ele = form.elements[name];
    ele.nextElementSibling.innerText = "";
    errorMessage[name] = "";
    ele.parentElement.classList.remove('error');
    ele.parentElement.classList.add('success');

}

function handleSubmit(event){
   event.preventDefault();
   let elements = event.target.elements;

   const username = elements.username.value;
   const name = elements.name.value;
   const email = elements.email.value;
   const phone = elements.phone.value;
   const password = elements.password.value;
   const passwordCheck = elements["password-check"].value;


   // Username can't be less than 4 characters
   if(username.length < 4){
    errorMessage.username = "Username can't be less than 4 characters" ;
    displayError("username");
    } else {
        displaySuccess("username");
    }
    // Name can't be numbers

    if(!isNaN(name)){
        errorMessage.name = "Name can't be numbers" ;
        displayError("name");
        } else {
          displaySuccess("name");
    }
    
    // Email must be at least 6 characters
    // Email must contain the symbol `@`
    if(!email.includes('@')) {
        errorMessage.email = "Email must contain the symbol `@`";
        displayError("email");
        } else if(email.length < 6){
        errorMessage.email = "Email must be at least 6 characters" ; 
        displayError("email");
        } else {   
          displaySuccess("email");
    }

    // Length of phone number can't be less than 7
    // Phone numbers can only be a number

    if(isNaN(phone)) {
        errorMessage.phone = "Phone numbers can only be a number";
        displayError("phone");
        } else if(phone.length < 7){
        errorMessage.phone = "Length of phone number can't be less than 7" ; 
        displayError("phone");
        } else {   
          displaySuccess("phone");
    }
    // Length of phone number can't be less than 7
    // Password and confirm password must be same.
    if(password !== passwordCheck) {
        errorMessage.phone = "Password and confirm password must be same.";
        displayError("password");
        displayError("password-check");
        } else {   
          displaySuccess("password");
          displaySuccess("password-check");
    }
  // console.log({username, name, email, phone, password, passwordCheck });
}
form.addEventListener("submit", handleSubmit);

