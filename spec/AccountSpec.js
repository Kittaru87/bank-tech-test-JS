'use strict';

describe ('Account', function(){

  let account;

  beforeEach(function() {
    account = new Account();
  });

  it('defines an account class', function() {
    expect(account).toBeDefined();
  });

  it('has no transaction history by default', function(){
    expect(account.transactions()).toEqual([]);
  });

  it('can deposit money by adding a transaction to the history array', function(){
    account.deposit(50.00)
    expect(account.transactions().length).toEqual(1);
  });

  it('can withdraw money by adding a transaction to the history array', function(){
    account.withdraw(50.00)
    expect(account.transactions().length).toEqual(1);
  });

  it('can print a summary', function(){
    expect(account.summary()).toContain("date || credit || debit || balance\n");
  });

});
