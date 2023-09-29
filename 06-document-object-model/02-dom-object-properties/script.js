let output;
// document.all;
// output = document.all;
// output = document.all[11];
// output = document.all.length;

// //Everything in the html tags
// output = document.documentElement;

// //Head and Body tags
// output = document.head;
// output = document.body;

// //HTML Collection of everything in head/body
// output = document.head.children;
// output = document.body.children;

// //Random properties
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// //Get all Forms
// output = document.forms; //HTML Collection of forms
// output = document.forms[0];

// //specific attributes
// output = document.forms[0].id;
// output = document.forms[0].method; //get| post if you want to save
// output = document.forms[0].action; //saan sya nasusubmit

// document.forms[0].id = 'new-id';

// //Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList; //DOM Token List

// //Get all images
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// document.forms.forEach((form) => console.log(form)); //error
//dahil ang document. ay array like, hindi gagana ang foreach html collection (arraylike)
//gagana lang ang for each node list
//convert mo muna sa array

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

// console.log(output);
