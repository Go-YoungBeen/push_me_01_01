/* problem02.js */
/**
 * [문제2]
 * - 산술 연산자를 잘못 사용한 경우 올바른 계산 결과를 얻지 못합니다.
 * - 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산의 각 역할에 맞는 연산자를 사용해야 합니다.
 * - 거듭제곱 연산(`**`)과 나머지 연산(`%`)을 혼동하면 의도한 결과가 나오지 않습니다.
 *
 * 이 문제는 잘못된 산술 연산자를 포함하고 있으며, 이를 수정하여 올바른 결과를 반환하도록 코드를 고쳐야 합니다.
 */
function calcNumbers(a, b) {
  return {
    sum: a + b, // 🚨
    diff: a - b, // 🚨
    product: a * b, // 🚨
    quotient: a / b, // 🚨
    remainder: a % b, // 🚨
  };
}
module.exports = calcNumbers;
