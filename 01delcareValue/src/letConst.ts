//let const
// if assign value and type at the same time,will auto check typeof a
//let a: number = 10 等于 let a= 10;
let a: number = 10; //let asign not must have value
a = 123;
// a = "123";not number complain

const b: number = 10; //const asign must must have value

//function
// 1.function sum(a: number, b: number): number {
//   return a + b;
// }

//2.
const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(100, 100));
