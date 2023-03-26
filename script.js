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

// const calcTempRange = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);

//   const range = max - min;
//   console.log(range);
// };

// calcTempRange(temperatures1);

// PROBLEM 2

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// const calcTempRangeNew = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);

//   const rangeNew = max - min;
//   console.log(rangeNew);
// };

// calcTempRangeNew(temperatures1, temperatures2);

// Debugging
// PROBLEM 1
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees Celsius:')),
//   };

//   const kelvin = measurement.value + 273;
//   console.table(measurement);
//   return kelvin;
// };
// console.log(measureKelvin());

// console.warn > turns whatever you input into a warning
// console.error > turns whatever you input into an error
// console.table > turns whatever you input into a table showing the type of values for each input.

// IDENTIFY
// The console returned the concatonated string value.
// Console logging 'measurement.value' results in the correct value but console.logging 'measurement' shows that the type of value for 'value' is a string.

// FIND
// Line 98/99

// FIX
// measurement.value becomes parseInt(measurement.value) OR better yet, parseInt the value of the 'value' key to be DRY. I can also use Number()

// PREVENT
// No repeat appareances. Make sure to ParseInt any value from prompts.

// PROBLEM 2 >>> Using a Debugger
// const calcTempRangeBug = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);

//   const rangeNew = max - min;
//   console.log(rangeNew);
// };

// calcTempRangeBug(temperatures1, temperatures2);

// IDENTIFY
// Set breakpoint when values are being processed (Line 133 and 134). Found out that 0 is being considered as a value to be compared. 0 is not present in the array.

// FIND
// Line 126/127

// FIX
// Include values to be compared only present in the array. Instead of 0 for each, it should be temps[0]

// PREVENT
// Error was repeated on line 127. I can include debugger command above.
