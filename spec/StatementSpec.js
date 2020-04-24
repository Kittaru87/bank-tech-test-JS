'use strict';

describe ('Statement', function(){

  let deposit = jasmine.createSpyObj('transaction', {_credit: 50, _debit: 0, _date: '25/04/2020'});
  let withdraw = jasmine.createSpyObj('transaction', {_credit: 0, _debit: 30, _date: '26/04/2020'});
  let history = [deposit, withdraw];
  let statement = new Statement(history);

  // beforeEach(function() {
  //   statement = new Statement(history);
  // });

  // it('prints a blank statement when no transactions have been made', function() {
  //   statement = new Statement(history);
  //   spyOn(console, 'log').and.callThrough();
  //   expect(statement.printStatement()).toBe("date || credit || debit || balance\n");
  // });

  it('prints a statment', function() {
    expect(statement.printStatement()).toBe("date || credit || debit || balance\n25/04/2020 || 50.00 || || 50.00\n26/04/2020 || || 30.00 || 22.00\n")
  });


});
