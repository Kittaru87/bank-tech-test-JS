'use strict';

function Account() {
  this._history = [];
  this.statement = new Statement(this._history)
}

Account.prototype.transactions = function(){
  return this._history;
};

Account.prototype.deposit = function(amount){
  this._history.push(new Transaction(amount, 0))
};

Account.prototype.withdraw = function(amount){
  this._history.push(new Transaction(0, amount))
};

Account.prototype.summary = function(){
  return this.statement.printStatement();
};
