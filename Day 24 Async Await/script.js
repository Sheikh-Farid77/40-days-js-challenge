const marks = 70;
const payment = true;

const enroll = () => {
  return new Promise((resolve, reject) => {
    if (payment) {
      setTimeout(() => {
        console.log("Your payment is complete");
        resolve();
      }, 3000);
    } else {
      console.log("Payment failed");
      reject();
    }
  });
};

const isPassed = () => {
  return new Promise((resolve, reject) => {
    if (marks > 60) {
      setTimeout(() => {
        console.log("You pass the exam. Your certificate is in progress");
        resolve();
      }, 2000);
    } else {
      console.log("You failed in exam");
      reject();
    }
  });
};

const certificate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("You got your certificate");
      resolve();
    }, 1000);
  });
};

const completeCourse = async () => {
  try {
    await enroll();
    await isPassed();
    await certificate();
  } catch (error) {
    console.log(error.message);
  }
};

completeCourse();
