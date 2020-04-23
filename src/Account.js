function Account() {

  this._history = [];

}

Account.prototype.transactions = function(){
  return this._history;
};