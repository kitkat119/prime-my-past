const MultiplicationTable = require('../src/multiplicationTable').MultiplicationTable;

describe ('MultiplicationTable', function() {
  var table;
  EXAMPLE_PRIMES_ARRAY1 = [2, 3, 5, 7, 11];
  EXAMPLE_PRIMES_ARRAY2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  EXPECTED_PRIMES_TABLE1 = [ [ ' ', 2, 3, 5, 7, 11 ],
                            [ 2, 4, 6, 10, 14, 22 ],
                            [ 3, 6, 9, 15, 21, 33 ],
                            [ 5, 10, 15, 25, 35, 55 ],
                            [ 7, 14, 21, 35, 49, 77 ],
                            [ 11, 22, 33, 55, 77, 121 ] ];

  beforeEach(function() {
    table = new MultiplicationTable();
  })

  it('outputs a 2D array of multiplied values', function() {
    expect(table.makeTable(EXAMPLE_PRIMES_ARRAY1)[2][1]).toEqual(6);
    expect(table.makeTable(EXAMPLE_PRIMES_ARRAY2)[9][9]).toEqual(529);
    expect(table.makeTable(EXAMPLE_PRIMES_ARRAY1)).toEqual(EXPECTED_PRIMES_TABLE1);
  })
})
