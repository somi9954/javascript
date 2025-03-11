// 1. 프롬프톨 유저에게 10000자리 숫자를 입력 받고 백의 자리 숫자를 콘솔로 나타내기
// ex) 58237 -> 2 , 88128 -> 1
/* const num = window.prompt("숫자를 입력하세요");
 console.log(`${parseInt(num / 100 % 10)}`);  */
 const num = +window.prompt("10000~9999 숫자 입력");
window.console.log(parseInt((num/100) % 10));



//2. 프롬프트로 유저에게 몇년생인지 물어보고 2006년생 이하면 콘솔로 성인입니다! 아니면 미성년자입니다.
/* const year = window.prompt("출생년도를 입력하세요");
console.log(`${year <= 2006 ? "성인입니다" : "미성년자입니다"}`); */
const year = +window.prompt("몇년생?");
const result = year <= 2006 ? "성인입니다" : "미성년자입니다.";
window.console.log(result);
