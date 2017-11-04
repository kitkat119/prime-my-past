const InputChecker = require('../src/inputChecker').InputChecker;

describe('InputChecker', function() {
  var inputChecker;
  VALID_REQUEST = 10;
  INVALID_DECIMAL = 4.5;
  INVALID_NAN = 'k';
  INVALID_NEGATIVE = -8;

  beforeEach(function() {
    inputChecker = new InputChecker();
  })

  it("outputs true if the request is valid", function() {
    expect(inputChecker.isValid(VALID_REQUEST)).toEqual(true);
  })

  it("outputs false if the request is not valid", function() {
    expect(inputChecker.isValid(INVALID_DECIMAL)).toEqual(false);
    expect(inputChecker.isValid(INVALID_NAN)).toEqual(false);
    expect(inputChecker.isValid(Infinity)).toEqual(false);
    expect(inputChecker.isValid(0)).toEqual(false);
    expect(inputChecker.isValid(INVALID_NEGATIVE)).toEqual(false);
  })
})
