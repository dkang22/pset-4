const readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;
let posInteger;
let otherFactor;
let print = "";
let alreadyPrinted;

console.log();
do {
    posInteger = Number(readlineSync.question("Positive integer: "));
} while (posInteger < MIN || posInteger > MAX || Number.isNaN(posInteger));

for (let x = 1; x <= (posInteger/2); x++) {
    if (posInteger % x == 0) {
        otherFactor = String(posInteger/x)
        x = String(x);

        if (Math.pow(x, 2) == posInteger) {
            print = print + x + ".";
            x = posInteger;
        } else {
            print = print + x + ", " + otherFactor + ", ";
        }
    }
}

console.log("\n" + print);

console.log();
