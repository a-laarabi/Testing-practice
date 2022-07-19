const say = require("../say");

test("say Jest Message", () => {
  expect(say()).toBe("Hello Jest");
});