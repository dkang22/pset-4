const readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;
let posInteger;

console.log();
do {
    posInteger = Number(readlineSync.question("Positive integer: "));
} while (posInteger < MIN || posInteger > MAX);
