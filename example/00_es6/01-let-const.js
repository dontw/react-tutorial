log('example -- Let + Const');
var myVar = 1;
myVar = 2;
console.log(myVar);

let myLet = 2;
myLet = 3;
console.log(myLet);

function foo(){
  var x = 0;
  {
    {let x = 'doge'}
    let x = 'foo';
    // var x = 'foo';
  }
  console.log('foo x:', x);
}
foo();

const myConst = 3;
// myConst = 4;  // Error, const is ready-only
console.log(myConst);