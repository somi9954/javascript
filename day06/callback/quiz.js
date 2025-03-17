// makeFood라는 함수를 만들고
// 요리 준비!
// 요리함수실행!
// 요리끝!
const makeFood = (recipe) => {
  console.log("요리준비");
  recipe();
  console.log("요리 끝!");
};
const makeTaco = () => {
  console.log("1. 또띠아 준비");
  console.log("2. 야채 넣기");
  console.log("3. 고기 넣기");
  console.log("4. 말기");
};
const makeRamen = () => {
  console.log("1. 물 끓이기");
  console.log("2. 스프넣기");
  console.log("3. 면넣기");
  console.log("4. 계란넣기");
};

const makeKimchiRice = () => {
  console.log("1. 밥 볶기");
  console.log("2. 김치 넣기");
  console.log("3. 참기름");
  console.log("4. 섞기");
};

makeFood(makeTaco);
makeFood(makeRamen);
makeFood(makeKimchiRice);

const makeSomething = () => {
  console.log("아무요리!");
};

// 익명함수(일회성)

makeFood(() => {
  console.log("아무요리!");
});


makeFood(() => {
  makeTaco();
  makeRamen();
});
// makeFood(makeTaco()); 안에있는 함수가 먼저 실행이 되고
// return 을 undefined로 반환이 되기 때문에 recipe 함수에서 에러가 난다

// makeTaco
// 1. 또띠아 준비
// 2. 야채넣기
// 3. 고기 넣기
// 4. 말기

//makeRamen
//1. 물끓이기
//2.스프넣기
//3.면넣기
//4. 계란넣기


const makeTaco2 = (x) => {
  console.log("1. 또띠아 준비");
  console.log("2. 야채넣기");
  console.log(`3. ${x}넣기`);
  console.log("4. 말기");
};

const makeRamen2 = (x) => {
  console.log("1. 물끓이기");
  console.log("2. 스프넣기");
  console.log("3. 면넣기");
  console.log(`4. ${x}넣기`);
};

const makeKimchiRice2 = () => {
  console.log("1. 밥 볶기");
  console.log("2. 김치 넣기");
  console.log("3. 참기름");
  console.log("4. 섞기");
};

const makeFry = () => {
  console.log("계란 꺼내기");
  console.log("계란 깨기");
  console.log("후라이 만들기");
};

const makeFood2 = (recipe) => {
  console.log("손씻기");
  console.log("요리준비");
  console.log("불 준비");
  recipe();
  console.log("요리끝!");
};

makeFood2(() => {
  makeTaco2("🥩");
});

makeFood2(() => {
  makeRamen2("🧂");
});