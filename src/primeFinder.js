function PrimeFinder() {
  this.primes = [2];
}

PrimeFinder.prototype.isPrime = function(number) {
  if (number % 2 == 0 || number <= 1) return false;
    var limit = Math.floor(Math.sqrt(number));
    for (var i = 3; i <= limit; i+=2) {
      if(number % i == 0) return false;
    }
    return true;
}

PrimeFinder.prototype.getPrimes = function(request) {
  if (request == 1) {
    return this.primes;
  } else {
    var i = 3;
    while (this.primes.length < request) {
      if (this.isPrime(i)) {
        this.primes.push(i);
      }
      i++;
    }
  }
  return this.primes;
}
module.exports.PrimeFinder = PrimeFinder;
