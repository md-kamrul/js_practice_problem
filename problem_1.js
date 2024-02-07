function calculateMoney(ticketSale) {
    
    // if the ticket number is not valid
    if (ticketSale < 0) {
        return "Please provide a valid number"
    }

    // if the ticket number is zero
    else if (ticketSale === 0) { 
        return "You don't sale any ticket today...."
    }

    // if the ticket number is valid
    let profit = (ticketSale * 120) - (500 + (8 * 50));
    return profit;
}

let profit = calculateMoney(-10);

console.log(profit);