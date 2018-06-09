// Higher order function : function that returns another function

// Closure, Spread operator (...someObject), context, call, apply, bind, Hoisting, 
// let, const


function parent() {
 let a =10;
  return function () {
    a = a + 1;
   console.log(a );
  }
  
}

const inner1 = parent();
innner1();

const inner2 = parent();
innner2();
innner1();


**************************************************
**************************************************
**************************************************
 
const a = {}
const b = a;
b.prop1 = "something";
console.log(a);
// this logs same b object -> something
