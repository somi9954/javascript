/* const btn = document.createElement("button");
btn.innerHTML = "네이버";
btn.style.backgroundColor = "green";
btn.style.setProperty("backgroundColor", "green");
document.body.appendChild(btn);
 */
//유저에게 원하는 버튼 배경과 글씨색 내용 동시에 받고 (띄어쓰기)
// 화면에 버튼 만들어주기

/* const user_btn = prompt("원하는 배경버튼과 글씨색 내용을 말해주세요").split(
  " "
);
const btn2 = document.createElement("button");
btn2.innerHTML = user_btn[2];
btn2.backgroundColor = user_btn[0];
btn2.style.color = user_btn[1];
document.body.appendChild(btn2); */

const [backgroundColor, color, text] = prompt("버튼 배경색,글씨색,내용 입력(띄어쓰기)").split(" ");
const btn = document.createElement("button");
btn.style.backgroundColor = backgroundColor;
btn.style.color = color;
btn.innerText = text;
document.body.appendChild(btn);
