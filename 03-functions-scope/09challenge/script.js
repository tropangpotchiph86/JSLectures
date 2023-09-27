// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius.toFixed(2);
// }

const getCelsius = (f) => (((f - 32) * 5) / 9).toFixed(2);

console.log(`The temp is ${getCelsius(35)} \xB0C `);

//Challenge 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }

//Arrow function
const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});

console.log(minMax([1, 2, 3, 4, 5]));

//Challenge 3

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);

//refactored (one liner)
((length, width) =>
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }.`
  ))(20, 10);
