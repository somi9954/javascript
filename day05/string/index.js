/*const coffee = "americano"; // string object
coffee.repeat("a", "😊");

const menu = ["고기", "상추", "밥"];
menu.push("음료");
menu.push("물");
console.log(menu);*/

/*
const a = coffee.toUpperCase();
const b = coffee.repeat(3);
console.log(a);
console.log(b);

window.prompt();
coffee.repeat(3);
coffee.toUpperCase();
coffee.includes("cano");
*/

/*
//car object 
const car = {
    name: "기아",
    speed: 0,
    up: function() {
        this.speed = this.speed + 1;
    }
}

//string object
const coffee = "ice americano";
*/

const coffee = "ice americano";

coffee.length(); // 문자 길이
coffee.includes("ice"); // 포함 여부, return : boolean
coffee.repeat(5); // 문자 반복, return: string
coffee.replace("i","a")// 바꾸기 ,return :string
coffee.replaceAll("i","a"); // 모두 자르기 , return : string
coffee.slice(0,5) // 자르기(0~4),return : string
coffee.indexOf("ri"); // 몇번째 찾기   , return:number
coffee.startsWith("ice"); // 시작 여부, return:boolean
coffee.endsWith("z"); // 끝 여부  , return:boolean
coffee.toUpperCase(); // 대문자화 , return:string
coffee.toLocaleLowerCase(); // 소문자화, return:string
coffee.split("am"); // 찢기, return:arr

"ice americano".split(" "); //(2) ['ice', 'americano']
