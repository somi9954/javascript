// 산술 연산자 (Operator)
const a1 = 1 + 2;
const a2 = 1 - 2;
const a3 = 1 * 3;
const a4 = 2 ** 3;
const a5 = 3 / 2;
const a6 = 3 % 2;

// 대입 연산자 (=)
const b = 10;

//비교 연산자 (<, > , <= , >=, ==, !=)
// 불리언 암묵적 타입변환
const c =  5 < 3 ; //false
const c1 = 5 > 3 ;  // true 
const c2 =  5 <= 3 //false
const c3 = 5 >= 3; // true

const c4 = 10 == 9; // false
const c5 = 10 != 9; //true
const c6 = 10 === "10" //false 타입까지 체크

// 논리 연산자 (AND(&&), OR(||) , NOT(!))
// and: 하나라도 false이면 false
// or : 하나라도 true면 true
// not : true의 반대 false

const d1 = 5 > 3 && 5 > 6; // false
const d2 = 5 > 3 || 5 > 9 || 5 > 0; // true
const d3 = !(5 > 3) // false
const d4 = 5 <= 3;
const d5 = 5 > 3 && 7 > 3;
const d6 = !(5 <= 3) || !(7 <= 3); //드모르간 법칙 
 
// 삼항 연산자 (?)
// 조건 ? 참 : 거짓
const e = 5 > 3 ? "떡볶이" :"마라탕"; // 마라탕
const e1 = 10 == "10" ? "치즈" : "소스"; // 치즈