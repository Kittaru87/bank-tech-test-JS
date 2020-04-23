
function Transaction() {

  this._credit = 0
  this._debit = 0


};

Transaction.prototype.formatDate = function(){
  var dateFormat = require('dateformat');
  var now = new Date();
  dateFormat(now, "dd/mm/yy")
};

