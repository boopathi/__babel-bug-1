class X extends Error {
  constructor(message) {
    super(message);
    this.name = 'X';
    this.message = message;
  }
  static isX(err) {
    return err instanceof X;
  }
}

var a = new X();
console.log(X.isX(a)); // false
console.log(a instanceof X); // false
