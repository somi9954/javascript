// 내장 오브젝트: arr, obj, date, window, ...
//js: 브라우저를 조작하는 언어
// document : html을 관여하는 타입
// element 타입 (= 태그타입)
const div = document.createElement("div");
//div.innerText = "짱짱버튼";
div.innerHTML = "<button>짱짱버튼</button>"; //태그로 되어있음 태그까지 인식
document.body.appendChild(div);

// 유저에게 만들고 싶은 태그 물어보고,
// 유저에게 안에 넣고 싶은 내용 물어보고,
// html에 유저가 원하는대로 태그 만들기

const tag = prompt("원하는 태그");
const content = prompt("원하는 내용");

const div1 = document.createElement(tag);
div1.innerHTML = content;
document.body.appendChild(div1);

[1, 3, 5, 7, 9].forEach((x) => {}); // return 의미 없고 순회(정찰)

// 유저에게 원하는 버튼 갯수를 물어보고, 버튼 안의 내용도 물어보고
const btn_count = +prompt("버튼 갯수");
const btn_contents = prompt("버튼 내용");

const makeButton = (btn_contents) => {
  const btn = document.createElement("button");
  btn.innerText = btn_contents;
  document.body.appendChild(btn);
};

Array(btn_count)
  .fill(0)
  .forEach((v) => {
    makeButton(btn_contents);
  });