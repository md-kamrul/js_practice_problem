function monthlySavings(arr, livingCost) {

    // if arr is not an array and if livingCost is not a number
    if (!Array.isArray(arr) || typeof (livingCost) !== "number") {
        return "invalid input"
    }

    // if everything is okay
    let savings = 0, paymentWithoutTax;
    for (let payment of arr) {
        if (payment >= 3000) {
            paymentWithoutTax = payment - (payment * 20 / 100);
        }
        else { 
            paymentWithoutTax = payment;
        }
        savings = savings + paymentWithoutTax;
    }

    savings = savings - livingCost;

    // if savings is 0 (zero) or more than 0 (zero)
    if (savings < 0) {
        return "earn more";
    }
    else { 
        return savings;
    }
}

let savings = monthlySavings(100, [1000, 2000, 2500]);
console.log(savings);