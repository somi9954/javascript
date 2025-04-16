// 피자만들기
const makeDough = (next) => {
  console.log("피자 도우 만들기");
  next();
};

const makeChesse = (next) => {
  console.log("치즈 뿌리기");
  next();
};

const makeTomato = (next) => {
  console.log("토마토 뿌리기");
  next();
};

const makeBake = () => {
  console.log("피자 굽기");
};

/* setTimeout(() => {
  makeDough();
}, 2000);

setTimeout(() => {
  makeChesse();
}, 4000);

setTimeout(() => {
  makeTomato();
}, 7000);

setTimeout(() => {
  makeBake();
}, 9000); */
/* 
makeDough(() => {
  makeChesse(() => {
    makeTomato(() => {
      makeTomato();
    });
  });
});
 */

//콜백 지옥
/* makeDough(() => {
  setTimeout(() => {
    makeChesse(() => {
      setTimeout(() => {
        makeTomato(() => {
          setTimeout(() => {
            makeBake();
          }, 1000);
        });
      }, 3000);
    });
  }, 2000);
});
 */

//🥚🐣🐤🐔🍗
//각각 함수를 만들고
// 1 2 2 1 2 초 별로 순서 보장되면서
// 콘솔로그에 찍기

const egg = (next) => {
  console.log("🥚");
  next();
};

const hatch = (next) => {
  console.log("🐣");
  next();
};

const chick = (next) => {
  console.log("🐤");
  next();
};

const rooster = (next) => {
  console.log("🐔");
  next();
};

const chicken = () => {
  console.log("🍗");
};

console.log("치킨의 인생");
egg(() => {
  setTimeout(() => {
    hatch(() => {
      setTimeout(() => {
        chick(() => {
          setTimeout(() => {
            rooster(() => {
              setTimeout(() => {
                chicken();
              }, 2000);
            });
          }, 1000);
        });
      }, 2000);
    });
  }, 2000);
}, 1000);
