// 1. w 300px h 300 px => box
// 빨강버튼, 파랑버튼, 노랑버튼
// 버튼을 누르면 box의 배경색이 해당 버튼의 색깔로 바뀜
const box = document.createElement("div");
box.className = "box";
box.style.width = "300px";
box.style.height = "300px";
box.style.border = "1px solid #000";
document.body.appendChild(box);

const redBtn = document.createElement("button");
redBtn.innerText = "빨강";
redBtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
document.body.appendChild(redBtn);

const blueBtn = document.createElement("button");
blueBtn.innerText = "파랑";
blueBtn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
document.body.appendChild(blueBtn);

const yellowBtn = document.createElement("button");
yellowBtn.innerText = "노랑";
yellowBtn.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});
document.body.appendChild(yellowBtn);
