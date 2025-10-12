// ## 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

// const one = () => {
//     return new Promise((resolve, reject) => {
//         console.log("start the process")
//         setTimeout(() => {
//             console.log("Resolve after 3 sec")
//         }, 2000)
//     })
// }

// const runner = async () => {
//     await one()

// }

// runner();

// ## 4. Use the public API `https://jsonplaceholder.typicode.com/users/1` to fetch and display the user’s name, email, and address on the page

const users = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

users();
