//  ## 1. Odd or Even?
//  - [ ] Take a number and find if the number is an odd or even number.
//  - [ ] Print the number and result in the console.

function isOddEven(value) {
  if (value % 2 === 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
}

// ## 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving license is 18 years.

// - [ ] Manage `age` as a variable.
// - [ ] Check if the age is eligible for a driving license and print it on the console accordingly.

function isEligibleForLicense(age) {
  if (age >= 18) {
    console.log("Eligible For License");
  } else {
    console.log("Not eligible for License");
  }
}

// ## 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

// - [ ] You get 12,300 rupees as your monthly salary.
// - [ ] You get a 20% bonus on your annual salary.
// - [ ] How much money do you make per annum as a CTC?

const AllEarning = (salary) => {
  const earning = (salary * 12 * 20) / 100 + salary * 12;
  console.log(earning);
};

// ## 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveler needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

function trafficSignal(color) {
  if (color === "red") {
    console.log("STOP");
  } else {
    console.log("GO");
  }
}

// ## 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

// - [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
// - [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
// - [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

function billCalculator(units) {
  const monthlyBill = units * 30 * 150;
  const annualBill = monthlyBill * 12 - (monthlyBill * 12 * 20) / 100;

  console.log(
    `Monthly bill is ${monthlyBill} and annually bill is ${annualBill}`
  );
}

// ## 6. Leap Year Checker
// Is 2025 a Leap Year?

// - [ ] Take `year` as input.
// - [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

function isLeapYear(year) {
  if (year % 400 === 0) {
    console.log("Leap year");
  } else if (year % 100 === 0) {
    console.log("Not Leap year");
  } else if (year % 4 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not Leap year");
  }
}

// ## 7. Max of Three Numbers
// Find the max number from the lot.

// - [ ] Take three numbers and assign them to variables p, q, and r.
// - [ ] Now find the maximum of these three numbers using the comparison operators.

function maxValue(x, y, z) {
  if (x > y) {
    if (x > z) {
      console.log(`Max number is ${x}`);
    } else {
      console.log(`Max number is ${z}`);
    }
  } else {
    if (y > z) {
      console.log(`Max number is ${y}`);
    } else {
      console.log(`Max number is ${z}`);
    }
  }
}


