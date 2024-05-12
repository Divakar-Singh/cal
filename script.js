// Emi Calculator start here

function calculateEMI() {
    var principal = parseFloat(document.getElementById("principal").value);
    var annualRate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);
  
    // Convert annual interest rate to monthly
    var monthlyRate = annualRate / 12 / 100;
  
    // Calculate EMI using formula
    var emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, time)) / (Math.pow(1 + monthlyRate, time) - 1);
    
    // Calculate total amount paid
    var totalAmountPaid = emi * time;
    
    // Calculate total interest paid
    var totalInterestPaid = totalAmountPaid - principal;
  
    // Display result in Indian Rupees
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Monthly EMI: ₹" + emi.toFixed(2);
    resultElement.style.display = "block"; // Make result visible
    
    // Display total interest paid
    var interestElement = document.getElementById("interest");
    interestElement.innerHTML = "Interest you will pay: ₹" + totalInterestPaid.toFixed(2);
    interestElement.style.display = "block"; // Make interest visible
  }
  
  // Emi Calculator ends here



//   bmi calculator start here
function calculateBMI() {
    var heightFeet = parseFloat(document.getElementById("height-feet").value);
    var heightInches = parseFloat(document.getElementById("height-inches").value);
    var weight = parseFloat(document.getElementById("weight").value);
  
    // Convert height to centimeters
    var heightCM = (heightFeet * 12 + heightInches) * 2.54;
  
    // Calculate BMI
    var bmi = weight / Math.pow(heightCM / 100, 2);
  
    // Determine BMI status
    var status;
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      status = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      status = "Overweight";
    } else {
      status = "Obese";
    }
  
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI: " + bmi.toFixed(2) + " (" + status + ")";
    resultElement.className = status.toLowerCase().replace(" ", "-");
  }

// bmi calculator ends here



// calorie calculator start here

function calculateCalories() {
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var activityLevel = document.getElementById("activity-level").value;
  
    // Calculate BMR (Basal Metabolic Rate) based on gender
    var bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else { // Female
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    // Adjust BMR based on activity level
    var activityMultipliers = {
      "sedentary": 1.2,
      "lightly-active": 1.375,
      "moderately-active": 1.55,
      "very-active": 1.725,
      "extra-active": 1.9
    };
    var calories = bmr * activityMultipliers[activityLevel];
  
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Estimated Daily Calories: " + calories.toFixed(2) + " kcal." + " (This is just an estimate and your actual value can vary due to various factors. Please first consult your dieticien.)";
  }
  


// calorie calculator ends here


// length converter start here

function convertLength() {
    var length = parseFloat(document.getElementById("length").value);
    var fromUnit = document.getElementById("from-unit").value;
    var toUnit = document.getElementById("to-unit").value;
    
    // Define conversion factors for different units
    var conversionFactors = {
      "m": {
        "m": 1,
        "ft": 3.28084,
        "in": 39.3701,
        "cm": 100
      },
      "ft": {
        "m": 0.3048,
        "ft": 1,
        "in": 12,
        "cm": 30.48
      },
      "in": {
        "m": 0.0254,
        "ft": 0.0833333,
        "in": 1,
        "cm": 2.54
      },
      "cm": {
        "m": 0.01,
        "ft": 0.0328084,
        "in": 0.393701,
        "cm": 1
      }
    };
    
    // Convert length to the desired unit
    var convertedLength = length * conversionFactors[fromUnit][toUnit];
    
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = length + " " + fromUnit + " = " + convertedLength.toFixed(2) + " " + toUnit;
  }
  

// length converter ends here


// Age Calculator start here
function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var futureDate = new Date(document.getElementById("future-date").value);
    
    var today = new Date();
    
    // Calculate age till today
    var ageInMilliseconds = today - birthdate;
    var ageInYears = today.getFullYear() - birthdate.getFullYear();
    var ageInMonths = today.getMonth() - birthdate.getMonth();
    var ageInDays = today.getDate() - birthdate.getDate();
    
    // Adjust age for negative months or days
    if (ageInDays < 0) {
      ageInMonths--;
      var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      ageInDays += lastMonth.getDate();
    }
    if (ageInMonths < 0) {
      ageInYears--;
      ageInMonths += 12;
    }
    
    // Calculate age at future date if provided
    var futureAgeInYears = futureDate ? Math.floor((futureDate - birthdate) / (1000 * 60 * 60 * 24 * 365.25)) : null;
    
    // Calculate total days
    var totalDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Exact Age: " + ageInYears + " years, " + ageInMonths + " months, " + ageInDays + " days ";
    
    
    
    // Calculate total months
    var totalMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));
    
    // Calculate remaining days
    var remainingDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    
    // Display additional output for total months and remaining days
    resultElement.innerHTML += "<br>Total Months: " + totalMonths + " months";
    resultElement.innerHTML += "<br>Total Days: " + totalDays + " days";

    if (futureDate) {
        resultElement.innerHTML += "<br>Age at Future Date: " + futureAgeInYears + " years";
      }
  }
 
  
  
// Age Calculator end here


// Love Calculator start here

function calculateLove() {
  var name1 = document.getElementById("name1").value.trim().toLowerCase();
  var name2 = document.getElementById("name2").value.trim().toLowerCase();
  
  // Show "Loading..."
  var loveResultElement = document.getElementById("love-result");
  loveResultElement.innerHTML = "Loading...";
  
  // Calculate love after 1 second
  setTimeout(function() {
    // Calculate love percentage using a unique formula
    var lovePercentage = calculatePercentage(name1, name2);
    
    // Display result
    loveResultElement.innerHTML = "Love Percentage: " + lovePercentage + "%";
  }, 1000);
}

function calculatePercentage(name1, name2) {
  // Define a unique formula to calculate the love percentage
  var totalValue = 0;
  for (var i = 0; i < name1.length; i++) {
    totalValue += name1.charCodeAt(i);
  }
  for (var j = 0; j < name2.length; j++) {
    totalValue -= name2.charCodeAt(j);
  }
  
  // Normalize the value to get a percentage between 0 and 100
  var lovePercentage = Math.abs(totalValue) % 101; // Modulo 101 ensures the result is between 0 and 100
  
  return lovePercentage;
}


// Love Calculator end here



// Friendship calculator start here
function calculateFriendship() {
  var name1 = document.getElementById("name1").value.trim().toLowerCase();
  var name2 = document.getElementById("name2").value.trim().toLowerCase();
  
  // Show "Loading..."
  var friendshipResultElement = document.getElementById("friendship-result");
  friendshipResultElement.innerHTML = "Loading...";
  
  // Calculate friendship after 1 second
  setTimeout(function() {
    // Calculate friendship percentage based on the alphabetical order of characters in the names
    var friendshipPercentage = calculatePercentage(name1, name2);
    
    // Display result
    friendshipResultElement.innerHTML = "Friendship Percentage: " + friendshipPercentage + "%";
  }, 1000);
}

function calculatePercentage(name1, name2) {
  // Function to calculate the value of a name based on the alphabetical order of characters
  function calculateValue(name) {
    var totalValue = 0;
    for (var i = 0; i < name.length; i++) {
      var charCode = name.charCodeAt(i) - 96; // Convert ASCII code to alphabetical order (a=1, b=2, ..., z=26)
      totalValue += charCode;
    }
    return totalValue;
  }
  
  // Calculate values for both names
  var value1 = calculateValue(name1);
  var value2 = calculateValue(name2);
  
  // Calculate friendship percentage based on the total values
  var totalValue = value1 + value2;
  var friendshipPercentage = Math.round((totalValue % 101)); // Modulo 101 ensures the result is between 0 and 100
  
  return friendshipPercentage;
}


// Friendship calculator end here


// Calculator start here

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var result = eval(document.getElementById('display').value);
  document.getElementById('display').value = result;
}

function calculateSquareRoot() {
  var result = Math.sqrt(parseFloat(document.getElementById('display').value));
  document.getElementById('display').value = result;
}

function calculateSquare() {
  var result = Math.pow(parseFloat(document.getElementById('display').value), 2);
  document.getElementById('display').value = result;
}

function calculateInverse() {
  var result = 1 / parseFloat(document.getElementById('display').value);
  document.getElementById('display').value = result;
}


// Calculator end here



// Password Generator start here

function generatePassword() {
  var length = parseInt(document.getElementById("length").value);
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSymbols = document.getElementById("symbols").checked;

  var charset = '';
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var symbolChars = '!@#$%^&*()_+{}[]|;:\',./?';

  if (includeLowercase) charset += lowercaseChars;
  if (includeUppercase) charset += uppercaseChars;
  if (includeNumbers) charset += numberChars;
  if (includeSymbols) charset += symbolChars;

  if (charset.length === 0) {
      console.error('At least one character type must be included in the password.');
      return;
  }

  var password = '';
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }

  document.getElementById("password").textContent = password;


}
// Password Generator end here


// Inches to Pixel Calculator

function convertToPixels() {
    // Get input value in inches
    let inches = parseFloat(document.getElementById('inches').value);
    
    // Check if input is a valid number
    if (!isNaN(inches)) {
        // Convert inches to pixels using the conversion factor
        let pixels = inches * 96;
        
        // Display the result
        document.getElementById('result').innerText = inches + ' inch = ' + pixels + ' pixels';
    } else {
        // If input is not a valid number, show an error message
        document.getElementById('result').innerText = 'Please enter a valid number';
    }
}

function convertToInches() {
    // Get input value in pixels
    let pixels = parseFloat(document.getElementById('pixels').value);
    
    // Check if input is a valid number
    if (!isNaN(pixels)) {
        // Convert pixels to inches using the conversion factor
        let inches = pixels / 96;
        
        // Display the result
        document.getElementById('resultPixels').innerText = pixels + ' pixels = ' + inches.toFixed(2) + ' inches';
    } else {
        // If input is not a valid number, show an error message
        document.getElementById('resultPixels').innerText = 'Please enter a valid number';
    }
}


// Inches to pixel calculator ends here

