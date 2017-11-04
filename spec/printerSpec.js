const Printer = require('../src/printer').Printer;

describe('Printer', function() {
  var printer;
  EXAMPLE_DATA = [[" ", 2, 3, 5, 7],
                  [2, 4, 6, 10, 14],
                  [3, 6, 9, 15, 21],
                  [5, 10, 15, 25, 35],
                  [7, 14, 21, 35, 49]]

  beforeEach(function() {
    printer = new Printer();
  });

  it('prints the data in a table format', function() {
    it('is my test', function () {
    spyOn(console, 'log');
    printer.printTable(EXAMPLE_DATA);
    expect(console.log).toHaveBeenCalledWith([" |2 |3 |5 |7", "|2 |4 |6 |10 |14", "|3 |6 |9 |15 |21", "|5 |10 |15 |25 |35", "|7 |14 |21 |35 |49"]);
    });
  });
});
