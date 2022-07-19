const stringLength = require("../task_1");

test("return the length of a string", () => {
  expect(stringLength("a")).toBe(1);
  expect(stringLength("abcdfejklmn")).toBe(false);
  expect(stringLength('')).toBe(false);
})