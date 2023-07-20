// prompt the user to ask for the length between 8-128
// prompt which character types such as lowercase, uppercase, numeric, and spcial characters indivisually , seperate prompts
// atleast one chracter type should be selected doesnt have to be all
// then new password is generated

var generateBtn = document.querySelector("#generate");

// defines generate password function and provides message for no response

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
  var uppercase = confirm(
    "Do you want uppercase characters? Click Ok for YES and Cancel for NO"
  );
  var lowercase = confirm(
    "Do you want lowercase characters? Click Ok for YES and Cancel for NO"
  );
  var number = confirm(
    "Do you want numeric characters? Click Ok for YES and Cancel for NO"
  );
  var special = confirm(
    "Do you want special characters? Click Ok for YES and Cancel for NO"
  );

  if (
    uppercase === false &&
    lowercase === false &&
    number === false &&
    special === false
  ) {
    alert("Please choose atleast one character type");
    return null;
  }

  var userChoices = {
    length: length,
    uppercase: uppercase,
    lowercase: lowercase,
    number: number,
    special: special,
  };
  return userChoices;
}

function generatePassword() {
  var userInfo = userAnswers();
  return userInfo;
}
function random() {
  var password = "";
  for (var i = 0; i < userInfo.length; i++) {
    var possibilities = [
      "uppercaseChar",
      "lowercaseChar",
      "numberChar",
      "specialChar",
    ];
    if ((userInfo.uppercaseChar = true)) {
      var randomUpper =
        possibilities[Math.floor(math.random() * possibilities.length)];
      possibilities.push(randomUpper);
    }
    if ((userInfo.lowercaseChar = true)) {
      var randomLower =
        possibilities[Math.floor(math.random() * possibilities.length)];
      possibilities.push(RandomLower);
    }
    if ((userInfo.numberChar = true)) {
      var randomNum =
        possibilities[Math.floor(math.random() * possibilities.length)];
      possibilities.push(numberChar);
    }
    if ((userInfo.specialChar = true)) {
      var randomSpecial =
        possibilities[Math.floor(math.random() * possibilities.length)];
      possibilities.push(specialChar);
    }

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

// for( i = 0 i<userInfo.length i++)
// {
//   var tempArray = [];
//   if userInfo.upper= true{
//     random pick upper
//     tempArray.push(randomUpper);
//   }
//   if lowercaseChar
//   if number
//   if special

//   var random = Math.floor(Math.random() * tempArray.length);
//   var addToPass = tempArray[random]

//   password += addToPass
// }
