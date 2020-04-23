# Bank Tech Test 

Makers Week 10 Individual Challenges


[Specification](#Specification) | [Planning](#Planning) | [Installation instructions](#Installation-instructions) | [Running tests](#Running-tests) | [Further development](#Further-development) | [Tech stack](#Tech-stack)

## Specification
Write a program that can be used in the JavaScript console to simulate a user's interaction with their bank account.

### Requirements

* You should be able to interact with your code via =the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

* Given a client makes a deposit of 1000 on 10-01-2012
* And a deposit of 2000 on 13-01-2012
* And a withdrawal of 500 on 14-01-2012
* When she prints her bank statement she would see:

date || credit || debit || balance

14/01/2012 || || 500.00 || 2500.00

13/01/2012 || 2000.00 || || 3000.00

10/01/2012 || 1000.00 || || 1000.00

### Edge cases
* Should the user be able to withdraw money when they have 0 balance?

## Planning

### user stories
```
As a customer
So that I can save money
I want to be able to deposit money into my account

As a customer
So that I can spend my money
I want to be able to withdraw money from my account

As a customer
So I may have a better understanding of my financial outgoings
I want to be able to see a printed statement of my withdrawals and deposits (newest first)
```
### Model



## Installation instructions

* git clone https://github.com/Kittaru87/bank-tech-test-JS.git
* cd bank-tech-test
* npm init


## Running tests



### console test
```

```

## Further development



### Updated model

![Bank Tech Test Model 2](./public/bank-tt-model-2.jpg)



## Tech stack

**Language:** JavaScript

**Testing:** Jasmine

**Linting:** ESlint, simplecov (100% coverage)