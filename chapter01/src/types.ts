let c: 1 | 2;

let d: number | string;
d = 2;
d = "2";

let e: unknown = "this is length";
let f: number = (e as string).length;

console.log(f);
