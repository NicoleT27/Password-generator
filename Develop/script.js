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
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
