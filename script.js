// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

let numbers = "123456789".split("")
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
let upperCase = "ABCDEFGHIJKLMOPQRSTUVWXZ".split("")
let specialCharacters = "!@#$%^&*()_+?{}><:[]".split("")
let passwordCharacters = [];

function generatePassword() {
    let length = prompt("How many characters do you want your password to contain?");
    if (length < 8 || length > 128) {
        alert("Password must contain between 8-128 characters")

    }
    if (confirm("Do you want to include lowercase letters?")) {
        passwordCharacters = passwordCharacters.concat(lowerCase);
    }
    if (confirm("Do you want to include uppercase letters?")) {
        passwordCharacters = passwordCharacters.concat(upperCase);
    }
    if (confirm("Do you want to include numeric characters?")) {
        passwordCharacters = passwordCharacters.concat(numbers);
    }
    if (confirm("Do you want to include special characters?")) {
        passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    if (upperCase === false && lowerCase === false && specialCharacters === false && numbers === false) {
        alert("You must choose at least one type of character");

    }

    let password = "";

    for (let i = 0; i < length; ++i) {
        let random = Math.floor(Math.random() * Math.floor(passwordCharacters.length));
        password += passwordCharacters[random];

        console.log(password)
    }

    return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
