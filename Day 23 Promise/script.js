// in promise there is three state
// 1. pending : initially when the executor function start the execution
// 2. fulfill : when the promise is resolved
// 3. reject : when the promise is rejected

// result
// 1. undefined : initially when it is in pending state
// 2. value : when it is fulfill state
// 3. error: when it is reject state
const promise = new Promise((resolve, reject) => {});

// executor function
function executor(resolve, reject) {}

const promise4 = new Promise((resolve, reject) => {
  // reject("rejecting")
  resolve("hello i am resolving");
  resolve("resolving"); //ignored it only return one state resolve or reject
});

// promise1
// .then(data => console.log(data))
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     console.log("finally")
// })

// in then state you can do 3 things
// 1. you can return another promise
// 2. you can return any other value
// 3. you can throw an error

// 1.

// const getUser = new Promise((resolve, reject) => {
//   const user = {
//     name: "John Doe",
//     email: "john@gmail.com",
//     password: "john123",
//   };

//   resolve(user);
// });

// getUser
//   .then((result) => {
//     console.log(result);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Bangladesh");
//       }, 2000);
//     });
//   })
//   .then((result) => console.log(result));


// ------------------------------------------------------
// 2.

//   getUser
//   .then((result) => {
//     console.log(result);

//     return result.email

//   })
//   .then(email => console.log(email))

// 3. 

// const promise401 = new Promise((resolve, reject) => {
//     reject("forbidden 404")
// })

// promise401
// .then(result => console.log(result))
// .catch(err => console.log(err))

const getPromise = (url) => {
  return fetch(url)
  .then(res => {
    if(!res){
      return new Error("Http error")
    }
    return res.json()
  })
}

const promise1 = getPromise('https://api.freeapi.app/api/v1/public/randomproducts');
const promise2 = getPromise('https://api.freeapi.app/api/v1/public/randomproducts');
const promise3 = getPromise('https://api.freeapi.app/api/v1/public/randomproducts');

// in this process if any api reject whole project is get error
// Promise.all([promise1, promise2, promise3])
// .then(result => console.log(result))
// .catch(error => console.log(error))

// it is more accurate 

// Promise.allSettled([promise1, promise2, promise3])
// .then(result => console.log(result))
// .catch(error => console.log(error))


// Promise.resolve() is same as
// const promise = new Promise(resolve => resolve(value))

// Promise.reject() is same as
// const promisee = new Promise((resolve, reject) => reject(error))


// How to cancel promise
// promise cant be cancelled

// function query(url, options) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(url, options)
//       .then(res => {
//         if(!res.ok){
//           return new Error `Http error ${res.status}`
//         }
//         return res.json()
//       })
//       .then(resolve)
//       .catch(error => console.log(error))
      
//     }, 2000);
//   })
// }

//  query('https://api.freeapi.app/api/v1/public/randomproducts')
//  .then(result => console.log(result.data.data))

const payment = true;
const mark = 76;

// 1️⃣ enrollment() returns a Promise
const enrollment = () => {
  return new Promise((resolve, reject) => {
    if (payment) {
      setTimeout(() => {
        console.log("Enrollment is complete. You can access the course.");
        resolve();
      }, 1000);
    } else {
      reject("Payment failed. Cannot access the course.");
    }
  });
};

// 2️⃣ progress() returns a Promise
const progress = () => {
  return new Promise((resolve, reject) => {
    if (mark > 70) {
      setTimeout(() => {
        console.log("You passed the exam. Your certificate is on the way.");
        resolve();
      }, 2000);
    } else {
      reject("You have failed in the exam.");
    }
  });
};

// 3️⃣ certificate() returns a Promise
const certificate = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("You got your certificate!");
      resolve();
    }, 3000);
  });
};

// 4️⃣ Chain them together
enrollment()
  .then(() => progress())
  .then(() => certificate())
  .catch((error) => console.error("❌ Error:", error));




