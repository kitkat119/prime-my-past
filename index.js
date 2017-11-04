var rl = require('readline');
const PrimeFinder = require('./src/primeFinder').PrimeFinder;
const InputHandler = require('./src/inputHandler').InputHandler;
const InputChecker = require('./src/inputChecker').InputChecker;
const MultiplicationTable = require('./src/multiplicationTable').MultiplicationTable;
const Printer = require('./src/printer').Printer;

var read = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});


var startProgram = function() {
  read.question("How many primes do you want?(minimum of 1)", function (input) {
    if (new InputChecker().isValid(input)) {
      read.close();
      console.log("Ok, here's your table of the first " + input + " prime numbers:");
      var inputHandler = new InputHandler(new PrimeFinder());
      var primes = inputHandler.handleInput(input);
      var mTable = new MultiplicationTable();
      var tableData = mTable.makeTable(primes);
      var printer = new Printer();
      printer.printTable(tableData);
    } else {
      console.log("Invalid request, try entering a number again.");
      startProgram();
    }
  });
}
startProgram();
