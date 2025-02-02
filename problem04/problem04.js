/* problem04.js */
/**
 * [문제4]
 * - 논리 연산자(`&&`, `||`, `!`)
 *   - `&&`: 두 조건이 모두 참일 때만 참을 반환합니다.
 *   - `||`: 두 조건 중 하나라도 참이면 참을 반환합니다.
 *   - `!`: 조건을 반전시켜 참을 거짓으로, 거짓을 참으로 만듭니다.
 *
 * - 삼항 연산자 (`condition ? trueValue : falseValue`)
 *   - 조건이 참일 경우 `trueValue`를, 거짓일 경우 `falseValue`를 반환합니다.
 *   - 간단한 조건문을 대체할 수 있습니다.
 *
 * 아래 코드는 논리 연산자와 삼항 연산자가 잘못 사용된 부분을 포함하고 있으며,
 * 이를 수정하여 올바른 결과를 반환해야 합니다.
 */
function logicOps(a, b) {
  return {
    andResult: a && b, // 🚨
    orResult: a || b, // 🚨
    notA: !a, // 🚨
    notB: !b, // 🚨
    ternary: a || b ? a : b, // 🚨
  };
}
module.exports = logicOps;
