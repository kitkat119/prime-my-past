function Printer() {
}
Printer.prototype.printTable = function (data) {
  var lastNumberInTable = data[data.length-1][data.length-1];
  var sizeOfCell = lastNumberInTable.toString().length;
  for(i=0; i < data.length; i ++) {
    var row = data[i];
    for(j = 0; j < row.length; j++) {
      var extraLengthNeeded = sizeOfCell - row[j].toString().length;
      var cell = row[j].toString();
      cell + " ".repeat(extraLengthNeeded);
    }
    console.log(row.join(" | "));
  }
};
module.exports.Printer = Printer;
