// Generate lowercase letter 
function RandomLowercase() {
  let lowerAlp = "abcdefghijklmnopqrstuvwxyz";
  let arrLower = lowerAlp.split('');
  //Generate random lower
  let randLow = arrLower[Math.floor(Math.random()*26)];
  return randLow;

};
let lower = RandomLowercase();


// Generate uppercase letter
function RandomUppercase() {
let upperAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arrUpp = upperAlp.split('');
//Generate random upper
let randUpp = arrUpp[Math.floor(Math.random()*26)];
return randUpp;
};
let upper = RandomLowercase();


//Generate number 
function RandomNumber() {
  let num = "1234567890";
  let arrNum = num.split('');
  //Generate random number
  let randNum = arrNum[Math.floor(Math.random()*arrNum.length)];
  return randNum;
};
let number = RandomNumber();


//Generate special character 
function RandomSpecial() {
  let specChar =  "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  let arrSpec = specChar.split('');
  //Generate random symbol
  let randSpec = arrSpec[Math.floor(Math.random()*arrSpec.length)];
  return randSpec;
};
let special = RandomSpecial();


const random = {
  lower : RandomLowercase,
  upper : RandomUppercase,
  number : RandomNumber,
  special : RandomSpecial,
  
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


