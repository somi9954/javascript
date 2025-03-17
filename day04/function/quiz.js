// 1. x를 넣으면 x라서 럭키비키잖아~

function luckybiky(x) {
    return `${x}라서 럭키비키잖아`;
}

//2. x를 넣으면 뒤에  😊+x+😊를 돌려주기
function emogibox(x) {
   return  `😊${x}😊`;
}

//3. x를 넣으면 해당 숫자의 두배를 돌려주기 
function doublebox(x) {
   return x * 2 ;
}

//4. x가 홀수면 두배 돌려주고, 짝수면 세배 돌려주기
function addeven (x) {
    if(x % 2 == 1) {
        return x * 2;
    }else {
        return x * 3;
    }
}

function addeven2 (x) {
    return x % 2 ? x * 2 : x * 3;
}


//5. x가 3의 배수 또는 5의 배수이면 제곱을 돌려주고, 아니면 10더해서 돌려주기
function multiple(x) {
    if( x % 3 == 0 || x % 5 == 0 ) {
        return x ** 2;
    }else {
        return x + 10;
    }
}

function multiple2(x) {
   return x % 3 == 0 || x % 5 == 0 ? x ** 2 : x  + 10;  
}

// 6. x,y가 들어오면 x의 y제곱해서 돌려주기
function Square(x) {
    return x **y ;
}


//7. 배열이 들어오면 첫번째 인덱스에 사탕으로 바꿔주기
function Arrybox(x) {
   x[0] = "candy";
   return x;
}
