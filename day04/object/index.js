// 기본타입: string, number, boolean, null, undefined
// 참조타입: array[], object

// key - value, 중복값 x
// 문자, 정수 - 아무타입가능
const coffee = {
  name: "아메리카노",
  price: 2500,
  shots: 2,
  hasCaffein: true,
  ingredients: ["물", "커피콩"],
};

coffee["price"]; //2500
coffee.price;  //2500

//샷, 커피콩
console.log(`샷갯수: ${coffee.shots} 성분: ${coffee.ingredients[1]}`);


// 자동차를 오브젝트 타입으로 바꾸기
// 제작사
// 차이름
// 옵션 
// 연식
// 연비

const car = {
  company : "Genesis",
  name: "gv60",
  options: "시그니처",
  year: 2025,
  fuel: 6.1,
}

// car.company
// car["company"]
// car.coffee // undefined

car.people = 4; // people:4 추가
delete car.options;
car.fuel = 20; // update fuel: 20