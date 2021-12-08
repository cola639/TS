//usage
function identity<T>(arg: T): T {
  return arg;
}

let output = identity("myString"); // type of output will be 'string'
