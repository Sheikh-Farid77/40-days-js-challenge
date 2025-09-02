// for loop
// A for loop is best when we know exactly how many times we need to run a block of code.

// for(initialization; condition; update) {
//     // block of code
// }

for(let i = 1; i <= 5; i++){
    // console.log(i)
}

// nested loop
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        // console.log('*')
    }
}

// break and continue

for(let i = 1; i <= 3; i++){
    if(i === 2) break;
    // console.log(i)
}


for(let i = 1; i <= 5; i++){
    if(i === 3) continue;
    // console.log(i)
}

// while loop
// A while loop run as long as a given condition is true. It's best when we don't know in advanced how many iterations are needed.

// while(condition){
//     code
// }

let counter = 1;

while(counter <= 5){
    // console.log(counter)
    counter += 1;
}

// do-while loop
// A do while loop ensures that the code executes at least once before checking the condition.

// do{
//     code
// }while(condition)

let count = 1;

do{
    console.log(count)
    count++
}while(count <= 6)