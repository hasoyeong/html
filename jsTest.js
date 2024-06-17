// var memNum = prompt("입장객은 몇 명인가요?");
// var colNum = prompt("한 줄에 몇 명씩 있습니까?");

// if (memNum % colNum === 0) rowNum = parseInt(memNum / colNum);
// else rowNum = parseInt(memNum / colNum) + 1;

// document.write("모두 " + rowNum + "개의 줄이 필요합니다.");
// let sum = 0;
// var num = parseInt(prompt("더하고 싶은 값", "10"));
// for (let i = 0; i <= num; i++) {
//   sum += i;
// }
// document.write("1부터" + num + "까지의 합은 " + sum);

// for (let i = 2; i <= 9; i++) {
//   document.write("<div class='dan'>");
//   document.write("<h2>" + i + "단</h2>");

//   for (let j = 2; j <= 9; j++) {
//     document.write(i + "X" + j + "=" + i * j + "<br>");
//   }
//   document.write("</div>");
// }

// for(초기값; 조건식; 증감식) {
//   실행문;
// }
// let memNum = prompt("참가인원은 몇명인가요?")
// let c = prompt("좌석은 한 줄에 몇개를 놓을까요?")
// for(let r = 0; r < rowNum; r++) {
//   for(let c = 0; c < colNum; c++) {
//     let seatNo = r * colNum + c;
//     if(seatNo > memNum) break;
//     document.write("좌석" + seatNo + " ")
//   }
//   document.write("<br>");
// }

// const memNum = prompt("몇명이 참가 하나요?");
// const colNum = prompt("한 줄에 몇개를...");
// const rowNum = memNum / colNum;

// document.write("<div class='table'><h2>죄석배정표</h2><ul>")
// for (let r = 0; r < rowNum; r++) {
//   for (let c = 1; c <= colNum; c++) {
//     let seatNo = r * colNum + c;
//     if (seatNo > memNum) break;
//     document.write("<li>좌석 " + seatNo + "</li>");
//   }
// }
// document.write("</ul></div>")

const memNum = prompt("몇명이 참가 하나요?", "16");
const colNum = prompt("한 줄에 몇개를...", "6");
const rowNum = memNum / colNum;
const user = [
  "하소영",
  "김가영",
  "김유미",
  "전보람",
  "김은솔",
  "서민경",
  "추호연",
  "박민수",
  "이다은",
  "옥찬미",
  "양연수",
  "배채정",
  "박주연",
  "전현정",
  "정다겸",
  "류강민",
  "",
  "",
];

document.write("<div class='table'><h2>좌석배정표</h2><table>");
for (let r = 0; r < rowNum; r++) {
  document.write("<tr>");
  for (let c = 1; c <= colNum; c++) {
    let seatNo = Math.floor(Math.random()* 17);
    

    document.write("<td>" + user[seatNo] + "</td>");
  }
  document.write("</tr>");
}
document.write("</th></table>");


function 함수명(매개변수) {
  실행문;
}

함수명() / 함수명(매개변수);