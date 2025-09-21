// when js run on browser it create Global Execution context even if there is no javascript code
//1. window
//2. this
//3. this === window true

// GEC 
// 1. creation phase it allocate the memory for variable and function
// 2. execution phase it execute the code

// if the function is not called or invoked there will be no function execution context
// function execution context also have same two phase


// primitive value is store on a call stack
// non primitive value is store on heap memory

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

const result = getResult(8, 5);
console.log(result)