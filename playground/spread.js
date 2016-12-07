// function add(a,b){
//   return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];
// console.log(add(...toAdd));

var groupA = ['Jen','Cory'];
var groupB = ['Vikram'];
var final = [...groupB,3, ...groupA];

console.log(final);

var name =['Mike','Ben'];
var final = ['Andrew',...name];

final.forEach(function(name){
  console.log('Hi ' + name);
});
