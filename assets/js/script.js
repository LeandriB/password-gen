// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Generates Password
function generatePassword() {
  // Empty string to concatenate randomPassword
  var randomPassword = ""

  var pwLength = window.prompt("How long do you want your password to be? (must be between 8 and 128 characters)");

  while (pwLength < 8 || pwLength > 128 || !Number.isInteger(Number(pwLength))) {
    pwLength = window.prompt("Try Again! Password length must be between 8 and 128!😠" );
  }

  // randomPassword available to help generate password 
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!@#$%^&*()";
  
  var wantsUpper = window.confirm("Do you want uppercase letters in your password?");
  var wantsLower = window.confirm("Do you want lowercase letters in your password?");
  var wantsNumber = window.confirm("Do you want numbers letter in your password?");
  var wantsSpecial = window.confirm("Do you want special characters in your password?");

  // User input validations

  if (wantsUpper) {
    randomPassword = randomPassword + upper;
  }

  if (wantsLower) {
      randomPassword = randomPassword + lower;
  }

  if (wantsNumber) {
      randomPassword = randomPassword + numbers;
  }

  if (wantsSpecial) {
      randomPassword = randomPassword + special;
  }

  if (randomPassword == "") {
    window.alert("You did not pick a valid option. Try again.");
    return "Generate Password Again."
  }
  
  var result = "";
  randomPassword = randomPassword.split('')
  
  // Creates a random password when looping over randomPassword string
  for (var i=0; i < pwLength; i++) {
    result = result + randomPassword[Math.floor(Math.random() * randomPassword.length)];
  }
  // Returns randomized password
  return result;
}

// Copies generated password
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);