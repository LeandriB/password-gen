// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//TODO: Add function here
function generatePassword() {
  // Empty string to concatenate randomPassword
  var randomPassword = ""

  var pwLength = window.prompt("How long do you want your password to be? (must be between 8 and 128 characters)");

  // randomPassword available to help generate password 
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!@#$%^&*()";
  
  var wantsUpper = window.confirm("Do you want uppercase letters in your password?");
  var wantsLower = window.confirm("Do you want lowercase letters in your password?");
  var wantsNumber = window.confirm("Do you want numbers letter in your password?");
  var wantsSpecial = window.confirm("Do you want special characters in your password?");

  if (wantsUpper) {
    randomPassword = randomPassword + upper;
    console.log(randomPassword)
  }

  if (wantsLower) {
      randomPassword = randomPassword + lower;
      console.log(randomPassword)
  }

  if (wantsNumber) {
      randomPassword = randomPassword + numbers;
      console.log(randomPassword)
  }

  if (wantsSpecial) {
      randomPassword = randomPassword + special;
      console.log(randomPassword)
  }

  if (randomPassword === "") {
      //return "You did not pick a valid option. Try again."
      return window.alert("You did not pick a valid option. Try again.");
      //TODO: Make it prompt user to select again
  }

  var result = "";
  randomPassword = randomPassword.split('')
  console.log(randomPassword);
  
  // Creates a random password when looping over randomPassword string
  for (var i=0; i < pwLength; i++) {
    result = result + randomPassword[Math.floor(Math.random() * randomPassword.length)]; //
    console.log(result)
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
