// Bank of Arrays to select from
var lcaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var ucaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+',]
var zeroArray = []


//called after button is clicked.
generatePassword = function () {

  // Password length function
  var characterQuantity = function () {
    var howmany = window.prompt("How many Characters would you like? 8 through 128");
    if (8 < howmany && howmany < 128 ) {
      return howmany
    }
    else {
      window.alert('CAN NOT RUN PASSWORD GENERATOR!  We need a value between 8 and 128. Please Try Again!');
      endfunction();
    }
  }

  // Character selectors. takes User Input and selects appropriate global array (lowercase letters, uppercase letters, numbers, and special characters)
  var lCLL = function () {
    var lowlet = window.confirm("Would you like lower case Letters? Okay for YES, Cancel for NO")
    if (lowlet) {
      var value = lcaseLetters
    }
    else { var value = zeroArray }
    return value;
  }
  var uCLL = function () {
    var uplet = window.confirm("Would you like uppercase Letters?  Okay for YES, Cancel for NO")
    if (uplet) {
      var value = ucaseLetters
    }
    else { var value = zeroArray }
    return value;
  }
  var num = function () {
    var nums = window.confirm("Would you like numbers? Okay for YES, Cancel for NO")
    if (nums) {
      var value = numbers
    }
    else { var value = zeroArray }
    return value;
  }
  var specChar = function () {
    var spec = window.confirm("Would you like special characters?  Okay for YES, Cancel for NO")
    if (spec) {
      var value = specialChar
    }
    else { var value = zeroArray }
    return value;
  }

  // Variables for password generation logic
  var charQty = characterQuantity();
  var array1 = lCLL();
  var array2 = uCLL();
  var array3 = num();
  var array4 = specChar();
  // Combine confirmed arrays into a masterArray for character selection
  const masterArray = [...array1, ...array2, ...array3, ...array4]

  // function to stop no selectors entry
  var runPass = function () {
    if (masterArray.length === 0) {
      var noArray = window.alert("CAN NOT RUN PASSWORD GENERATOR! Please select at least one type of characters.  Try again.")
      return ("TRY AGAIN!");
      //tryAgain();
    } else {
      // Logic for Password creation
      var passwrd = []
      for (var i = 0; i < charQty; i++) {
        var passW = masterArray[Math.floor(Math.random() * masterArray.length)];
        passwrd.push(passW);
      }
      return passwrd.join('');
    }  
  }
  var endfunction = function() {
    return;
  }
  var x = runPass();
  return x;  
}

//var tryAgain = function () {
//  generatePassword();
//}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

