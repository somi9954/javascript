const my_string = ["cccCCC", "abCdEfghIJ"];
const solution1 = (myString) =>
  [...myString]
    .map((x) => (x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");

console.log(solution1(my_string));

const num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
const solution2 = (num_list) => 
  num_list.map((x) => num_list.length >= 11 ? num_list.reduce((a, c) => a + c) : num_list.reduce((a,c) => a*c));

console.log(solution2(num_list));
