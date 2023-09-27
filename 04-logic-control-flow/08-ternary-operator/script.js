const age = 19;

//Using an if statement
if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You cannot vote');
}

//Using a ternary operator
//condition ? valueIfTrue : valueIfFalse
age >= 18 ? console.log('You can vote!') : console.log('You cannot vote');

//Multiple Statements
const auth = true;
// let redirect;

//Long version
// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

//Shorter Version utilizing ternary
// const redirect = auth
//   ? (alert('welcome to the dashboard'), '/dashboard')
//   : (alert('Access Denied'), '/login');

auth && console.log('Welcome to the dashboard');

// console.log(redirect);
