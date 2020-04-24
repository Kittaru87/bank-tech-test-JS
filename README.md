# Bank Tech Test 

Makers Week 10 Individual Challenges


[Specification](#Specification) | [Planning](#Planning) | [Installation instructions](#Installation-instructions) | [Running tests](#Running-tests) | [Run-through](#Run-through) [Challenges](#challenges) | [Tech stack](#Tech-stack)

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

I am using the same model I used as my final development stage for the bank tech test in Ruby. I am interested to know if I can use the same structure in Javascript as I have done in Ruby and what the differences will be between the code.

![Bank Tech Test Model 2](./public/bank-tt-model-2.jpg)


## Installation instructions

* git clone https://github.com/Kittaru87/bank-tech-test-JS.git
* cd bank-tech-test
* npm init


## Running tests
* Open `SpecRunner.html` in your browser


## Run-through
![Console test](./public/console-test.jpg)

## Challenges
* Figuring out how to format the date has been tricky. I initially used npm to install the node.js package 'dateformat' but had difficulties getting that to work properly. I have eventually settled for something I've constructed. It could probably do with being refactored.
* Trickier to work out how to reset the balance back to 0 once the statement has been printed than in Ruby. Decided to keep an initialized balance of 0 in the Statement class that reverts back to 0 once the printStatement method has been called.


## Tech stack

**Language:** JavaScript

**Testing:** Jasmine

**Linting:** ESlint, simplecov (100% coverage)