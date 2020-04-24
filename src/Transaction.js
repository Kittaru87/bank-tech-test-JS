'use strict';

function Transaction(credit, debit) {
  this._credit = credit
  this._debit = debit
  this._date = self.getDate()
}

self.getDate = function() {
  let date = new Date();
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  return `${day}/${month}/${year}`
};
