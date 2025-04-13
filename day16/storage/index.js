const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () =>{
  const {value} = input;
  localStorage.setItem("todo", JSON.stringify(value));
})