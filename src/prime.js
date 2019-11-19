const readlineSync = require("readline-sync");

MIN = 0;
MAX = Number.MAX_SAFE_INTEGER;
let nonNegativeInteger;
let sumOfDigits = 0;
let digit = 0;
let lastDigit = 0;
let digitsTester = 0;

console.log();
do {
    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger < MIN || nonNegativeInteger > MAX || Number.isNaN(nonNegativeInteger));

digitsTester = nonNegativeInteger;

lastDigit = nonNegativeInteger % 10;

while (digitsTester !== 0) {
    digit = digitsTester % 10;
    digitsTester = Math.floor(digitsTester/10);
    sumOfDigits += digit;
}

if (nonNegativeInteger == 2 || nonNegativeInteger == 3 || nonNegativeInteger == 5 || nonNegativeInteger == 7) {
    console.log("\nPrime.");
} else if (sumOfDigits % 3 === 0) {
    console.log("\nNot prime.");
} else if (lastDigit % 2 === 0) {
    console.log("\nNot prime.");
} else {
    console.log("\nPrime.");
}
