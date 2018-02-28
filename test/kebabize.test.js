const kebabize = require("../src/kebabize");

test.skip("hiThere should be split", function() {
  expect(kebabize("hiThere")).toEqual(["h", "i", "T", "h", "e", "r", "e"]);
});

test.skip(
  "Check for capitalized character and append " - " before it",
  function() {
    expect(kebabize("wWiiT")).toEqual("w-Wii-T");
  }
);

test("hiThere should be converted to hi-there", function() {
  expect(kebabize("hiThere")).toEqual("hi-there");
});

test("hiThereBruceWayne shuld be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toEqual("hi-there-bruce-wayne");
});

// write additional tests to ensure kebabize() works as expected
