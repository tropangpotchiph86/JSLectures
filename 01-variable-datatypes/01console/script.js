//Log a number
console.log(100);

// log a number
console.log('Hello World');

// log multiple values
console.log(20, 'Hello', true);

//Log a variable
const x = 100;
console.log(x);

// console error and warning
console.error('Alert');
console.warn('Warning');

// Group console Commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: blue; color:white';
console.log('%cHello World', styles);
