// function => 함수 => 기능 => 마술상자
// [input -> output]
/*
function hello(x) {
    return x + "안녕!";
}
const a = hello("강사");
console.log(a);*/
function add(x,y){
    return x + y;  
}
// 문자형이거나, 배열일때 제약이 불가능하기 때문에 불안전하다 => 그래서 타입스크립트 사용
const a = add(1,3); //4

function minus(x,y) {
    return x-y;
}
const b = minus(10,3); //7
const c = minus(add(10,10), add(3,3)); // 14

function isAdult(x) {
    if(x > 19) {
        return "성인";
    }else {
        return "미성년자";
    }
}

