'use strict';

describe ('Statement', function(){

  let history = [{_credit: 50, _debit: 0, _date: '25/04/2020'}, {_credit: 0, _debit: 30, _date: '26/04/2020'}];
  let fullStatement = new Statement(history);

  it('prints a blank statement when no transactions have been made', function() {
    let statement = new Statement([]);
    spyOn(console, 'log').and.callThrough();
    expect(statement.printStatement()).toBe("date || credit || debit || balance\n");
  });
  
  it('adds amount to the balance', function() {
    fullStatement.calculateBalance(50, 0, 0);
    expect(fullStatement.getBalance()).toBe(50);
  })

  it('removes amount from the balance', function() {
    fullStatement.calculateBalance(0, 50, 0);
    expect(fullStatement.getBalance()).toBe(-50);
  })

  it('prints a statment', function() {
    expect(fullStatement.printStatement()).toBe("date || credit || debit || balance\n26/04/2020 ||  || 30.00 || 20.00\n25/04/2020 || 50.00 ||  || 50.00\n")
  });

});
