// ## 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

function withdrawCash (amount) {
    if(amount % 100 === 0){
        console.log(`${amount} tk successfully withdrawn`)
    }else{
        console.log('Invalid amount')
    }
}

// ## 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
// - Children (<18 years): $3
// - Adults (18 - 60 years): $10
// - Seniors (60+ years): $8

// Write a program that prints the ticket price based on the person’s age.

function buyTicket (age) {
    if(age < 18) {
        console.log('Ticket price is $3')
    }else if(age >= 18 && age <= 60){
        console.log('Ticket price is $10')
    }else {
        console.log('Ticket price is $8')
    }
}

