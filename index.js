const PrimeFinder = require('./src/primeFinder').PrimeFinder;
const InputHandler = require('./src/inputHandler').InputHandler;

function startProgram() {
  var inputHandler = new InputHandler(new PrimeFinder());
  inputHandler.handleInput();
}
startProgram();
