'use strict';

function Statement(history) {
  this._history = history;
  this._balance = 0;
}

Statement.prototype.printStatement = function() {
  this._balance = 0;
  return `date || credit || debit || balance\n`+`${this.addStatement()}`;
};

Statement.prototype.calculateBalance = function(credit, debit, balance) {
  return (credit > 0) ? this._balance = balance + credit : this._balance = balance - debit  
};

Statement.prototype.addStatement = function(){
  let reversedHistory = this._history.map(transaction => {
    let date = transaction._date;
    let credit = transaction._credit;
    let debit = transaction._debit;
    let current_balance = this.calculateBalance(credit, debit, this._balance)
    return `${date} || ${self.decimalFormat(credit)} || ${self.decimalFormat(debit)} || ${self.decimalFormat(current_balance)}\n`;
  });
  return reversedHistory.reverse().join("");
};

self.decimalFormat = function(number) {
 return (number === 0) ? number = "" : number = number.toFixed(2)
};

Statement.prototype.getBalance = function(){
  return this._balance;
};


