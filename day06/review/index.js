//1.
const word = prompt("단어를 입력하세요");
const q1= word.length % 2 ? "🍎" : "🥕";
console.log(q1);
//2.사용자로부터 단어를 입력받은 후, 해당 문자열의 처음 3글자를 대문자로 변환하여 콘솔에 출력하시오.
const word2 = prompt("단어를 입력하세요 ");
console.log(word2.substring(0,3).toUpperCase());
console.log(word2.split(0,3).toUpperCase() + word2.slice(3, word2.length);

//3.사용자로부터 입력받은 문장을 공백을 기준으로 단어 배열로 분리하여 출력하시오.
const word3 = prompt("문장을 입력").split(" ");
console.log(word3);

//4.사용자로부터 문자열을 입력받은 후, 그 문자열에 알파벳 ‘a’가 포함되어 있다면 “포함”, 그렇지 않다면 “미포함”을 출력하시오
const word4 = prompt("문자열을 입력하세요");
word4.includes("a") ? console.log("포함") : console.log("미포함");

//5.사용자에게 문자열을 입력받고, 그 문자열의 길이가 10글자보다 적으면 3회 반복, 많으면 대문자화해서 콘솔로 출력
const word5 = prompt("문자열을 입력하세요");
word5.length < 10 ?  console.log(word5.repeat(3)) : console.log(word5.toLocaleUpperCase());
