//1. Global scope
// 2. Block scope
// 3. Function scope


{
     var name = 'Farid'
}

// console.log(name) // but it is not possible with let or const thats why var is function scope


var count = 10;

function value () {
    var count = 20;
    console.log(count)
}

value();
console.log(count);