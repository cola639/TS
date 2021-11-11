"use strict";
//let const
// if assign value and type at the same time,will auto check typeof a
//let a: number = 10 等于 let a= 10;
let a = 10; //not must
a = 123;
const b = 10; //must
// a = "123";not number complain
//function
// function sum(a: number, b: number): number {
//   return a + b;
// }
const sum = (a, b) => {
    return a + b;
};
console.log(sum(100, 100));
//# sourceMappingURL=letConst.js.map