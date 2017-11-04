const InputHandler = require('../src/inputHandler').InputHandler;

describe('InputHandler', function() {
  var inputHandler;
  var finderMock;

  finderMock = jasmine.createSpyObj('finderMock', ["getPrimes"]);

  beforeEach(function() {
    inputHandler = new InputHandler(finderMock);
  });

  it('handles the request to get the prime numbers', function() {
    inputHandler.handleInput()
    expect(finderMock.getPrimes).toHaveBeenCalled();
  });
});
