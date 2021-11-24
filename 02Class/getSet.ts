let message: string = "hellow";
class MyClass {
  constructor() {}

  get prop() {
    return message;
  }

  set prop(value) {
    message = value;
  }
}

class ChildClass extends MyClass {
  constructor() {
    super();
    console.log(this.prop);

    // this.prop = 'hellow A';
  }
}
