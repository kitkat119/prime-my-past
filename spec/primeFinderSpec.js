const PF = require('../src/primeFinder');
const PrimeFinder = PF.PrimeFinder;

describe('PrimeFinder', function() {
  var primeFinder;

  beforeEach(function() {
    primeFinder = new PrimeFinder();
    EXAMPLE_PRIME1 = 31;
    EXAMPLE_PRIME2 = 7;
    EXAMPLE_NON_PRIME1 = 4;
    EXAMPLE_NON_PRIME2 = 526;
  })

  it('outputs true if a number is prime', function() {
    expect(primeFinder.isPrime(EXAMPLE_PRIME1)).toEqual(true);
    expect(primeFinder.isPrime(EXAMPLE_PRIME2)).toEqual(true);
  })

  it('outputs false if a number is not prime', function() {
    expect(primeFinder.isPrime(EXAMPLE_NON_PRIME1)).toBe(false);
    expect(primeFinder.isPrime(EXAMPLE_NON_PRIME2)).toBe(false);
  })
})
