/* problem05.test.js */
const inspectValues = require("./problem05");

describe("problem05", () => {
  test("typeofA => 'undefined'", () => {
    const { typeofA } = inspectValues();
    expect(typeofA).toBe("undefined");
  });
  test("typeofB => 'object'", () => {
    const { typeofB } = inspectValues();
    expect(typeofB).toBe("object");
  });
  test("typeofC => 'number'", () => {
    const { typeofC } = inspectValues();
    expect(typeofC).toBe("number");
  });
  test("typeofD => 'string'", () => {
    const { typeofD } = inspectValues();
    expect(typeofD).toBe("string");
  });
  test("checkNull => true", () => {
    const { checkNull } = inspectValues();
    expect(checkNull).toBe(true);
  });
});
