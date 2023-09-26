function parent() {
  const x = 100;

  function child() {
    const y = 200;
    console.log(x + y);
  }
  // console.log(y); //will result to an error because parent cannot access the variable of child
  child();
}

parent();

// yung child access nya yung variable ni parent
//yung parent hindi nya access yung variable ni child

//#####################################################
//Similar to blocks
if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
  // console.log(y);//This will result to error separate scope
}
