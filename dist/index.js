"use strict";
function calculateTax(income, taxYear = 2022) {
    if (income < 50000 && taxYear < 2023) {
        return income * 0.3;
    }
    return income * 0.1;
}
let tax = calculateTax(60000);
console.log(tax);
//# sourceMappingURL=index.js.map