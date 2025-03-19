//  box(1px solid red) 클래스명을 가진 div에 
// 세로로 유저에게 입력 받은 숫자만큼, 
// 넓이 100%, 높이 50px, 테두리 1px solid black을 가진 미니 박스 만들어서 넣기

const user = +prompt("박스의 수 입력");

const divBox = document.createElement("div");
divBox.className="box";

Array(user).fill(0).forEach((x) =>{
    const minibox = document.createElement("div");
    minibox.className="minibox";
    divBox.appendChild(minibox);
})

document.body.appendChild(divBox);
