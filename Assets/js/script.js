// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  
  //Setting initial variables
  var str = ''; 
  var choices = {
    includeUpper: false,
    includeLower: false,
    includeNumbers: false,
    includeSymbols: false,
  };

  var lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //Goes through lowerAlpha and returns values as uppercase
  var upperAlpha = lowerAlpha.map(function(letter) { return letter.toUpperCase(); });
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var symbols = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'];

  //Ensuring proper length before proceeding
  length = parseInt(prompt('Please choose a password length between 8 and 124 characters.'));
  if (isNaN(length) || typeof length != 'number') {
    return ('Please choose a number')
  }
  if (length < 8) {
    return ('Please choose a password at least 8 characters long');
  } 
  if(length > 124) {
    return ('Please choose a password less than 125 characters');
  }  

  //Setting variables for logic

  choices.includeLower = confirm('Would you like to include lowercase letters?');
  choices.includeUpper = confirm('Would you like to include uppercase letters?');

  if (choices.includeLower == false && choices.includeUpper == false) {
    return 'Your password must contain letters'
  }

  choices.includeNumbers = confirm('Would you like to include numbers?')
  choices.includeSymbols = confirm('Would you like to include symbols?')

  //Main logic
  var selectedChoices = [];

  if (choices.includeLower) {
    selectedChoices = selectedChoices.concat(lowerAlpha)
  }
  if (choices.includeUpper) {
    selectedChoices = selectedChoices.concat(upperAlpha)
  }
  if (choices.includeNumbers) {
    selectedChoices = selectedChoices.concat(numbers)
  }
  if (choices.includeSymbols) {
    selectedChoices = selectedChoices.concat(symbols)
  }

  //Building the password
  for (let i = 0; i < length; i++) {
    var random = Math.random() * selectedChoices.length;
    var floored = Math.floor(random);
    str += selectedChoices[floored];
  } 
    
  //Writing the password to the input
  return str 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);