//Array Literal
const numbers = [12, 45, 33, 29, 39];

//Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

//Get value by index
x = numbers[3];
x = numbers[0] + numbers[3];

//utilize template literals with array
x = `My favorite fruit is an ${fruits[2]}`;

//length
x = numbers.length;

//change orange with pears
// fruits[2] = 'pear';

//length is not read only
// fruits.length = 2;

//adding fruits to our array (hardcoded)
fruits[3] = 'strawberry';

//use the length as the index and it will always add to the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';
fruits[fruits.length] = 'banana';

x = fruits;
console.log(x);
