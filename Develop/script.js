// Assignment code here
var generatePassword = function() {
  characterAmount();


  

  window.prompt ("Would you like uppercase letters")

  window.prompt ("Would you like numbers")

  window.prompt ("Would you like special characters")
}

var characterAmount =function () {
  window.prompt ("How many Characters would you like? 8 through 128")
}

var lowercaseLetter = function() {
  window.prompt ("Would you like lowercase letters?  y for Yes and n for No")
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
