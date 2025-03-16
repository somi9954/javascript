/* 1. 유저에게 프롬프트로 두 숫자를 입력 받고 두 숫자의 합, 차, 곱, 제곱, 나누기에서 정수화 하는거까지 콘솔로 나타내기
2. 유저에게 프롬프트로 하나의 숫자를 입력 받고 홀수 또는 짝수인지 콘솔로 알려주기!
3. 유저에게 프롬프트로 양의 정수를 입력받고 분:초 형태로 나타내기!
  1. ex ) 87→ 1분 27초 */
const num = +window.prompt("첫번째 숫자를 알려주세요");
const num2 = +window.prompt("두번째 숫자를 알려주세요");
window.console.log(`두수의 합은 ${num + num2}이고 두수의 차는 ${num - num2}이고 
두수의 곱은 ${num * num2}이고 두수의 제곱은 ${num**num2}이고 나누기는 ${parseInt(num / num2)}입니다.`);

//2. 
const number = window.prompt("숫자를 입력해주세요");
console.log(`${number % 2 == 0 ? "짝수입니다" : "홀수입니다."}`);

/* const num = +window.prompt("숫자 입력");

const answer2 = num % 2 == 1 ? "홀수" : "짝수"; // num %2 로도 가능 true = 1 false = 0 
window.console.log(`${num}은 ${answer2}`);
 */
//3.
const number3 = window.prompt("숫자를 입력해주세요");
const minute = parseInt(number3 / 60);
const secondes = number3 % 60 ;
console.log(` ${minute}분 ${secondes}초 입니다`);
