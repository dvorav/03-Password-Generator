// Generate lowercase letter 
function randomLowercase() {
  let lowerAlp = "abcdefghijklmnopqrstuvwxyz";
  let arrLower = lowerAlp.split('');
  //Generate random lower
  let randLow = arrLower[Math.floor(Math.random()*26)];
  return randLow;
};

let lower = randomLowercase();


// Generate uppercase letter
function randomUppercase() {
let upperAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arrUpp = upperAlp.split('');
//Generate random upper
let randUpp = arrUpp[Math.floor(Math.random()*26)];
return randUpp;
};
let upper = randomLowercase();


//Generate number 
function randomNumber() {
  let num = "1234567890";
  let arrNum = num.split('');
  //Generate random number
  let randNum = arrNum[Math.floor(Math.random()*arrNum.length)];
  return randNum;
};
let number = randomNumber();


//Generate special character 
function randomSpecial() {
  let specChar =  "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  let arrSpec = specChar.split('');
  //Generate random symbol
  let randSpec = arrSpec[Math.floor(Math.random()*arrSpec.length)];
  return randSpec;
};
let special = randomSpecial();


const random = {
  lower : randomLowercase,
  upper : randomUppercase,
  number : randomNumber,
  special : randomSpecial,
  
};

//Prompts
const length = prompt("How many characters?");
const hasLower = confirm("Is there lowercases?");
const hasUpper = confirm("Is there uppercases?");
const hasNum = confirm("Is there numbers?");
const hasSpec = confirm("Is there special characters?");

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // let password = generatePassword();
 let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


