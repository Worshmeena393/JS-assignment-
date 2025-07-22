// 🔐 Part 1: Login & Access Control
let username = prompt("Enter your username (admin or user):");
let password = prompt("Enter your password:");

let role = "";
let securityLevel = "";

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = (username === "admin") ? "high" : "low";
  alert("✅ Welcome ${role.toUpperCase()}!\nSecurity level: ${securityLevel}");
} else {
  alert("❌ Incorrect credentials. Access denied.");
  throw new Error("Login failed");
}

// ☕ Part 2: Coffee Order Calculator
let customerName = prompt("What is your name?");
let ageInput = prompt("What is your age?");
let coffeeType = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
let quantityInput = prompt("How many cups do you want?");

// Validate age and quantity
let age = parseInt(ageInput);
let quantity = parseInt(quantityInput);

if (isNaN(age) || age <= 0) {
  alert("❌ Invalid age. Please enter a valid positive number.");
  throw new Error("Invalid age");
}

if (isNaN(quantity) || quantity < 1) {
  alert("❌ Invalid quantity. Please enter at least 1.");
  throw new Error("Invalid quantity");
}

// Set price per cup
let pricePerCup;
if (coffeeType === "espresso") {
  pricePerCup = 2.5;
} else if (coffeeType === "latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 4.0;
} else {
  alert("❌ Invalid coffee type selected.");
  throw new Error("Invalid coffee type");
}

let originalTotal = quantity * pricePerCup;

// Apply discount
let discount = 0;
if (age < 18 || age > 60) {
  discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// 🧾 Part 3: Bill Splitter with Tip
let peopleInput = prompt("How many people are splitting the bill? (1, 2, or 3)");
let tipInput = prompt("What tip percentage would you like to give? (0, 5, 10, or 15)");

let people = parseInt(peopleInput);
let tipPercent = parseInt(tipInput);

if (isNaN(people) || ![1, 2, 3].includes(people)) {
  alert("❌ Invalid number of people.");
  throw new Error("Invalid split count");
}

if (isNaN(tipPercent) || ![0, 5, 10, 15].includes(tipPercent)) {
  alert("❌ Invalid tip percentage.");
  throw new Error("Invalid tip input");
}

let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let perPerson = totalWithTip / people;

// Format to 2 decimal places
originalTotal = originalTotal.toFixed(2);
discount = discount.toFixed(2);
finalTotal = finalTotal.toFixed(2);
tipAmount = tipAmount.toFixed(2);
totalWithTip = totalWithTip.toFixed(2);
perPerson = perPerson.toFixed(2);


let receiptMessage = `
  <h2>🧾 Order Summary</h2>
  <p><strong>Customer:</strong> ${customerName}</p>
  <p><strong>Role:</strong> ${role.toUpperCase()}</p>
  <p><strong>Age:</strong> ${age}</p>
  <p><strong>Coffee:</strong> ${coffeeType} (${quantity} cups)</p>
  <p><strong>Price per Cup:</strong> $${pricePerCup}</p>
  <p><strong>Original Total:</strong> $${originalTotal}</p>
  <p><strong>Discount:</strong> -$${discount}</p>
  <p><strong>Total after Discount:</strong> $${finalTotal}</p>
  <p><strong>Tip (${tipPercent}%):</strong> $${tipAmount}</p>
  <p><strong>Total with Tip:</strong> $${totalWithTip}</p>
  <p><strong>Each Person Pays (${people} people):</strong> $${perPerson}</p>
`;

document.getElementById("receipt").innerHTML = receiptMessage;
