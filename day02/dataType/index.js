// 1. 프롬프트로 한변의 길이를 입력 받고 콘솔로 정사각형의 둘레와 넓이 나타내기
// 답변) ~~길이는 둘레: ~~ 넓이:~~  입니다
const side = window.prompt("정사각형의 한변의 길이를 알려주세요");
/* const Cire = 4 * square;
const area = square * square;
window.console.log(`${square}길이는 둘레: ${Cire}이고 넓이: ${area} 입니다.`);  */
window.console.log(`${side}길이는 둘레: ${side * 4 }이고 넓이: ${side * side} 입니다.`);

//2. 프롬프트로 달러를 입력 받고 100$ 콘솔로 원화로 변환된 값으로 나타내기
// 답변) ~~ 달러는 ~~원 입니다.
const dollar = window.prompt("달러를 알려주세요.");
const parseDoller = parseInt(dollar);
window.console.log(`${dollar} 달러는 ${dollar * 1430} 입니다.`)


//3. 프롬프트로 출생년도를 물어보고 ~~년생 받고 콘솔로 해당 출생년도의 나이르 출력하기
// 답변) ~~년생은 ~~살입니다.
const year = window.prompt("출생년도 입력?");
const parseYear = parseInt(year);
window.console.log(`${parseYear}년생은 ${2026 - parseYear}살이시군요!`);

//프롬프트로 첫번째 숫자 입력, 두번째 숫자 입력 콘솔로 두수의 합 
const firstNum = window.prompt("첫번째 숫자 입력");
const SecondNum = window.prompt("두번째 숫자 입력");
/* window.console.log(`두수의 합: ${parseInt(firstNum) + parseInt(SecondNum)}`); */
console.log(`두 수의 합: ${firstNum + SecondNum}`);