//boolean
let isTrue: boolean = true;

//number
let a: number = 10; //equal to let a = 10; ///** if assign value and type at the same time,will auto check typeof a  */
let a: number; //let asign not must have value
a = 123;

const b: number = 10; //const asign must must have value

//string
let name: string = "bob";
name = "smith";

//array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

//function
// 1.
function sum(a: number, b: number): number {
  return a + b;
}

//2.
const sum = (a: number, b: number): number => {
  return a + b;
};

//Tuple
let x: [string, number];
x = ["hello", 10];
