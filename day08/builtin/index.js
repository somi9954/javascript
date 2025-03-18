// 컴퓨터 : 휴지통, 내 pc, 계산기
// 아이폰 : 설정,  ...
// built-in Object:
//Number, String, Boolean
//Array, Object, Date, Set

const a = new Date(); // 시간
console.log(a.toLocaleDateString());

const b = new Set(); // 중복 허용 안됨
b.add(1);
b.add(2);
b.add(3);
b.add(4);
b.add(1);
console.log(b);

const c = new Set([1, 2, 3, 4, 1, 2, 3, 4]);
console.log(c);

const d = new Set(/* ...new Set */["아아", "라떼", "민트", "라떼"]);
console.log(d);