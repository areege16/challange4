

// document.getElementById("form").addEventListener("submit",function(event){
//     event.preventDefault();
// }) ;
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    checkInformation();
});
function checkInformation(){
 
    
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var password=document.getElementById("Password");

var fnameError= document.getElementById("fnameError");
var lnameError= document.getElementById("lnameError");
var EmailError= document.getElementById("EmailError");
var PasswordError= document.getElementById("PasswordError");
console.log("fname");


//check first Name
if(fname.value.trim()===""){
   fnameError.textContent="First Name cannot be empty";
   fname.classList.add("errorInput");
}
    else{
    fnameError.textContent = "";
    fname.classList.remove("errorInput");
}
//check last name
if(lname.value.trim()===""){
    lnameError.textContent = "Last Name cannot be empty";
    lname.classList.add("errorInput");
    // fname.nextElementSibling.style.display = "inline";
}else{
    lnameError.textContent = "";
    lname.classList.remove("errorInput")
}
//check email
if(email.value.trim()===""){
    EmailError.textContent = "Looks like this is not an email";
    email.classList.add("errorInput");
    email.placeholder = "email@gmail.com";
}else{
    EmailError.textContent = "";
    email.classList.remove("errorInput")
}
//check password
if(password.value.trim()===""){
    PasswordError.textContent = "Password cannot be empty";
    password.classList.add("errorInput")
}else{
    PasswordError.textContent = "";
    password.classList.remove("errorInput")
}

}




