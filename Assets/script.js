// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  
//Setting initial variables
var str = '';
var final = '';
var choice1 = false
var choice2 = false
var choice3 = false
var choice4 = false
  

//Options of password choices
var options = 
  {
    lower: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    uplow: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    lownum: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'],
    lowsym: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    lownumsym: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    upper: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    upnum: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'],
    upsym: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    uplownum: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'],
    uplowsym: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    upnumsym: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    all: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"']
  }
  
//Ensuring proper length before proceeding
length = prompt('Please choose a password length between 8 and 124 characters.');

  if (length < 8) {
    return ('Please choose a password at least 8 characters long');
  } else if(length > 124) {
    return ('Please choose a password less than 125 characters');
  }  


//Setting variables for logic
var choice1 = confirm('Would you like to include lowercase letters?');
var choice2 = confirm('Would you like to include uppercase letters?');

if (choice1 == false && choice2 == false) {
  return 'Your password must contain letters'
}

var choice3 = confirm('Would you like to include numbers?')
var choice4 = confirm('Would you like to include symbols?')

//Main logic
if (choice1 == true && choice2 == true && choice3 == true && choice4 == true) {
  final = options.all
} else if (choice1 == true && choice2 == false && choice3 == false && choice4 == false) {
  final = options.lower
} else if (choice1 == false && choice2 == true && choice3 == false && choice4 == false) {
  final = options.upper 
} else if (choice1 == false && choice2 == true && choice3 == true && choice4 == true) {
  final = options.upnumsym  
} else if (choice1 == true && choice2 == false && choice3 == true && choice4 == true) {
  final = options.lownumsym  
} else if (choice1 == true && choice2 == true && choice3 == false && choice4 == true) {
  final = options.uplowsym
} else if (choice1 == false && choice2 == true && choice3 == true && choice4 == false) {
  final = options.upnum
} else if (choice1 == true && choice2 == true && choice3 == true && choice4 == false) {
  final = options.uplownum
} else if (choice1 == true && choice2 == true && choice3 == false && choice4 == false) {
  final = options.uplow
} else if (choice1 == true && choice2 == false && choice3 == true && choice4 == false) {
  final = options.lownum
} else if (choice1 == true && choice2 == false && choice3 == false && choice4 == true) {
  final = options.lowsym
} else if (choice1 == false && choice2 == true && choice3 == false && choice4 == true) {
  final = options.upsym
}

//Building the password
  for (let i = 0; i < length; i++) {
    var random = Math.random() * final.length;
    var floored = Math.floor(random);
    str += final[floored];
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