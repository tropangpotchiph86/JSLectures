// const user = 'Ryan';

//Basic Syntax of IIFE
(function () {
  const x = 10;
  console.log(x);
})();

//Utilizing IIFE on the scenario of the user
(function () {
  const user = 'Ryan';
  console.log(user);
  const hello = () => console.log('Hello from IIFE');
  hello();
})();
// hello();//error kasi sa scope dapat sya ng IIFE

//named function
(function hello() {
  console.log('Hello from named function');
})();
hello();
