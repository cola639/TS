////1
function printLabel0(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj0 = { size: 10, label: "Size 10 Object" };
printLabel0(myObj0);

////2
interface LabelledValue {
  label: string;
}

function printLabel1(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj1 = { size: 10, label: "Size 10Object" };
printLabel1(myObj1);
