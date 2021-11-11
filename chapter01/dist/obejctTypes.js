"use strict";
//object
let person0; //equal to let person: { name: string; age: number }
let person1;
person1 = { name: "john", age: 18 };
//function
function sum0(a, b) {
    return a + b;
}
let sum1 = (a, b) => {
    return a + b;
};
const sum2 = (a, b) => {
    return a + b;
};
//array
let array0;
array0 = ["1", "2"];
let array1; //equal to let array1 : Array<number>
//enum
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
let person;
person = {
    name: "John",
    gender: Gender.male,
};
let first;
let second;
first = "123";
second = 123;
//# sourceMappingURL=obejctTypes.js.map