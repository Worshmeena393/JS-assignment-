
// Part 1: 🔐 Login & Access Control
let username = prompt("Enter your username (admin or user):");
let password = prompt("Enter your password:", "1234"); // default password shown in input

let role = "";
let securityLevel = "";

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = (username === "admin") ? "high" : "low";
} else {
  alert("❌ Incorrect credentials. Access denied.");
  throw new Error("Login failed. Program stopped.");
}

// Part 2: ☕ Coffee Shop Order Calculator
let customerName = prompt("What is your name?");
let age = parseInt(prompt("What is your age?"));
let coffeeType = prompt("Choose coffee: espresso, latte, or cappuccino").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like to order?"));

let pricePerCup;
if (coffeeType === "espresso") {
  pricePerCup = 2.5;
} else if (coffeeType === "latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 4.0;
} else {
  alert("❌ Invalid coffee type selected.");
  throw new Error("Invalid coffee type. Stopping program.");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// Part 3: 🧾 Bill Splitter with Tip
let people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
let tipPercent = parseInt(prompt("Enter tip percentage: 0, 5, 10, or 15"));

if (![1, 2, 3].includes(people) || ![0, 5, 10, 15].includes(tipPercent)) {
  alert("❌ Invalid input for people or tip percentage.");
  throw new Error("Invalid bill splitting or tip input.");
}

let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let perPerson = totalWithTip / people;

// 🧾 Final Output
alert(`Hello ${customerName}!\n
You ordered ${quantity} ${coffeeType}(s).\n
Original total: $${originalTotal.toFixed(2)}\n
Discount: $${discount.toFixed(2)}\n
Tip: $${tipAmount.toFixed(2)}\n
Total with Tip: $${totalWithTip.toFixed(2)}\n
Split between ${people} person(s): $${perPerson.toFixed(2)} each`);

