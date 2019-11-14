const readlineSync = require("readline-sync");

MIN = 0;
MAX = Number.MAX_SAFE_INTEGER;
let nonNegativeInteger;


console.log();
do {
    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger < MIN || nonNegativeInteger > MAX);
