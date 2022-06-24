/**
 * Previously, we had a telescopic constructor pattern. Too many arguments passing to it.
 *
 const Person = require('./Person')

 // Employees
 const sue = new Person('Sue', true, true, 60);
 const bill = new Person('Bill', true, false, 20);
 const phil = new Person('Phil', true, false);

 // Shoppers
 const charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
 const tabbitha = new Person('Tabbitha', false, false, 0, 1000);
 */

const PersonBuilder = require("./PersonBuilder");

// Employees
const sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
const bill = new PersonBuilder("Bill").makeEmployee().makePartTime().build();
const phil = new PersonBuilder("Phil").makeEmployee().build();

// Shoppers
const charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["jeans", "sunglasses"])
  .build();
const tabbitha = new PersonBuilder("Tabbitha").withMoney(1000).build();

console.log(sue.toString());
console.log(charles.toString());
