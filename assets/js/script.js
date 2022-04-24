// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//TODO: Add function here
function generatePassword() {
  // Empty string to concatenate characters
  var randomPassword = ""
  // Characters available to help generate password 
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!@#$%^&*()";
  
  var wantsUpper = window.confirm("Do you want uppercase letters in your password?");
  var wantsLower = window.confirm("Do you want lowercase letters in your password?");
  var wantsNumber = window.confirm("Do you want numbers letter in your password?");
  var wantsSpecial = window.confirm("Do you want special characters in your password?");

  switch (wantsUpper) {
  case wantsUpper: 
    randomPassword = randomPassword + upper;
    break;
  case wantsLower:
    randomPassword = randomPassword + lower;
    break;
  case wantsNumber:
    randomPassword = randomPassword + numbers;
    break;
  case wantsSpecial:
    randomPassword = randomPassword + special;
    break;
    default:
      return window.alert("You did not pick a valid option. Try again.");
  }
  // Returns randomized password
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
