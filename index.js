
function generatePassword() {
  const passLength = document.getElementById("textBox").value;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSpecial = document.getElementById("includeSpecialChars").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowerChars : "";
  allowedChars += includeUppercase ? upperChars : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSpecial ? specialChars : "";


  if (passLength <= 0) {
    alert("Password length must be greater than 0");
    return "";
  }

  if (allowedChars.length === 0) {
    alert("Please select at least 1 character type");
    return "";
  }

  for (let i = 0; i < passLength; i++) {
    const index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
  }

  document.getElementById("passwordDisplay").textContent = password;
}

console.log(includeLowercase);
