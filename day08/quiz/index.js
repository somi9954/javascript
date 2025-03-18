const myString = ["abstract algebra", "PrOgRaMmErs"];
const Solution = myString.map((x) => {
  return x
    .split("")
    .map((x) => (x == "a" ? x.toUpperCase() : x.toLowerCase()))
    .join("");
});
console.log(Solution);

//const solution = (myString) => [...myString].map((x) => (x == "a" ? x.toUpperCase() : x.toLowerCase())).join("");

const todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];
const finished = [true, false, true, false];
const solution1 = (todo_list, finished) =>
  todo_list.filter((x, i) => !finished[i]);

const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

const solution2 = (names) => names.filter((x, i) => i % 5 == 0);
console.log(solution2(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]))

const start_num = 10;
const end_num = 3;


const solution3 = (start_num, end_num) =>
  Array(start_num - end_num + 1)
    .fill(0)
    .map((x, i) => start_num - i);
