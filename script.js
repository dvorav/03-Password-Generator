//A function to generate a password
function generatePassword() {
  // Generate lowercase letter
  let lowerAlp = "abcdefghijklmnopqrstuvwxyz";
  let arrLower = lowerAlp.split("");
  //Generate random lowercase

  // Generate uppercase letter
  arrUpper = arrLower.map(function (x) {
    return x.toUpperCase();
  });

  //Generate number
  let num = "1234567890";
  let arrNum = num.split("");

  //Generate special character
  let specChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let arrSpec = specChar.split("");

  //User Input for Password Length
  const userLength = parseInt(prompt("Enter a number between 8 and 128, for how many characters you'd like."));
  let hasLower = "";
  let hasUpper = "";
  let hasNum = "";
  let hasSpec = "";

  //userLength has no input
  if (!userLength) {
    alert("Invalid Input");

    //userLength is not a number between 8 and 128
  } else if (userLength < 8 || userLength > 128) {
    alert("Has to be a number between 8 and 128");
    password = "  ";
  }
  //userLength meets criteria
  else {
    hasLower = confirm("Is there lowercases?");
    hasUpper = confirm("Is there uppercases?");
    hasNum = confirm("Is there numbers?");
    hasSpec = confirm("Is there special characters?");
  }

  //Different combinations based on criterias
  //Randomize arrays
  let randomUpper = arrUpper[Math.floor(Math.random() * 26)];
  let randomLower = arrLower[Math.floor(Math.random() * 26)];
  let randomNumber = arrNum[Math.floor(Math.random() * arrNum.length)];
  let randomSpecial = arrSpec[Math.floor(Math.random() * arrSpec.length)];

  //All 4 criterias = false
  if (!hasLower && !hasUpper && !hasNum && !hasSpec) {
    password.value = "Need to select a option!";
  }
  //All 4 criterias = true
  else if (hasLower && hasUpper && hasNum && hasSpec) {
    password = randomUpper + randomLower + randomNumber + randomSpecial;
  }

  //3 Criterias = true
  //Uppercase, special, lowercase
  else if (hasUpper && hasSpec && hasLower) {
    password = randomUpper + randomSpecial + randomLower;
  }
  //Uppercase, special, number
  else if (hasUpper && hasSpec && hasNum) {
    password = randomUpper + randomSpecial + randomNumber;
  }
  //Uppercase, lowercase, number
  else if (hasUpper && hasLower && hasNum) {
    password = randomUpper + randomLower + randomNumber;
  }
  //Lowercase, number, special
  else if (hasLower && hasNum && hasSpec) {
    password = randomLower + randomNumber + randomSpecial;
  }

  //2 Criterias = true
  //Uppercase and lowercase
  else if (hasUpper && hasLower) {
    password = randomUpper + randomLower;
  }
  //Uppercase and special
  else if (hasUpper && hasSpec) {
    password = randomUpper + randomSpecial;
  }
  //Uppercase and number
  else if (hasUpper && hasNum) {
    password = randomUpper + randomNumber;
  }
  //Number and special
  else if (hasNum && hasSpec) {
    password = randomNumber + randomSpecial;
  }
  //Special and Number
  else if (hasSpec && hasUpper) {
    password = randomSpecial + randomUpper;
  }
  //Lowercase and number
  else if (hasLower && hasNum) {
    password = randomLower + randomNumber;
  }

  //1 criteria = true
  //Uppercase = true
  else if (hasUpper) {
    password = randomUpper;
  }
  //Lowercase = true
  else if (hasLower) {
    password = randomLower;
  }
  //Number = true
  else if (hasNum) {
    password = randomNumber;
  }
  //Special = true
  else if (hasSpec) {
    password = randomSpecial;
  }

  let generatedps = "";
  //Generate Password
  for (i = 0; i < userLength; i++) {
    generatedps += password[Math.floor(Math.random() * password.length)];
    if (generatedps > 8) {
    }
  }
  document.querySelector("#password").value = generatedps;
}

//Generate password to HTML textarea
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
