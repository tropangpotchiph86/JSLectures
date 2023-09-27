// && - lahat ng input ay true, kaya true
console.log(10 < 20 && 30 > 15 && 40 > 30);
// || - isa lang ang mag true, output is true
console.log(10 > 20 || 30 > 15 || 40 < 30);

// && - Will return first falsy value or the last value
let a;
a = 10 && 20; //20
a = 10 && 20 && 30; //30
a = 10 && 0 && 30; //0
a = 10 && '' && 0 && 30; //empty kasi '' ay falsy

console.log(a);
//use case
const posts = ['Post One'];
// console.log(posts[0]);
posts.length > 0 && console.log(posts[0]);
//laspag inaabuso sa react

// || - Will return the first truthy value or the last value
let b;

b = 10 || 20; // 10
b = 0 || 20; // 20
b = 0 || 20 || 30; //20
b = 0 || '' || null; // null
b = 0 || '' || null || undefined; // undefined

console.log(b);

// ?? - Nullish Coalescing
// - returns the right side operand when the left is null or undefined
let c;

c = 10 ?? 20; // 10
c = null ?? 20; // 20
c = undefined ?? 20; // 20
c = 0 ?? 20; // 0

console.log(c);
