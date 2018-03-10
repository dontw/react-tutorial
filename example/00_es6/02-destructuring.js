log('example -- Destructuring');
var arr = [1, 2, 3];
var [a, b,c ,d='ddd'] = arr;
console.log(a, b,c,d);
var obj = { 
  name: 'milkmidi',
  age: 18,
  doge: 'wow'
};
var {name , age, doge='fuck'} = obj;
console.log(name , age, doge);