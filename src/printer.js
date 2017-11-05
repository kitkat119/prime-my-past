function Printer() {
}
Printer.prototype.printTable = function (data) {
  data.forEach(function (row) {
    console.log(row.join(" | "));
  });
};
module.exports.Printer = Printer;
