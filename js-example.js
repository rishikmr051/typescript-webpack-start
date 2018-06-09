// Higher order function : function that returns another function

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
