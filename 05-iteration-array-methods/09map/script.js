// const numbers = [1, 2, 3, 4, 5];

//double

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

//##############################
// const numberLabel = numbers.map((number) => 'Number ' + number);
// console.log(numberLabel);

//##############################
//double the number using foreach
// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });

// console.log(doubledNumbers2);

//##############################

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

//create an array company name and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
// console.log(companyInfo);

//Create an array of objects with the name and the length of each company in years

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});
console.log(companyYears);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//chain map methods
//square root of a number
// const sqrrt = numbers.map((number) => Math.sqrt(number));
// console.log(sqrrt);

//squareroot and double the numbers
// const sqrrtAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);
// console.log(sqrrtAndDouble);

//chaining again - limiting to 2 decimal places
const sqrrtAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2)
  .map((result) => parseFloat(result.toFixed(2)));
console.log(sqrrtAndDouble);

const sqrrtAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (result) {
    return parseFloat(result.toFixed(2));
  });
console.log(sqrrtAndDouble2);

//you can also chain other  methods
//get even numbers then double it

// const evenDouble = numbers.filter((number) => number % 2 === 0);
// console.log(evenDouble);
// after getting the even numbers, we will chain a map method to double the number:

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);
