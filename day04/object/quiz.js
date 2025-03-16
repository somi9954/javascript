// 사용자로부터 영화 종류를 나타내는 정수 1~3과 나이를 입력받습니다. 각 영화와 가격은 다음과 같이 설정합니다.
// 1: 액션 영화 - 10000원 2: 로맨틱 코미디 - 8000원 3: 공포영화 - 9000원
// 나이에 따른 할인율은 다음과 같습니다.
// 13세 미만 : 50% 할인 60세이상: 30% 할인
// 사용자의 나이와 선택한 영화에 따라 할인을 적용한 최종 디켓 가격을 계산하여 출력하는 프로그램을 작성하세요

const movie = [
  { Genre: "액션 영화", cost: 10000 },
  { Genre: "로맨틱 코미디", cost: 8000 },
  { Genre: "공포영화", cost: 9000 },
];

const num = +window.prompt("영화의 종류를 선택하세요") -1;
const age = +window.prompt("나이를 입력하세요");

if(age < 13) {
  console.log(`영화제목: ${movie[num.name]} 가격 : ${movie[num].cost * 0.5}`);
}else if(60 < age) {
  console.log(`영화제목: ${movie[num.name]} 가격 : ${movie[num].cost * 0.7}`);
}else {
  console.log(`영화제목: ${movie[num.name]} 가격 : ${movie[num].cost * 1}`);
}