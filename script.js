"use strict";
const btn = document.querySelector(".crimson");

// btn.addEventListener("click", () => {
//   const timer = setTimeout(function () {
//     console.log("hello world");
//   }, 2000);
// });

// const timer = setTimeout(
//   function tName(text) {
//     console.log(text);
//   },
//   2000,
//   "hello world"
// );
// малумотни малум бир вактдан кейин чикариш мумкин

// function tName() {
//   console.log("hello world");
// }

// const timer = setTimeout(tName, 2000);
// berilgan vaqtga aniqroq vaqtda paydo buladi

// let timerID,
//   i = 0;

// timerID = setInterval(function () {
//   if (i === 4) {
//     clearInterval(timerID);
//   }
//   console.log("hello world");
//   i++;
//   console.log(i);
// }, 1000);

// // bu malumotlarni malum muddatda avtomatik tarzda chiqaradi uzluksiz

// let id = setTimeout(function log() {
//   console.log("Muxlisa ishlaringdi qil!!!");
//   id = setTimeout(log, 1000);
// }, 1000);

function btnAnimation() {
  const box = document.querySelector(".box");
  let pos = 0;
  const id = setInterval(animationframe, 10);

  function animationframe() {
    if (pos === 244) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
      box.style.top = pos + "px";
    }
    console.log("hi");
  }
}
btn.addEventListener("click", btnAnimation);
