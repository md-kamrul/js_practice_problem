function calculateMoney(ticketSale) {
    
    // if the ticket number is not valid
    if (ticketSale <= 0) { 
        return "Please provide a valid number"
    }

    // if the ticket number is valid
    var profit = (ticketSale * 120) - (500 + (8 * 50));
    return profit;
}

var profit = calculateMoney(-130);

console.log(profit);