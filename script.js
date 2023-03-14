// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\' , ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var possibilities = [];

//function to get password options
function generatePassword(){
    var howMany = prompt("How long would you like your password to be?");
    if (howMany > 7 && howMany < 129 ){
    var upperCase = confirm("Do you want to include uppercase letters?");
    if (upperCase) {
      possibilities = possibilities.concat(upperCharacters);
    }
    var lowerCase = confirm("Do you want to include lowercase letters?");
    if (lowerCase) {
      possibilities = possibilities.concat(lowerCharacters);
    }
    var numeric = confirm("Do you want to include number characters?");
    if (numeric) {
      possibilities = possibilities.concat(numericCharacters);
    }
    var special = confirm("Do you want to include special characters?");
    if (special) {
      possibilities = possibilities.concat(specialCharacters);
    }
  }
  else {
    alert('password must be between 8-128 characters');
    generatePassword();
  }
    if (possibilities.length === 0){
      alert('you must choose at least one character type');
      return;
    }

    var generated = '';
    for(var i=0; i < howMany; i++){
     generated += possibilities[Math.floor(Math.random() * possibilities.length)];
   }
   
   return generated;
   };