// 기본 : string, number, bool , null, undefined
// 참조 : obj, arr, document, element, ...,date, promise
/* const a = [];
const b = {};
const c = new Date();
const d = new Promise((resolve, reject) => {
  resolve("피카츄");
});

d.then((v) => {
  console.log(v);
});
 */

/* const pokemon = () =>
  new Promise((res, rej) => {
    res("파이리");
  }); 

pokemon().then((v) => console.log(v));
*/

/* const pokemon = (monster) =>
    new Promise((res, rej) => {
      res(monster);
    });
  
  pokemon("피츄").then((v) => console.log(v)); */

/* 
const pokemon = (monster) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(monster);
    }, 3000);
  });

pokemon("라이츄").then((v) => console.log(v)); */

// Promise 타입을 돌려주는 함수를 정의하고
// 매개변수에 과일을 넣으면 2초뒤에 해당 과일이
// 콘솔로 ~~ 과일은 맛있다! 코드 만들기
/* 
const fruits = (fruit) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(fruit);
    }, 2000);
  });
fruits("🍈").then((v) => console.log(`${v}과일은 맛있다`)); */

//피자라는 함수를 만들고 promise를 돌려줌
// 매개변수 name, sec를 받고 함수를 실행시키면
// sec초 뒤에 name피자 완성이 콘솔로 나타내도록 로직 코드 만들기
/* 
const pizza = (name, sec) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(`${name}피자`);
    }, sec);
  });

pizza("치즈", 5000).then((v) => console.log(`${v} 완성!`)); */

/* const dough = "🍞피자 도우 만들기🍞";
const cheese = "🧀치즈 뿌리기🧀";
const tomato = "🍅토마토 뿌리기🍅";
const bake = "🔥피자 굽기🔥";
const pizza = "🍕피자 완성🍕";

const test = (something, sec) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(something);
      res(something);
    }, sec);
  }); */

/* test(dough)
  .then((v) => {
    console.log(v);
    return test(cheese);
  })
  .then((v) => {
    console.log(v);
    return test(tomato);
  })
  .then((v) => {
    console.log(v);
    return test(bake);
  })
  .then((v) => {
    console.log(v);
    return test(pizza);
  });
 */

/* test(dough, 1000)
  .then((v) => test(cheese, 2000))
  .then((v) => test(tomato, 2000))
  .then((v) => test(bake, 3000))
  .then((v) => test(pizza, 1000)); */

// 치킨의 일생

const egg = "🥚";
const hatch = "🐣";
const chick = "🐤";
const rooster = "🐔";
const chicken = "🍗";

const chickenlife = (target, sec) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(target);
      res(target);
    }, sec);
  });

console.log("치킨의 탄생");
chickenlife(egg, 1000)
  .then((v) => chickenlife(hatch, 2000))
  .then((v) => chickenlife(chick, 3000))
  .then((v) => chickenlife(rooster, 4000))
  .then((v) => chickenlife(chicken, 5000));
