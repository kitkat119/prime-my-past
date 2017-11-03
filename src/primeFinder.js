function PrimeFinder() {

}

PrimeFinder.prototype.isPrime = function(number) {
  if (number % 2 == 0) return false;
    var limit = Math.floor(Math.sqrt(number));
    for (var i = 3; i <= limit; i+=2) {
      if(number % i == 0) return false;
    }
    return true;
}
module.exports.PrimeFinder = PrimeFinder;
