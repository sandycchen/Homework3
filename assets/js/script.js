// Assignment code here


var generatePassword = function(){
  window.alert("Welcome to Password Generator!");
  selectCriteria();
};

var selectCriteria = function() {
  var selectOption = window.prompt("Would you like to include CHARACTER LENGTH and CHARACTER TYPES in the password? Please enter 1 for CHARACTER LENGTH, 2 for CHARACTER TYPES, or 3 for BOTH.");

  selectOption = parseInt(selectOption);
  switch (selectOption) {
    case 1:
      






  }





}

var pwdLength = function() {
  window.prompt
}

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
  //window.prompt
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
  //case (shop)
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  //Math.random
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //confirm function
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  //pick valid option
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
  //for loop
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  //window.alert




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

