// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  
  var str = '';

  var final = '';
  var choice1 = false
  var choice2 = false
  var choice3 = false
  var choice4 = false
  
  var loweroptions = 
  {
    lower: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upandlow: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    lownum: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1,2,3,4,5,6,7,8,9'],
    lowsym: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    lownumsym: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1,2,3,4,5,6,7,8,9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    uplownum: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'],
    all: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"']
  }
  var upperoptions = 
  {
    upper: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    upandlow: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upnum: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'],
    upsym: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    upnumsym: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"'],
    uplownum: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'],
    all: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"']
  }


  
  
  
  
  
  
  








length = prompt('Please choose a password length between 8 and 124 characters.');

if (length < 8) {
  return ('Please choose a password less than 9 characters');
} else if (length > 124) {
  return ('Please choose a password more than 128 characters');
}  

var choice1 = confirm('Would you like to include lowercase letters?');
var choice2 = confirm('Would you like to include uppercase letters?');
var choice3 = confirm('Would you like to include numbers?')
var choice4 = confirm('Would you like to include symbols?')

if (choice1 == true && choice2 == true && choice3 == true && choice4 == true) {
  final = loweroptions.all
} else if (choice1 == false && choice2 == false && choice3 == false && choice4 == false) {
  return 'You must make at least one selection'
} else if (choice1 == true && choice2 == false && choice3 == false && choice4 == false) {
  final = loweroptions.lower
} else if (choice1 == false && choice2 == true && choice3 == false && choice4 == false) {
  final = upperoptions.upper
} else if (choice1 == true && choice2 == true && choice3 == false && choice4 == false) {
  final = loweroptions.upandlow
} else if (choice1 == false && choice2 == false && choice3 == true && choice4 == true) {
  return 'you must have letters in your password'
} else if (choice1 == true && choice2 == false && choice3 == true && choice4 == false) {
  final = loweroptions.lownum
} else if (choice1 == false && choice2 == true && choice3 == false && choice4 == true) {
  final = upperoptions.upsym
} else if (choice1 == false && choice2 == true && choice3 == true && choice4 == false) {
  final = upperoptions.upnum
} else if (choice1 == true && choice2 == false && choice3 == false && choice4 == true) {
  final = loweroptions.lowsym
} else if (choice1 == true && choice2 == false && choice3 == true && choice4 == true) {
  final = loweroptions.lownumsym
} else if (choice1 == false && choice2 == true && choice3 == true && choice4 == true) {
  final = upperoptions.upnumsym
}

  for (let i = 0; i < length; i++) {
    var random = Math.random() * final.length;
    var floored = Math.floor(random);
    str += final[floored];
  } 
  
  return str
  
}










/* var options = {
  letterslower: ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'],
  lettersupper: ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'],
  numbers: ['1,2,3,4,5,6,7,8,9'],
  symbols: ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"']
}; */

/* var options = {
  letterslower: ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'],
  lettersupper: ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'],
  numbers: ['1,2,3,4,5,6,7,8,9'],
  symbols: ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"']
};
/* 
  var options = 
  {
    lower: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upandlow: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    uplownum: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'],
    all: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~','"']
  } */



/* var usrlength = prompt('Please choose a Password length between 8 and 124 characters');




if (usrlength < 8) {
  return ('Please choose a password less than 9 characters');
} else if (usrlength > 124) {
  return ('Please choose a password more than 128 characters');
} 



var usrltr = confirm('Would you like to include uppercase letters?');

if (usrltr == true) {
  var random = Math.floor(Math.random() * options.lettersupper.length);
  var outltr = String(options.lettersupper[random]);
  console.log(outltr);
} else {
  var random = Math.floor(Math.random() * options.letterslower.length);
  var outltr = options.letterslower[random];
  console.log(outltr);
}



var usrsym = confirm('Would you like to include symbols?');

if (usrsym == true) {
  var random = Math.floor(Math.random() * options.symbols.length);
  var outsym = options.symbols[random];
  console.log(outsym);
}




var usrnum = confirm('Would you like to include numbers?');

if (usrnum == true) {
  var random = Math.floor(Math.random() * options.numbers.length);
  var outnum = options.numbers[random];
  console.log(outnum);
}
 */ 















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);