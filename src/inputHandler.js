function InputHandler(primeFinder) {
  this.primeFinder = primeFinder;
}

InputHandler.prototype.handleInput = function (input) {
  var primeFinder = this.primeFinder;
  var requestedNumber = parseInt(input);
  var primes = primeFinder.getPrimes(requestedNumber);
  return primes;
};
module.exports.InputHandler = InputHandler;
