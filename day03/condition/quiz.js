// 유저에게 월[month]를 입력 받고
// 3,4,5를 입력 받으면 봄!
// 6,7,8를 입력받으면 여름!
// 9,10,11를 입력받으면 가을!
// 12,1,2를 입력받으면 겨울!
// 그 외는 그런 계절 없어요😥!

const month = +window.prompt("월을 입력해주세요");

if (month == 3 || month == 4 || month == 5) {
  window.console.log("봄!");
} else if (month == 6 || month == 7 || month == 8) {
  window.console.log("여름!");
} else if (month == 9 || month == 10 || month == 11) {
  window.console.log("가을!");
} else if (month == 12 || month == 1 || month == 2) {
  window.console.log("겨울!");
} else {
  window.console.log("그런 계절은 없어요😥");
}
/* 
if( 3 <= month && month <= 5) {
  window.console.log("봄!");
} else if(6 <= month && month <= 8){
  window.alert("여름!");
} else if(9 <= month && month <= 11) {
  window.console.log("여름!");
} else if(month == 12 || month == 1 || month == 2){
  window.console.log("겨울!");
} else {
  window.console.log("그런 계절은 없어요😥");
} */

// 유저에게 나이를 입력 받고 
// 7살 이하면 유치원생!
// 8~13 이면 초등학생!
// 14 ~ 19 이면 중고등학생!
// 그외는 성인!

const age = window.prompt("몇살인가요");
if(0 <= age && age <= 7) {
  window.console.log("유치원생!");
}else if(8 <= age && age <= 13) {
  window.console.log("초등학생!");
} else if(14 <= age && age <= 19) {
  window.console.log("중고등학생!");
} else {
  window.console.log("성인!");
}

// 유저에게 숫자를 입력 받고 
//양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0
const number = +window.prompt("숫자를 입력하세요");
if(number > 0 && number % 2 == 1 ) {
  window.console.log("양의 홀수");
}else if(number > 0 && number % 2 == 0) {
  window.console.log("양의 짝수");
}else if(number <0 && number % 2 == 1) {
  window.console.log("음의 홀수");
}else if(number < 0 && number % 2 == 0) {
  window.console.log("음의 홀수");
}else{
  window.console.log("0");
}

const isPositive = number > 0; 
const isNegative = number < 0 ;
const isOdd = number % 2 == 1;
const isEven = number % 2 == 0;

if(isPositive && isOdd) {
  window.console.log("양의 홀수");
}else if (isPositive && isEven) {
  window.console.log("양의 짝수");
} else if(isNegative && isOdd) {
  window.console.log("음의 홀수");
} else if(isNegative && isEven) {
  window.console.log("음의 짝수");
} else {
  window.console.log("0");
}