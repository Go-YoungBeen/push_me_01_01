/* problem03.test.js */
const compareOps = require("./problem03");

describe("problem03", () => {
  test("looseEqual(5, '5') => true", () => {
    const { looseEqual } = compareOps(5, "5");
    expect(looseEqual).toBe(true);
  });
  test("strictEqual(5, '5') => false", () => {
    const { strictEqual } = compareOps(5, "5");
    expect(strictEqual).toBe(false);
  });
  test("notEqual(5, '5') => true", () => {
    const { notEqual } = compareOps(5, 10);
    expect(notEqual).toBe(true); // 🚨 현재 문제: 코드가 `a == b`로 작성되어 통과함.
  });
  test("greater(10, 5) => true", () => {
    const { greater } = compareOps(10, 5);
    expect(greater).toBe(true);
  });
  test("less(5, 10) => true", () => {
    const { less } = compareOps(5, 10);
    expect(less).toBe(true);
  });
});
