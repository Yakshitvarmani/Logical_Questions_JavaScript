// //JavaScript program to swap two variables
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

//JavaScript program to swap two variables
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));
a = a + b;
b = a - b;
a = a - b;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);