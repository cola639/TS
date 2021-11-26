class Octopus {
  //public name:string no error
  public readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man Strong");
dad.name = "Man with the 3-piece suit"; // error

class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}

  //equal to
  // public readonly name: string;
  // constructor(theName: string) {
  //   this.name = theName;
  // }
}
