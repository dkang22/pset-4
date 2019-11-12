const readlineSync = require("readline-sync");

MIN = Number.MIN_SAFE_INTEGER;
MAX = Number.MAX_SAFE_INTEGER;
let sum = 0;
let lowerValue;
let higherValue;

console.log();
do {
    lowerValue = Number(readlineSync.question("Lower bound: "));
    higherValue = Number(readlineSync.question("Upper bound: "));
} while ((lowerValue < MIN || higherValue > MAX) || (lowerValue >= higherValue));

while (higherValue >= lowerValue) {
    if (lowerValue % 2 === 0) {
        sum += lowerValue;
        lowerValue++;
    } else {
        lowerValue++;
    }
}

sum = sum.toLocaleString("en");
console.log("\n" + sum + ".");
