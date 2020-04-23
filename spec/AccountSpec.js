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

});