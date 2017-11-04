var rl = require('readline');

var read = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

function InputHandler(primeFinder) {
  this.primeFinder = primeFinder;
}

InputHandler.prototype.handleInput = function() {
  var primeFinder = this.primeFinder;
  read.question("How many primes do you want?(minimum of 1)", function (value) {
    if (value > 0) {
      read.close();
      console.log("Ok, here's your table of the first " + value + " prime numbers:");
      var requestedNumber = parseInt(value);
      var primes = primeFinder.getPrimes(requestedNumber);
      console.log(primes);
    } else {
      console.log("Invalid request, try entering a number again.");
      this.handleInput();
    }
});
}

module.exports.InputHandler = InputHandler;
