// ## 1. Create Your First Promise

// - Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
// - Log the result using .then().

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Hello, Promises!")
//     }, 1000)
// })

// promise.then(res => console.log(res))

// ## 2.  Reject a Promise

// - Create a Promise that immediately rejects with the message "Something went wrong!".
// - Handle the error using .catch().

// const promise1 = new Promise((resolve, reject) => reject("Something went wrong!"))
// promise1.catch(error => console.log(error))

// ## 3. Simulate Coin Toss

// Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

// const arr = ["Heads", "Tails"];
// const randomIndex = Math.floor(Math.random() * arr.length);

// const promise = () => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(arr[randomIndex]);
//         resolve();
//     }, 1000)
// })
// }

// promise()

// ## 4. Promise with Condition

// - Create a function checkAge(age) that returns a Promise.
// - Resolve if age >= 18, reject otherwise.

// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if(age >= 18){
//             console.log("Adult")
//             resolve()
//         }
//         reject("Young")
//     })
// }

// checkAge(10)
// .then(res => console.log(res))
// .catch(err => console.log(err))
// checkAge(20)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// ## 5. Chain Promises Sequentially

// - Create three Promises that log:
//   - "Step 1 done"
//   - "Step 2 done"
//   - "Step 3 done"
// - Chain them using .then().

// const promise1 = () => {
//     return new Promise((resolve) => {
//         console.log("Step 1 done")
//         resolve()
//     } )
// }
// const promise2 = () => {
//     return new Promise((resolve) => {
//         console.log("Step 2 done")
//         resolve();
//     })
// }
// const promise3 = () => {
//     return new Promise((resolve) => {
//         console.log("Stem 3 done")
//         resolve()
//     })
// }

// promise1()
// .then(() => promise2())
// .then(() => promise3())

// ## 6. Value Transformation in Chain

// - Create a Promise that resolves with 5.
// - Chain .then() handlers to double it, then square it.
// - Final output should be 100.

// const promise = new Promise((resolve) => {
//   resolve(5);
// });
// promise
//   .then((res) => {
//     console.log(res);

//     return new Promise((resolve) => {
//       resolve(res * 2);
//     });
//   })
//   .then((res) => {
//     console.log(res);

//     return new Promise((resolve) => {
//       resolve(res ** 2);
//     });
//   })
//   .then((res) => console.log(res));
