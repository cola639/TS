//option param
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + "" + lastName;
  else return firstName;
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");
let result3 = buildName("Bob", "Adams", "Sr."); //error:too many parameters
