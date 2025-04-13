// input 태그에 내용을 입력하고
// button 태그에 클릭을 하면
// localstorage에 배열 형태로
// todolist - [영화보기, 잠자기,...]

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = JSON.parse(localStorage.getItem("todolist")) || [];
button.addEventListener("click", () => {
  const { value } = input;
  list.push(value);
  localStorage.setItem("todolist", JSON.stringify(list));
});
