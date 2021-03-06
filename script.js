// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
    passwordText.value = generatePassword();

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
    if (passwordCharacters.length === 0) {
        alert("You mush choose at least one type of character");

        generatePassword()
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
