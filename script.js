// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// console.log('Hello World');

//Calculate temperature altitude
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [
  -13,
  -5,
  60,
  -2,
  'error',
  9,
  'error',
  17,
  15,
  'error',
  9,
  -14,
];

// 1) Understand the problem
// - What is temperature amplitude? Ans: = range
// - How to assess smallest and biggest values in an array?
// - How will sensor error affect my solution? Ans: Has to be skipped
//// - Manager now asks for the function to take two arrays! Should I implement second function to do the same thing a second time? NO.

// 2) Break the problem into sub-problems
// - How to ignore errors?
// - Find max and min values in temperatures array. REQUIRES RESEARCH! DONE
// - Subtract one from the other. DONE
//// - Find way to allow function to take two arrays. Perhaps two paramaters? Perhaps two arguments? Merge into one array then split up again?

// PROBLEM 1

const calcTempRange = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  const range = max - min;
  console.log(range);
};

calcTempRange(temperatures1);

// PROBLEM 2

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

const calcTempRangeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  const rangeNew = max - min;
  console.log(rangeNew);
};

calcTempRangeNew(temperatures1, temperatures2);
