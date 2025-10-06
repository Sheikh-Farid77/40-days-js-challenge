// ## 1. Pass a function to greet a user and then thank them 

// function greet (name, callback) {
//     console.log(`hello mr ${name}`)
//     callback(name);
// }

// greet("Monica", (name) => {
//     console.log(`Your are most welcome ${name}`)

// })

// ## 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract

// ```js
// function calculator(a, b, operationCallback) {
//   // Complete this function
// }

// function add(x, y) {
//   return x + y;
// }

// function calculator(a, b, callback) {
//     callback(a, b)
// }

// const add = (a, b) => {
//     console.log(a + b)
// }
// const subtract = (a, b) => {
//     console.log(a - b);
// }

// calculator(10, 5, add)
// calculator(10, 5, subtract)



function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

task1(() => {
    task2(task3)
})