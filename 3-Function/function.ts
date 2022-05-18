// function type Named
function add(x, y) {
  return x + y
}

// function type Anonymous
let myAdd = function (x, y) {
  return x + y
}

// function usage `params value & return value`
function add(x: number, y: number): number {
  return x + y
}

let myAdd: (x: number, y: number) => number

let myAdd = function (x: number, y: number): number {
  return x + y
}
