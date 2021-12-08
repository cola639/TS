//object
let person0: { name: string } & { age: number }; //equal to let person: { name: string; age: number }
let person1: { name: string; age?: number }; // ?: mean choice
person1 = { name: "john", age: 18 };

//function
function sum0(a: number, b: number): number {
  return a + b;
}

let sum1 = (a: number, b: number): number => {
  return a + b;
};

const sum2 = (a: number, b: number): number => {
  return a + b;
};

//array
let array0: string[]; //equal to let array1 : Array<number>
array0 = ["1", "2"];

let array1: number[];

//enum
enum Gender {
  male,
  female,
}
let person: { name: string; gender: Gender };
person = {
  name: "John",
  gender: Gender.male,
};
