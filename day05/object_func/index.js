// 기본: num, str, bool, null, undefined
// 참조: arr, obj, function

const starbucks = {
    place: "부평점",
    sales: 0,
    menu: ["아메리카노", "라떼"],
    sales: 0,
    sellCoffee: function() {
        this.sales = this.sales + 1000;
    },
};
starbucks.sellCoffee();
starbucks.sellCoffee();
console.log(starbucks.sales);

const bakery = {
    sale: 0,
    sellBread : function () {
        console.log("빵 팔기!");
        this.sale = this.sale + 1000;
    }
}
console.log(bakery.sale);
bakery.sellBread();
bakery.sellBread();
bakery.sellBread();
bakery.sellBread();
console.log(bakery.sale);

//cgv
// 영화[미키17, 퇴마록, 캡틴 아메리카]
// 영화 팔기 함수 => 해당 매개변수를 받으면 ~~ 영화가 판매되었습니다! 콘솔로
const cgv = {
    movies: [
      { name: "미키 17", price: 10000 },
      { name: "퇴마록", price: 9000 },
      { name: "캡틴 아메리카", price: 8000 },
    ],
    sale: 0,
    sellTicket: function (x) {
      if (0 <= x && x <= 2) {
        console.log(`${this.movies[x].name} 영화가 판매되었습니다!`);
        this.sale = this.sale + this.movies[x].price;
      } else console.log("해당 번호의 영화는 존재하지 않습니다!");
    },
    checkSale: function () {
      console.log(`총 매출:${this.sale}`);
    },
  };
  
  cgv.sellTicket(0);
  cgv.sellTicket(0);
  cgv.sellTicket(0);
  cgv.checkSale();

  // 어떤 것을 함수에?? 
  // 동사면 함수

  //자동차라는 object
  //현재 속도, 속도 올리기, 속도 내리기, 현재 속도 나타내기

  const car = {
    speed : 0,
    up : function () {
        this.speed = this.speed+ 1;
    },
    down : function() {
        if (this.speed != 0) {
            this.speed = this.speed - 1;
        } else {
            this.speed = 0;
        }
    },
    showSpeed : function () {
        console.log(`현재 시속:${this.speed}`);

    }
  };

car.up();
car.up();
car.up();
car.up();
car.up();
car.up();
car.up();
car.up();
car.up();
car.up();
car.up();
car.up();
car.down();
car.down();
car.down();
car.down();
car.down();
car.down();
car.down();
car.down();

car.showSpeed();

//배열을 단순 문자열로 저장 vs. 객체 배열 활용 
// starbucks 코드 (단순 배열 사용) vs cgv 객체 배열 (단순 배열에서 개선된 배열)
//객체 배열을 활용 하는 것이 일반적이다.