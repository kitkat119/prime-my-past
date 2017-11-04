const pF = require('../src/primeFinder');
const PrimeFinder = pF.PrimeFinder;

describe('PrimeFinder', function() {
  var primeFinder;
  EXAMPLE_PRIME1 = 31;
  EXAMPLE_PRIME2 = 7;
  EXAMPLE_NON_PRIME1 = 4;
  EXAMPLE_NON_PRIME2 = 526;
  EXAMPLE_NON_PRIME_ONE = 1;
  EXAMPLE_NON_PRIME_NEGATIVE = -5;
  EXAMPLE_REQUEST = 10;

  beforeEach(function() {
    primeFinder = new PrimeFinder();
  });

  it('has an array of primes', function() {
    expect(primeFinder.primes).toEqual([2]);
  });

  describe('isPrime', function() {
    it('returns true if a number is prime', function() {
      expect(primeFinder.isPrime(EXAMPLE_PRIME1)).toEqual(true);
      expect(primeFinder.isPrime(EXAMPLE_PRIME2)).toEqual(true);
    });

    it('returns false for number 1', function() {
      expect(primeFinder.isPrime(EXAMPLE_NON_PRIME_ONE)).toBe(false);
    });

    it('returns false for a negative number', function() {
      expect(primeFinder.isPrime(EXAMPLE_NON_PRIME_NEGATIVE)).toBe(false);
    });

    it('returns false if a number is not prime', function() {
      expect(primeFinder.isPrime(EXAMPLE_NON_PRIME1)).toBe(false);
      expect(primeFinder.isPrime(EXAMPLE_NON_PRIME2)).toBe(false);
    });
  });

  describe('getPrimes', function() {
    it("returns an array of n primes", function() {
      expect(primeFinder.getPrimes(EXAMPLE_REQUEST)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
    });
  });
});
