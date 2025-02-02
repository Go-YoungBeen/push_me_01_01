/* problem03.js */
/**
 * [문제3]
 * - 비교 연산자(`==`, `===`, `!=`, `!==`, `<`, `>` 등)를 사용하여
 *   값과 타입을 올바르게 비교해야 합니다.
 * - 느슨한 동등(`==`)과 엄격 동등(`===`)의 차이를 이해해야 하며,
 *   부등(`!=`)과 엄격 부등(`!==`)도 올바르게 사용해야 합니다.
 *
 * 아래 코드는 잘못된 비교 연산을 포함하고 있으며, 이를 수정하여 올바른 결과를 반환해야 합니다.
 */
function compareOps(a, b) {
  return {
    looseEqual: a == b,
    strictEqual: a === b,
    notEqual: a != b,
    greater: a > b,
    less: a < b,
  };
}
module.exports = compareOps;
