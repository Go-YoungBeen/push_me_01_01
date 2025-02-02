/* problem04.test.js */
const logicOps = require("./problem04");

describe("problem04", () => {
  test("andResult(true, false) => false", () => {
    const { andResult } = logicOps(true, false);
    expect(andResult).toBe(false);
  });
  test("orResult(false, true) => true", () => {
    const { orResult } = logicOps(false, true);
    expect(orResult).toBe(true);
  });
  test("notA(true, false) => false", () => {
    const { notA } = logicOps(true, false);
    expect(notA).toBe(false);
  });
  test("notB(true, false) => true", () => {
    const { notB } = logicOps(true, false);
    expect(notB).toBe(true);
  });
  test("ternary(true, false) => true", () => {
    const { ternary } = logicOps(true, false);
    expect(ternary).toBe(true);
  });
});
