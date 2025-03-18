// 1. 유저에게 영어 문장을 입력 받고 단어들의 길이의 총합 구하기!
//ex i like to writing letters 

const sentence = prompt("영어 문장을 입력하세요");
const senlength = sentence.split(" ").map((x) =>{
    x = x.length
    return x;
})
const totalLength = senlength.reduce((sum, length) => sum + length, 0); // 배열의 길이 합산
console.log(totalLength); 
/*const senlength = sentence.split(" "). map((x) =>{return x.length}).reduce((a,c) => {return a+c})*/

// 2. 유저에게 아무 글자를 입력 받고 모음이 들어갔는지 아닌지 확인하기
//ex qwrtpsdfjk -> 모음없음!
//ex qkjaqzmskdl -> 모음 있음!
const word = prompt("단어를 입력하세요.");
const vowels = ["a", "i", "u", "e", "o"];
const hasVowel = word.split("").some((x) =>{ return  vowels.includes}); // 문자열에서 모음이 있는지 확인
console.log(hasVowel)
/* word.split("").some((x)=>{return x=="a" || x=="i" || x=="u" || x=="e" || x=="0})"*/

const news = `
President Donald Trump is ordering a pause on shipments of US military aid to Ukraine after his heated Oval Office argument with Ukrainian President Volodymyr Zelensky last week, a White House official told CNN Monday.

The halt in aid, which came after Trump held a series of meetings with top national security officials at the White House, could have dire effect on Ukraine’s war-fighting abilities, officials and analysts said. It will remain in place until Trump determines Zelensky has made a commitment to seeking peace talks, one official said, essentially forcing Ukraine to a negotiating table by threatening further losses on the battlefield.

“The president has been clear that he is focused on peace. We need our partners to be committed to that goal as well. We are pausing and reviewing our aid to ensure that it is contributing to a solution,” the White House official said.

After more than a week of open hostility between Washington and Kyiv, Monday’s pause was the most material sign of how far the relationship has deteriorated since Trump took office.

In recent weeks, Trump has echoed Russian President Vladimir Putin’s talking points, falsely claiming Ukraine started the war and accusing Zelensky of being a dictator, but his decision to halt the delivery of military aid is a move that could have real consequences for the balance of the conflict and strengthen Putin’s hand.

The pause will apply to all military equipment not yet inside Ukraine, officials said, and amounts to a direct response to what Trump views as Zelensky’s bad behavior last week.

Ukraine could likely sustain its current fighting pace for several weeks — perhaps until the start of the summer — before a US pause would begin to have a major effect, Western officials said in the wake of the decision. The Biden administration rushed shipments of weapons to Ukraine in its waning days, providing the country with large stockpiles of advanced weapons.

It is those sophisticated weapons — including the long-range ATACMS missiles — that have allowed Ukraine to strike deep into Russian territory, a strategy that could suffer if those weapons remain paused.

While European nations may be able to replace US shipments of artillery, supplemented by Ukraine’s own growing defense industry, the most advanced weapons used by Kyiv come from the United States.`;

// trump -> "🍅"
const tomato = news.split(" ")
.map((x) => {
    return x.includes("Trump") ? "🍅" : x;
}).reduce((a,c) => {
    return a + " " + c;
});
console.log(tomato);
const tomato2 = news.split(" ")
.map((x) =>  x.includes("Trump") ? "🍅" : x )
.reduce((a,c) =>  a + " " + c);
console.log(tomato);

/* const tomato = news
  .split(" ")
  .map((x) => (x == "Trump" ? "🍅" : x))
  .reduce((a, c) => a + " " + c);

console.log(tomato);*/
