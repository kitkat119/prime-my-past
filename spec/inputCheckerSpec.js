const InputChecker = require('../src/inputChecker').InputChecker;

describe('InputChecker', function() {
  var inputChecker;
  VALID_REQUEST = 10;
  INVALID_DECIMAL = 4.5;
  INVALID_NAN = 'k';
  INVALID_NEGATIVE = -8;

  beforeEach(function() {
    inputChecker = new InputChecker();
  });

  it("outputs true if the input is valid", function() {
    expect(inputChecker.isValid(VALID_REQUEST)).toEqual(true);
  });

  it("outputs false if the input is a decimal number", function() {
    expect(inputChecker.isValid(INVALID_DECIMAL)).toEqual(false);
  });

  it("outputs false if the input is NaN", function() {
    expect(inputChecker.isValid(INVALID_NAN)).toEqual(false);
  });

  it("outputs false if the input is infinity", function() {
    expect(inputChecker.isValid(Infinity)).toEqual(false);
  });

  it("outputs false if the input is zero", function() {
    expect(inputChecker.isValid(0)).toEqual(false);
  });

  it("outputs false if the input is a negative number", function() {
    expect(inputChecker.isValid(INVALID_NEGATIVE)).toEqual(false);
  });

});
