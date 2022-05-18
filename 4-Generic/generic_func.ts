// generic before used
function identity(arg: number): number {
  return arg
}

function identity(arg: any): any {
  return arg
}

// generic after used
function identity<T>(arg: T): T {
  return arg
}

// generic Array error
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length) // Error: T doesn't have .length
  return arg
}

// generic Array params
function loggingIndentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// equal to
function loggingIndentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}
