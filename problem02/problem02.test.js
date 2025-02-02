/* problem02.test.js */
const calcNumbers = require("./problem02");

describe("problem02", () => {
  test("sum", () => {
    const { sum } = calcNumbers(5, 3);
    expect(sum).toBe(8);
  });
  test("diff", () => {
    const { diff } = calcNumbers(5, 3);
    expect(diff).toBe(2);
  });
  test("product", () => {
    const { product } = calcNumbers(5, 3);
    expect(product).toBe(15);
  });
  test("quotient", () => {
    const { quotient } = calcNumbers(10, 2);
    expect(quotient).toBe(5);
  });
  test("remainder", () => {
    const { remainder } = calcNumbers(10, 3);
    expect(remainder).toBe(1);
  });
});
