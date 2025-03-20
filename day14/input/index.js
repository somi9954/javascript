import { hasSpecialChar, lengthValid } from "./func.js";

const input = document.querySelector(".input");
const span = document.querySelector(".span");
const condition = document.querySelector(".condition");

input.addEventListener("input", () => {
  const { length } = input.value;
  span.innerText = length;
  span.style.color = lengthValid(length);
  condition.style.color = hasSpecialChar(input.value, "!@#^&*~");
  condition.style.color = hasSpecialChar(input.value, "!@#^&*~");
});

// 1. 숫자 10글자 넘으면 빨간색 아니면 검은색

input.addEventListener("input", () => {
  input.value.includes("!", "@", "#")
    ? (input.style.color = "green")
    : (input.style.color = "black");
  console.log(input.value.includes);
});

// 2. !,@,#포함 글씨색 합당하면 초록색 아니면 검은색
