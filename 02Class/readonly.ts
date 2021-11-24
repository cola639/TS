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

//equal to
class Octopus {
  readonly numberOfLegs: number = 8;

  // public readonly name: string;
  // constructor(theName: string) {
  //   this.name = theName;
  // }
  constructor(readonly name: string) {}
}
