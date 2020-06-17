//Rounak
let username = prompt("Enter your username");
checkUserName(username);
let email = prompt("Enter your email");
checkEmail(email);
let password = prompt("Enter your password");
checkPassword(password);
// Progression 1 
function checkUserName(username) {
    //let username = document.getElementById("usertext");
    //console.log(username);
    const usernamepattern = /^[a-z A-Z]{8,15}$/;
    if (usernamepattern.test(username)) return true;
    else return false;

}

// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(email) {
    //const emailPattern = /^[A-Za-z,._]{3,}@[A-Za -z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const emailPattern = /^[a-zA-Z0-9,._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(email)) console.log("Passed");
    else console.log("Failed");
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(password) {
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    if (passwordPattern.test(password)) console.log("Password Passed");
    else console.log("Password Failed");
}