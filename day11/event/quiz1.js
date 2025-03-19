// 9개의 버튼
// small , medium , large
// red , blue , green
// square, ellipse, circle

const box = document.createElement("div");
box.className = "box";
box.style.border = "1px solid #000";
document.body.appendChild(box);

//s wh: 100 m 200 l 300
/* const smallBtn = document.createElement("button");
smallBtn.innerText = "작은 버튼";
smallBtn.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
});
document.body.appendChild(smallBtn);

const mediumBtn = document.createElement("button");
mediumBtn.innerText = "중간 버튼";
mediumBtn.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});
document.body.appendChild(mediumBtn);

const largeBtn = document.createElement("button");
largeBtn.innerText = "큰 버튼";
largeBtn.addEventListener("click", () => {
  box.style.width = "300px";
  box.style.height = "300px";
});
document.body.appendChild(largeBtn); */

const sizeBtnList = [
  { name: "small", size: "100px" },
  { name: "medium", size: "200px" },
  { name: "large", size: "300px" },
];
sizeBtnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.name;
  btn.addEventListener("click", () => {
    box.style.width = x.size;
    box.style.height = x.size;
  });
  document.body.appendChild(btn);
});

// 배경색상 바꾸기
//red , blue , green
const colorBtnList = [
  { name: "red", color: "red" },
  { name: "blue", color: "blue" },
  { name: "green", color: "green" },
];
colorBtnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.name;
  btn.addEventListener("click", () => {
    box.style.backgroundColor = x.color;
  });
  document.body.appendChild(btn);
});
/* const redBtn = document.createElement("button");
redBtn.innerText = "레드 버튼";
redBtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
document.body.appendChild(redBtn);

const blueBtn = document.createElement("button");
blueBtn.innerText = "파랑 버튼";
blueBtn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
document.body.appendChild(blueBtn);

const greenBtn = document.createElement("button");
greenBtn.innerText = "파랑 버튼";
greenBtn.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});
document.body.appendChild(greenBtn);
 */
// box 모서리 둥근 정도
// square, ellipse, circle
// 0 , 10 , 9999
const radiusBtnList = [
  { name: "square", radius: "0px" },
  { name: "ellipse", radius: "10px" },
  { name: "circle", radius: "9999px" },
];
radiusBtnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.name;
  btn.addEventListener("click", () => {
    box.style.borderRadius = x.radius;
  });
  document.body.appendChild(btn);
});

/* const squareBtn = document.createElement("button");
squareBtn.innerText = "사각 버튼";
squareBtn.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});
document.body.appendChild(squareBtn);

const ellipseBtn = document.createElement("button");
ellipseBtn.innerText = "원버튼";
ellipseBtn.addEventListener("click", () => {
  box.style.borderRadius = "10px";
});
document.body.appendChild(ellipseBtn);

const circleBtn = document.createElement("button");
circleBtn.innerText = "원형버튼";
circleBtn.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});
document.body.appendChild(circleBtn);
 */

window.addEventListener("scroll", () => {
  console.log("스크롤~");
});