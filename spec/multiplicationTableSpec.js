const MultiplicationTable = require('../src/multiplicationTable').MultiplicationTable;

describe ('MultiplicationTable', function() {
  var table;
  EXAMPLE_PRIMES_ARRAY1 = [2, 3, 5, 7, 11];
  EXAMPLE_PRIMES_ARRAY2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  beforeEach(function() {
    table = new MultiplicationTable();
  })

  it('outputs a 2D array', function() {
    expect(table.makeTable(EXAMPLE_PRIMES_ARRAY1)[2][1]).toEqual(6);
    expect(table.makeTable(EXAMPLE_PRIMES_ARRAY2)[9][9]).toEqual(529);
  })
})
