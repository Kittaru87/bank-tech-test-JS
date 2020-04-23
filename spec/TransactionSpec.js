'use strict';

describe ('Transaction', function(){

  let transaction;

  beforeEach(function() {
    transaction = new Transaction();
  });

  it('defines a transaction class', function() {
    expect(transaction).toBeDefined();
  });

  // it('initializes with 0 credit', function(){
  //   expect(account.transactions()).toEqual([]);
  // });

  // it('initializes with 0 debit', function(){
  //   expect(account.transactions()).toEqual([]);
  // });

  // it('initializes with the current date', function(){
  //   expect(account.transactions()).toEqual([]);
  // });


});