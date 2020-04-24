'use strict';

describe ('Transaction', function(){

  let transaction;

  beforeEach(function() {
    transaction = new Transaction();  
  });

  it('defines a transaction class', function() {
    expect(transaction).toBeDefined();
  });
  
  it('initializes with the current date', function(){
    var baseTime = new Date(2020, 4, 24);
    jasmine.clock().mockDate(baseTime);
    expect(self.getDate()).toBe('24/4/2020')
  });

});