// function time() {
//   let now = new Date();

//   document.write("현재 시각은 " + now.toLocaleString());

//   location.reload();
// }
// setInterval(time, 10000);

// let now = new Date();
// const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
// const dayName = daysOfWeek[now.getDay()];

// document.write("현재 년도는 " + now.getFullYear(), "<br>");

// document.write("현재 월은 " + (now.getMonth() + 1));
// document.write("현재 날짜는 " + now.getDate(), "<br>");
// document.write("현재 요일은 " + dayName, "<br>");
// document.write("현재 시는 " + now.getHours(), "<br>");
// document.write("현재 분은 " + now.getMinutes(), "<br>");
// document.write("현재 초는 " + now.getSeconds(), "<br>");

// const numbers = new Array(4)
// const days = [{키:값}]

// let now = new Date();
// const days = [
//   "일요일",
//   "월요일",
//   "화요일",
//   "수요일",
//   "목요일",
//   "금요일",
//   "토요일",
// ];
// // const dayName = daysOfWeek[now.getDay()];

// document.write("현재 년도는 " + now.getFullYear(), "<br>");

// document.write("현재 월은 " + (now.getMonth() + 1));
// document.write("현재 날짜는 " + now.getDate(), "<br>");
// document.write("현재 요일은 " + days[now.getDay()], "<br>");
// document.write("현재 시는 " + now.getHours(), "<br>");
// document.write("현재 분은 " + now.getMinutes(), "<br>");
// document.write("현재 초는 " + now.getSeconds(), "<br>");

let nums = [1, 2, 3];
let chars = ["a", "b", "c", "d"];

let numsChars = nums.concat(chars); //concat 기존배열요소에 추가해 새로운 배열을 만든다.
console.log(numsChars);

let charsNums = chars.concat(nums);
console.log(charsNums);

// console.log(nums.join()); //join 배열 요소를 문자열로 합친다. 이때 구분자를 지정할 수 있다
// console.log(chars.join("/"));

// nums.push(4, 5); //push 배열의 맨 끝에 새로운 요소를 추가한다.
// console.log(nums);
// nums.unshift(0); //unshift 배열의 시작 부분에 새로운 요소를 추가한다.
// console.log(nums);

// nums.pop(); //pop 배열에서 마지막 요소를 꺼내 그 값을 결과로 반환한다.
// console.log(nums);
// nums.shift(); // shift 배열에서 첫 번째 요소를 꺼내 그 값을 결과로 반환한다.
// console.log(nums);

// nums.splice(3, 2); //spolce 배열의 원하는 위치에 요소를 추가하거나 삭제한다.
// console.log(nums);
// nums.splice(3, 1, 6); //spolce
// console.log(nums);

// let result1 = nums.slice(2, 4);
// console.log(result1);
// console.log(nums);
