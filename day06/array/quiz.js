const numArray = [3, 12, 21, 30, 45];
const strArray = ["americano", "latte", "mint", "cocoa", "lemonade"];

// 1. numArray에서 홀수면 '🥚' 짝수면 '🍎'로 바꾸기
const q1 = numArray.map((x) => {
  return x % 2 ? "🥚" : "🍎";
});
console.log(q1);
// 2. numArray에서 5의 배수면 "5의 배수" 아니면 그대로 냅두기
const q2 = numArray.map((x) => {
  return (x = x % 5 ? "5의 배수" : x);
});
console.log(q2);
// 3. numArray 20보다 작으면 0으로 바꾸고 아니면 50으로 바꾸기
const q3 = numArray.map((x) => {
  return x < 20 ? 0 : 50;
});
console.log(q3);

// 4. strArray 문자의 길이가 홀수이면 '💛'  짝수이면 '🥝'로 바꾸기
const q4 = strArray.map((x) => {
  return x.length % 2 ? "💛" : "🥝";
});
console.log(q4);
// 5. strArray 문자에서 'a', 'e' 가 포함되면 대문자화 아니면 그대로 냅두기
const q5 = strArray.map((x) => {
  return x.includes("a","e") ? x.toUpperCase() : x;
  // return x.includes("a") || x.includes("e") ? x.toUpperCase() : x ;
});
console.log(q5);
// 6. strArray 문자에서 l로 시작하면 문자의 길이로 바꾸고 아니면 대문자화로 하기
const q6 = strArray.map((x) => {
  return x.startsWith("l") ? x.length : x.toUpperCase();
});
console.log(q6);
