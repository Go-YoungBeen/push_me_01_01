/* problem01.test.js */
const manageVariables = require("./problem01");

describe("problem01", () => {
  test("a", () => {
    const { a } = manageVariables();
    expect(a).toBe(2);
  });
  test("b", () => {
    const { b } = manageVariables();
    expect(b).toBe(20);
  });
  test("c", () => {
    const { c } = manageVariables();
    expect(c).toBe(200);
  });
  test("no error", () => {
    expect(() => manageVariables()).not.toThrow();
  });
  test("types", () => {
    const result = manageVariables();
    expect(typeof result.a).toBe("number");
    expect(typeof result.b).toBe("number");
    expect(typeof result.c).toBe("number");
  });
});
