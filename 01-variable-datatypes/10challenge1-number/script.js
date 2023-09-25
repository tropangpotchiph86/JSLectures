const myString = 'developer';

// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// The `.toUpperCase()` method will make the entire string uppercase

// const myNewString = myString[0].toUpperCase() + myString.substring(1);

// 3. `substring()` or `slice()` will return a specific portion of a string

const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);
