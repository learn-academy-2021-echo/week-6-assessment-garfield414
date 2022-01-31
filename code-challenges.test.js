// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals");
const { array } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe('makeSentences()', () => {
  it('should make a sentence of a first and last name including an occupation', () => {
    const result = [
      'Ford Prefect is a hitchhiker',
      'Zaphod Beeblebrox is president of the galaxy',
      'Arthur Dent is a radio employee'
    ];

    expect(makeSentences(people)).toEqual(result);
 });
});

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Loop through objects and transform them by name and occupation
// Split the object name by first and last name (we have to call substring to index from 1 to the end)
// Append the first and last name with occupation and make the sentence the correct

const makeSentences = (people) => {
  const newPeople = [];
  for (let i = 0; i < people.length; i++) {
    const [first, last] = people[i].name.split(' ').map(name => name[0].toUpperCase() + name.substring(1, name.length));
    const sentence = first + ' '  + last + ' is ' + people[i].occupation;
    newPeople.push(sentence);
  }
  return newPeople;
};

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('getRemainders()', () => {
  it('should make a new array of numbers with remainders', () => {
    const result1 = [2, 0, -1, 0];
    const result2 = [2, 1, -1];

    expect(getRemainders(hodgepodge1)).toEqual(result1);
    expect(getRemainders(hodgepodge2)).toEqual(result2)
 });
});

// b) Create the function that makes the test pass.

// Loop through the array and check if it's of type 'number'
// We're only concerned with numbers
// Then map each number by using the '%' operator 

const getRemainders = (arr) => {
  const numbers = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    }
  }

  return numbers.map(number => number % 3);  
};

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe('cubeSum()', () => {
  it('should cube all the values in an array and sum them up', () => {
    const [result1, result2] = [99, 1125];

    expect(cubeSum(cubeAndSum1)).toEqual(result1);
    expect(cubeSum(cubeAndSum2)).toEqual(result2);
 });
});

// b) Create the function that makes the test pass.

// Map all the values to be cubed (e.g., take every value and cube it)
// Take this array, and sum them up with reduce

const cubeSum = (arr) => {
  return arr.map(number => Math.pow(number, 3)).reduce((a, b) => a + b);
};