const calculator = require("../task_3");

it('test adding of two numbers', () => {
  expect(calculator.add()).toBe(0);
  expect(calculator.add(1,3)).toBe(4);
  expect(calculator.add(1,0,9)).toBe(10);
  expect(calculator.add(1,1,10,20,5,3)).toBe(40);
})

it('test adding of two numbers', () => {
  expect(calculator.subtract(1,3)).toBe(-2);
  expect(calculator.subtract(1,0,9)).toBe(-8);
  expect(calculator.subtract(20,19)).toBe(1);
})

it('test adding of two numbers', () => {
  expect(calculator.divide(6,3)).toBe(2);
  expect(calculator.divide(10,2)).toBe(5);
  expect(calculator.divide(100,20)).toBe(5);
})

it('test adding of two numbers', () => {
  expect(calculator.multiply(4,5)).toBe(20);
  expect(calculator.multiply(10,2)).toBe(20);
  expect(calculator.multiply(100,5)).toBe(500);
})