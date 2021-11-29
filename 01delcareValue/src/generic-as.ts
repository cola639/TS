//generic
function identity<T>(arg: T): T {
  return arg;
}

//as
let someValue: unknown = "this is length";
let strLength: number = (someValue as string).length;
//equal to let strLength:number = <string>someValue

console.log(strLength);
