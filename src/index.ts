// Functions

function calculateTax(income: number, taxYear: number = 2022): number{      // set parameter and return type
    if(income < 50000 && taxYear < 2023){
        return income * 0.3;
    }
    return income * 0.1;       // must return something as default or remove return type
}

let tax = calculateTax(60_000)
console.log(tax);
