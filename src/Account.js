function Account(transaction = new Transaction()) {

  this._history = [];
  this._transaction = transaction;
}

Account.prototype.transactions = function(){
  return this._history;
};