const readlineSync = require("readline-sync");

const MIN = 0;

let creditCardNumber;
let creditCardNumberEvenDigitSum;
let creditCardNumberOddDigitSum;
let everyOtherDigit = 0;
let everyOtherDigitFloor = 0;
let everyOtherDigitSum = 0;
let everyOtherDigitFirst = 1;
let everyOtherDigitSecond = 0;
let everyOtherDigitTotal = 0;
let everyOtherDigitOdd = 0;
let everyOtherDigitOddSum = 0;


console.log();
do {
    creditCardNumber = Number(readlineSync.question("Number: "));
} while (creditCardNumber < MIN || Number.isNaN(creditCardNumber));

creditCardNumberEvenDigitSum = creditCardNumber;
creditCardNumberOddDigitSum = creditCardNumber;

while (creditCardNumberEvenDigitSum > 0) {
    everyOtherDigit = creditCardNumberEvenDigitSum % 100;
    everyOtherDigitFloor = Math.floor(everyOtherDigit * 0.1);
    everyOtherDigitSum = everyOtherDigitFloor * 2;
    if (everyOtherDigitSum > 10) {
        everyOtherDigitSecond = everyOtherDigitSum % 10;
        everyOtherDigitTotal = everyOtherDigitTotal + everyOtherDigitFirst + everyOtherDigitSecond;
    } else {
        everyOtherDigitTotal = everyOtherDigitTotal + everyOtherDigitSum;
    }
    creditCardNumberEvenDigitSum = Math.floor(creditCardNumberEvenDigitSum/100);
}

while (creditCardNumberOddDigitSum > 0) {
    everyOtherDigitOdd = creditCardNumber % 10;
    everyOtherDigitFloor = Math.floor(everyOtherDigit * 0.1);
    everyOtherDigitSum = everyOtherDigitFloor * 2;
