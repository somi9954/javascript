// 브라우저에서 제공하는 프로그램
// 시간 제어, 서버 데이터 가져오기, 데이터 임시 저장하기, 현재 위치 알려주기
// 1. 시간 제어 함수
// setInterval(() => {
//  console.log("안녕");
// }, 1000);

/* setTimeout(() => {
  console.log("하이");
}, 3000);
 */

/* const num =document.querySelector(".num");
setInterval(() => {
  num.innerText = +num.innerText + 1;
}, 1000); */

const time = document.querySelector(".time");

setInterval(() => {
  time.innerText = new Date().toLocaleTimeString();
},1000)