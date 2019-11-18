const readlineSync = require("readline-sync");

MIN = 0;
MAX = Number.MAX_SAFE_INTEGER;
let nonNegativeInteger;
let sumOfDigits = 0;
let digit = 0;
let lastDigit = 0;

console.log();
do {
    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger < MIN || nonNegativeInteger > MAX || Number.isNaN(nonNegativeInteger));

lastDigit = nonNegativeInteger % 10;

while (nonNegativeInteger !== 0) {
    digit = nonNegativeInteger % 10;
    nonNegativeInteger = Math.floor(nonNegativeInteger/10);
    sumOfDigits += digit;
}

if (sumOfDigits % 3 === 0) {
    console.log("\nNot prime.");
} else if (nonNegativeInteger === 2 || nonNegativeInteger === 3 || nonNegativeInteger === 5 || nonNegativeInteger === 7) {
    console.log("\nPrime.");
} else if (lastDigit % 2 === 0) {
    console.log("\nNot prime.");
} else {
    console.log("\nPrime.");
}

//2 and 3 don't work
