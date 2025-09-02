// ## 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

// ```bash
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

for(let i = 1; i <= 5; i++){
    let row = ''
    for(let j = 1; j <= i; j++){
        row += '*'
    }
    // console.log(row)
}

// ## 2. Create Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10.
// For Example: If N = 3, output should be:

// ```bash
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ```

function multiplicationTable(value) {
    for(let i = 1; i <= 10; i++) {
console.log(`${value} x ${i} = ${value * i}`)
    }
}

// multiplicationTable(3)

// ## 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

let sum = 0;

for(let i = 1; i <= 500; i++){
    if(i % 2 === 1){
        sum += i
    }
}

// console.log(sum)

// ## 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

for(let i = 1; i <= 20; i ++){
    if(i % 3 === 0) continue;

    // console.log(i)
}