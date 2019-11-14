const readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;
let posInteger = 0;
let reverseInt = 0;

console.log();
do {
    posInteger = Number(readlineSync.question("Positive integer: "));
} while (posInteger < MIN || posInteger > MAX);

while (posInteger != 0) {
    reverseInt *= 10;
    reverseInt += (posInteger % 10);
    posInteger -= (posInteger % 10);
    posInteger /= 10;
}

reverseInt = String(reverseInt);
let length = reverseInt.length;

console.log(reverseInt);
