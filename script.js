
// Generate lowercase letter 
let lowerAlp = "abcdefghijklmnopqrstuvwxyz";
let arrLower = lowerAlp.split('');
//Generate random lowercase
let randomLower = arrLower[Math.floor(Math.random()*26)];

// Generate uppercase letter
arrUpper = arrLower.map(function(x){return x.toUpperCase();})
//Generate random uppercase
let randomUpper = arrLower[Math.floor(Math.random()*26)];

//Generate number 
let num = "1234567890";
let arrNum = num.split('');
//Generate random number
let randomNumber = arrNum[Math.floor(Math.random()*arrNum.length)];

//Generate special character 
let specChar =  "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let arrSpec = specChar.split('');
//Generate random symbol
let randomSpecial = arrSpec[Math.floor(Math.random()*arrSpec.length)];
 



//User Input for Password Length
const userLength = parseInt(prompt("Enter a number between 8 and 128"));
let hasLower = '';
let hasUpper = '';
let hasNum = '';
let hasSpec = ''; 

//userLength has no input                               
 if (!userLength) {
   alert("Invalid Input")
 //userLength is not a number between 8 and 128  
 } else if (userLength < 8 || userLength > 128) {
   alert("Has to be a number between 8 and 128")
 }
//userLength meets criteria
 else {
   hasLower = confirm("Is there lowercases?");
   hasUpper = confirm("Is there uppercases?");
   hasNum = confirm("Is there numbers?");
   hasSpec = confirm("Is there special characters?");  
 }

//Different combinations based on criterias

//All 4 criterias = false
if (!hasLower && !hasUpper && !hasNum && !hasSpec) {
  password.value = "Need to select a option!"
}
//All 4 criterias = true
else if (hasLower && hasUpper && hasNum && hasSpec) {
  password = arrLower.concat(arrNum, arrSpec, arrUpper)
}
// testing 

//3 Criterias = true 
else if (hasLower && hasUpper && hasNum ) {
  password = "3 Criterias = Functional"
}
else if (hasLower && hasUpper && hasSpec) {
  password = "3 Criterias = functional"
}
else if (hasLower && hasNum && hasSpec) {
  password = "3 Criterias = functional"
}
else if (hasNum && hasUpper && hasSpec) {
  password = "3 Criterias = functional"
}

//2 Criterias = true 
else if (hasUpper && hasLower) {
  password = "2 Criterias = Functional"
}
else if (hasUpper && hasNum) {
  password = "2 Criterias = Functional"
}
else if (hasUpper && hasSpec) {
  password = "2 Criterias = Functional"
}
else if (hasLower && hasSpec) {
  password = "2 Criterias = Functional"
}
else if (hasLower && hasNum) {
  password = "2 Criterias = Functional"
}
else if (hasSpec && hasNum) {
  password = "2 Criterias = Functional"
}

//1 criteria = true 
else if (hasSpec) {
  password = "1 Criterias = Functional"
}
else if (hasNum) {
  password = "1 Criterias = Functional"
}
else if (hasLower) {
  password = "1 Criterias = Functional"
}
else if (hasUpper) {
  password = "1 Criterias = Functional"
}


/* Trying to figure out formula to generate password
for (i = 0; i < userLength; i++) {
  var pickChoices = password[Math.floor(Math.random() * password.length)];
  password.push(pickChoices); 
} 
*/


/* Implented code into HW 
// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() { 
 // let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.innerHTML = "Hello Layla";
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword() {
}
*/


//Generate password to textarea
let generateBtn = document.querySelector("#generate");
let passToHtml = function() {
  document.querySelector("#password").innerHTML = password /* Where to place item id */
}

generateBtn.addEventListener("click", passToHtml)