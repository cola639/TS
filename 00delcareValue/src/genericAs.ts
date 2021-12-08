//generic function
function identity<T>(arg: T): T {
  return arg;
}

identity(10);
identity<number>(10);

function identity<T, K>(a: T, b: K): K {}

identity<number.string>(10, "hello");

class MyClass<T> {
  prop: T;

  constructor(props: T) {
    this.prop = prop;
  }
}

interface MyInter {
  length: number;
}
function identity<T extends MyInter>(arg: T): number {
  return arg.length;
}

//as
let someValue: unknown = "this is length";
let strLength: number = (someValue as string).length;
//equal to let strLength:number = <string>someValue

let strLength: number = <string>someValue;

console.log(strLength);
