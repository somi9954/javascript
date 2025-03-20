// 퀴즈 
// 1. 유저에게 좋아하는 아이돌 그룹 멤버들을 입력 받고, 
// 아이돌 멤버의 버튼만큼 화면에 만들기

const idols = prompt("좋아하는 아이돌 멤버 입력").split(" ");
idols.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
});

//2. 유저에게 좋아하는 색상 5가지 영어로 입력 받고,
// 그 색상을 가진 버튼을 화면에 만들기

const colors = prompt("좋아하는 색상 5개 입력").split(" ");
colors.forEach((x) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = x;
  btn.innerText = "버튼";
  document.body.appendChild(btn);
});


// 화면에 태그 만들기
//1. 원하는 태그 만들기 document, element
//2.태그안에 내용 채우기 element
//3.태그의 스타일 꾸미기 element.style.background
//4. 태그를 바디에 나내기