function InputChecker() {
  this.value = true;
}

InputChecker.prototype.isValid = function(number) {
  if ( number < 1 || isNaN(number) || number % 1 != 0 || !isFinite(number)) this.value = false;
   return this.value;
}
module.exports.InputChecker = InputChecker;
