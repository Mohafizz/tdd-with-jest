const fizzbuzz = require("../src/fizzbuzz");

test("Multiple of 3 should return 'fizz'", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});

test("Mulitiple of 5 should return 'buzz'", function() {
  expect(fizzbuzz(5)).toEqual("buzz");
});

test("Multiple of 15 should return 'fizzbuzz'", function() {
  expect(fizzbuzz(15)).toEqual("fizzbuzz");
});

test("4 should return undefined", function() {
  expect(fizzbuzz(4)).toEqual(undefined);
});
