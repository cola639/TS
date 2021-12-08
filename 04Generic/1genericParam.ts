//genericParam
function loggingIndentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

//equal to
function loggingIndentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}