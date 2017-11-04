function MultiplicationTable() {
}

MultiplicationTable.prototype.makeTable = function(primes) {
  var table = [];
  var row1 = [1].concat(primes);
  table.push(row1);
  for(var i = 1; i < row1.length; i++) {
    var row2 = new Array(row1.length);
    for(var j = 0; j < row1.length; j++) {
      row2[j] = row1[i] * row1[j];
    }
    table.push(row2);
  }
  table[0][0] = " ";
  return table;
}
module.exports.MultiplicationTable = MultiplicationTable;
