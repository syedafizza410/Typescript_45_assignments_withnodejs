let apple = "apple";

let upperCaseApple = "APPLE";

let ten = 10;

let twenty = 20;

let fruits =["Apple", "Banana", "Orange"];

console.log("Is apple equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

console.log("\ntwenty is less than or equal to 10?");
console.log(twenty <= 10);

console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

console.log("\n20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 50 or 20 is not equal to 20");
console.log(20 >50 || 20 != 20);

console.log("Is Orange include in my fruits array?")
console.log(fruits.includes("Orange"));

console.log("\nIs Orange is not include in my fruits array");
console.log(!fruits.includes("Orange"));