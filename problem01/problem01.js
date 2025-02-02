/* problem01.js */
/**
 * [문제1]
 * - 아직 선언되지 않은 변수에 접근하거나 연산을 시도할 경우 ReferenceError가 발생합니다.
 * - let 키워드로 선언한 변수는 동일한 블록 내에서 재선언이 불가능합니다.
 * - const 키워드로 선언한 변수는 재할당이 불가능합니다.
 *
 * 이 문제는 이러한 상황에서 발생할 수 있는 오류를 포함하고 있으며,
 * 모든 변수 선언 및 초기화가 올바르게 이루어지도록 수정해야 테스트를 통과할 수 있습니다.
 */
function manageVariables() {
  let a = 1;
  a++; // 🚨
  let b = 19;
  b += 1; // 🚨

  let c = 100;
  c = 200; // 🚨
  return { a, b, c };
}
module.exports = manageVariables;
