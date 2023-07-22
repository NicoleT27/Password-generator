var generateBtn = document.querySelector("#generate");

// state which characters the user has a choice between globally as an array
var uppercaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  ",",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var length;
function userAnswers() {
  // prompt the user for password criteria
  length = prompt(
    "How many characters would you like your password to contain between 8 and 128?"
  );
  if (length < 8 || length > 128) {
    alert("Please pick a number between 8 and 128");
    return null;
  }

  // confirm which characters user wants to use
  var uppercaseChoice = confirm(
    "Do you want uppercase characters? Click Ok for YES and Cancel for NO"
  );
  var lowercaseChoice = confirm(
    "Do you want lowercase characters? Click Ok for YES and Cancel for NO"
  );
  var numberChoice = confirm(
    "Do you want numeric characters? Click Ok for YES and Cancel for NO"
  );
  var specialChoice = confirm(
    "Do you want special characters? Click Ok for YES and Cancel for NO"
  );
  // Add a result for scenario of user not picking any chracters
  if (
    uppercaseChoice === false &&
    lowercaseChoice === false &&
    numberChoice === false &&
    specialChoice === false
  ) {
    alert("Please choose atleast one character type");
    return null;
  }

  var userChoices = {
    length: length,
    uppercase: uppercaseChoice,
    lowercase: lowercaseChoice,
    number: numberChoice,
    special: specialChoice,
  };
  return userChoices;
}
// store answers from user (userAnswers) and place into a new function to be able to use later
var userInfo;
function generatePassword() {
  userInfo = userAnswers();
  return userInfo;
}
// provide for loops for diffrent scenarios using triple === to have system reflect result in password
function random() {
  var password = "";
  var possibilities = "";
  if (userInfo.uppercase === true) {
    for (var i = 0; i < uppercaseChar.length; i++) {
      possibilities += uppercaseChar[i];
    }
  }
  if (userInfo.lowercase === true) {
    for (var i = 0; i < lowercaseChar.length; i++) {
      possibilities += lowercaseChar[i];
    }
  }
  if (userInfo.number === true) {
    for (var i = 0; i < numberChar.length; i++) {
      possibilities += numberChar[i];
    }
  }
  if (userInfo.special === true) {
    for (var i = 0; i < specialChar.length; i++) {
      possibilities += specialChar[i];
    }
  }
  // create a for loop to be able to pass info to and generate the password with the specifics chosen
  for (var i = 0; i < userInfo.length; i++) {
    var random = Math.floor(Math.random() * possibilities.length);
    var addToPass = possibilities[random];
    password += addToPass;
  }
  return password;
}

function writePassword() {
  generatePassword();
  var password = random();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
