// console.log("start")
// setTimeout(() => {
//     console.log("Waiting is over")
// }, 2000)

// console.log("End")

// callback pattern

// function one (callback) {
//     callback();
// }

// one(() => {
//     console.log("hello")
// })

const payment = true;
const mark = 76;

const enrollment = (callback) => {
  if (payment) {
    setTimeout(() => {
      console.log("Enrollment is complete You can access the course");
      callback();
    }, 1000);
  } else {
    console.log("Payment failed Can not access the course");
  }
};

const progress = (callback) => {
  if (mark > 70) {
    setTimeout(() => {
      console.log("You passed the exam. Your certificate is on the way");
      callback();
    }, 2000);
  } else {
    console.log("You have Failed in the exam");
  }
};

const certificate = () => {
  setTimeout(() => {
    console.log("You got your certificate");
  }, 3000);
};

enrollment(() => {
  progress(() => {
    certificate();
  });
});
