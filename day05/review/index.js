//1. 홀수 짝수 알려주는 함수
function oddevenbox (x) {
    return x % 2 ? "홀수" : "짝수";
}

//2. icecream or coffee 를 입력 받으면 "디저트" 아니면 "음식"을 돌려주는 함수 만들기
function food (x) {
    return x == "icecream" || x == "coffee" ? "디저트" : "음식";
}

//3. 함수와 오브젝트 배열을 사용해서 구현하기

const cgv = {
  popcorn: [
    { name: "치즈 팝콘", price: 6000 },
    { name: "캬라멜 팝콘", price: 5000 },
    { name: "일반 팝콘", price: 5000 },
  ],
  movie: [
    { name: "액션 영화", price: 10000 },
    { name: "로맨틱 코메디", price: 8000 },
    { name: "공포 영화", price: 9000 },
  ],
};



const usermovie = +prompt("영화선택")-1;
const userpopcorn = +prompt("팝콘선택")-1 ;

// 함수 - 마술상자 [패턴이 보이면 함수 만들기]
/*function calculate(movieprice, popcornpirce) {
    return `총 금액 : ${movieprice + popcornpirce}`
}
*/
function calculate(moviePrice, popcornPrice) {
    if (moviePrice + popcornPrice > 10000) {
      return `총 금액:${(moviePrice + popcornPrice) * 0.8}`;
    } else if (moviePrice + popcornPrice > 20000) {
      return `총 금액:${(moviePrice + popcornPrice) * 0.7}`;
    } else {
      return `총 금액:${(moviePrice + popcornPrice) * 1}`;
    }
  }
  

console.log(`
    구매한 영화 : ${cgv.movie[usermovie].name}
    구매한 팝콘 : ${cgv.popcorn[userpopcorn].name}
    ${calculate(cgv.movie[usermovie].price, cgv.movie[userpopcorn].price)}
    `);


// 유저에게 태어난 년도를 물어보고, 띠를 알려주는 함수 만들기!
// ex ) 2000 -> 용띠, 2001 -> 뱀띠 , 1994 -> 개띠
function zodiac(year) {
    const animal = ["원숭이띠", "닭띠", "개띠", "돼지띠", "쥐띠", "소띠", "호랑이띠", "토끼띠", "용띠", "뱀띠", "말띠", "양띠"];
    return animal[year % 12];
  }

//유저에게 mbti묻기
//총 네번의 프롬프트를 묻고
const a = prompt("e 또는 i ?");
const b = prompt("s 또는 n ?");
const c = prompt("t 또는 f ?");
const e = prompt("j 또는 p ?");

const mbti = {
  e: "외향적",
  i: "내향적",
  s: "감각적",
  n: "직관적",
  t: "이성적",
  f: "감성적",
  j: "계획적",
  p: "즉흥적",
};

console.log(`당신의 성격은 ${mbti[a]}, ${mbti[b]}, ${mbti[c]}, ${mbti[d]}입니다!`);