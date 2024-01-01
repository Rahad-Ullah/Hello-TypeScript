//  Optional chaining

type Customer = {
    bithday?: Date,
}

function getCustomer (id: number | null | undefined) {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)
// Optional property access operator
console.log((customer?.birthday?.getFullYear()));


// Optional element access operator
// Customers?.[0]


// Optional call
let log: any = null;
log?.('a')
