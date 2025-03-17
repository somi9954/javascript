//object paradigm
// 기본 : str, num , bool, un , nu
// 참조: arr, obj, func, window

const menu = ["americano", "latte", "mint"];

menu.push("cocoa"); // 맨뒤에 추가하기
menu.pop(); // 맨뒤 삭제하기
menu.slice(0, 2); // 0~1까지 배열을 잘라서 돌려줌

const num = [2, 4, 6, 8, 10];
const double = (x) => {
  return x * 2;
};
const plus10 = (x) => {
  return x + 10;
};

const a1 = num.map(double); //안에 요소들을 바꿔주기!
const a2 = num.map(plus10);
console.log(a2);

// 10보다 작으면 *2 10보다 크면 *3 해서 바꾸기
const a3 = num.map((x) => {
  return x > 10 ? x * 2 : x * 3;
});
const a4 = num.map((x) => {
  return "😘";
});

const sentence = `Yeah
I've been tryna call
I've been on my own for long enough
Maybe you can show me how to love, maybe
I'm going through withdrawals
You don't even have to do too much
You can turn me on with just a touch, baby
I look around and
Sin City's cold and empty (oh)
No one's around to judge me (oh)
I can't see clearly when you're gone
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
I said, ooh, I'm drowning in the night
Oh, when I'm like this, you're the one I trust
(Hey, hey, hey)
I'm running out of time
'Cause I can see the sun light up the sky
So I hit the road in overdrive, baby, oh
The city's cold and empty (oh)
No one's around to judge me (oh)
I can't see clearly when you're gone
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
I said, ooh, I'm drowning in the night
Oh, when I'm like this, you're the one I trust
I'm just walking by to let you know (by to let you know)
I can never say it on the phone (say it on the phone)
Will never let you go this time (ooh)
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
(Hey, hey, hey)
(Hey, hey, hey)
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch`;

const a6 = sentence.split(" ").map((x) => {
  return x.length < 5 ? "😊" : x.toUpperCase();
});
console.log(a6);

const num2 = [2, 4, 6, 8, 10];
num.map((x) => {
  return x * 2;
}); // 역할 : 요소 바꾸기
const a5 = num.filter((x) => {
  return x < 5;
})
.map((x) => {
  return x + 10;
}); // 역할 : 조건에 부합하는 요소만 살리기 
console.log(a5);
// true 이면 그값을 그대로 아니면 버림
