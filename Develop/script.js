// prompt the user to ask for the length between 8-128
// prompt which character types such as lowercase, uppercase, numeric, and spcial characters indivisually , seperate prompts
// atleast one chracter type should be selected doesnt have to be all
// then new password is generated

var generateBtn = document.querySelector("#generate");

// defines generate password function and provides message for no response

function generatePassword() {
  console.log("Button has been clicked");
  // prompt the user for password criteria
  var length = prompt(
    "how many characters would you like your password to contain?"
  );
  if (length < 8 || length > 128) {
    alert("Please pick a number between 8 and 128");
    return;
  }
  var uppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
  uppercase = confirm(
    "Do you want uppercase characters? Click Ok for YES and Cancel for NO"
  );
  var lowercase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  lowercase = confirm(
    "Do you want lowercase characters? Click Ok for YES and Cancel for NO"
  );
  var numbers = "0,1,2,3,4,5,6,7,8,9";
  numbers = confirm(
    "Do you want numeric characters? Click Ok for YES and Cancel for NO"
  );
  var special = " !,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,,],^,_,`,{,|,},~";
  special = confirm(
    "Do you want special characters? Click Ok for YES and Cancel for NO"
  );
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
