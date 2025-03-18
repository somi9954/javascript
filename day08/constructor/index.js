//String, number
/* 
const a= new String("ice"); //"ice";
const b =new Number(1); //1
const c = new Boolean(true); //true;
const d = new Object(); //{}; 
const e = new Array(); //[]; 
*/

// const arr = ["a", "d", "f"].filter(x,i)) => i %2) i => 번째!

const a = new Array(100).fill(1).map((x, i) => i + 10);
console.log(a);

//1. 0~100 배열 만들고, 5의 배수는 '🍅' 나머지는 숫자
const q1 = new Array(100).map((x, i) => (i % 5 ? "🍅" : i));
//2. 0~100 배열 만들고, 3의 배수 또는 7의 배수는 문자열로 나머지는 숫자
const q2 = new Array(100).map((x, i) => (i % 3 || i % 5 ? String(i) : i));
//3. 0부터 100까지 총합 구하기
const q3 = new Array(101)
  .fill(0)
  .map((x, i) => i)
  .reduce((a, c) => a + c);
console.log(q3);
//4. 0~100까지 3,6,9 들어가면 👏 아니면 숫자
const q4 = new Array(100).fill(0)
.map((x, i) => String(i).includes("3") ||String(i).includes("6") ||String(i).includes("9") ? "👏" : Number(i));
console.log(q4);


