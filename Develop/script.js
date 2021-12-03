 // Assignment code here
 var lcaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var ucaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
 var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
 var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', ]
 var zeroArray = []



 // Password length selection function
 var characterQuantity = function(){
    var howmany = window.prompt("How many Characters would you like? 8 through 128")
    if (8 < howmany < 128) {
      value = parseInt(howmany)
      return value;
    } else { 
      characterQuantity
    }
  }

// Character selectors. takes User Input and selects appropriate global array (lowercase letters, uppercase letters, numbers, and special characters)
  var lCLL = function () {
    var lowlet = window.confirm("Would you like lower case Letters?")
    if (lowlet) {
      var value = lcaseLetters
    }
    else {var value = zeroArray}
    return value;
  }
  var uCLL = function () {
    var uplet = window.confirm("Would you like uppercase Letters?")
    if (uplet) {
      var value = ucaseLetters
    }
    else {var value = zeroArray}
    return value;
  }
  var num = function () {
    var nums = window.confirm("Would you like numbers?")
    if (nums) {
      var value = numbers
    }
    else {var value = zeroArray}
    return value;
  }
  var specChar = function () {
    var spec = window.confirm("Would you like lower Owasp approved special characters?")
    if (spec) {
      var value = specialChar
    }
    else {var value = zeroArray}
    return value;
  }
 
  var charQty = characterQuantity();
  var array1 = lCLL();
  var array2 = uCLL();
  var array3 = num();
  var array4 = specChar();
  // Combine selected Arrays into a masterArray for character selection
  const masterArray = [...array1, ...array2, ...array3, ...array4]

// console logs for testing purposes to be removed
console.log(masterArray)
console.log(charQty) 
//console.log(masterArray[Math.floor(Math.random()* masterArray.length)])

var password = []

for (var i = 0; i < charQty; i++) {
  var passW = masterArray[Math.floor(Math.random()* masterArray.length)];
  password.push(passW);
  }

console.log(password.join(''))




 //var generatePassword = function () {}

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

