// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error:' + error);
// }

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }
  return number * number;
}

try {
  const y = double(75);
  console.log(y);
} catch (error) {
  console.log(error);
}

//95 - 5 = 9025
