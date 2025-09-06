// ## 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
// Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celToFahr(value) {
  const celsius = (value * 9) / 5 + 32;

  return celsius;
}

const result = celToFahr(49);
// console.log(result)

// ## 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

const find = findMax(2, -3);
// console.log(find)

// ## 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

function isPalindrome(str) {
  const palindrome = str.split("").toReversed().join("");

  if (str === palindrome) {
    console.log(`${str} is palindrome`);
  } else {
    console.log(`${str} is not palindrome`);
  }
}

// isPalindrome('man')

// ## 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n.
// Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(value) {
  let result = 1;

  for (let i = 1; i <= value; i++) {
    result = result * i;
  }
  console.log(result);
}

// factorial(3)

// ## 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  let result = 0;
  const strArr = str.toLowerCase().split("");

  for (let i = 0; i <= strArr.length - 1; i++) {
    if (strArr[i] === "a" || 
        strArr[i] === 'e' ||
        strArr[i] === 'i' ||
        strArr[i] === 'o' ||
        strArr[i] === 'u'
    ) {
      result++;
    }
  }
  console.log(result);
}

// countVowels("apple");

// ## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords (sentence) {
    const arr = sentence.split(' ');
    const capitalizeArr = []

    for(let i = 0; i <= arr.length - 1; i++){
       const result =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
     capitalizeArr.push(result)
    }

    console.log(capitalizeArr.join(' '))


}

// capitalizeWords('we the people of bangladesh')

// ## 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using parameter and argument.

(function (value) {
    console.log('Hello,', value)
})('Javascript')

// ## 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.

function greet (name, callback) {
    callback(name)
}

greet('sagor', function (name) {
    console.log(`hello ${name}, how are you?`)
})



