// UNIT - 1
// ----------------- //

// Написати скрипт який буде виводити у консоль повіомлення:

// “Hello after 4 seconds”  через 4 секунд.
// “Hello after 8 seconds”  через 8 секунд.

// setTimeout(() => {
//   console.log("Hello after 4 seconds");
// }, 4000);

// setTimeout(() => {
//   console.log("Hello after 8 seconds");
// }, 8000);

// ----------------- //

// Написати функцію, яка буде приймати в якості аргументів функцію-колбек та кількість секунд на скільки затримати функцію-колбек

// function delay(callback, delay) {
//   setTimeout(callback, delay * 1000);
// }

// delay(() => {
//   console.log("Hello");
// }, 2);

// delay(() => {
//   console.log("Hello 2");
// }, 4);

// ----------------- //

// Реалізувати функціонал режиму сну комп'ютера
// Якщо користувач не клацав по сторінці більше 3 секунд, затемняти сторінку

// const html = document.querySelector("html");

// let timeout = null;

// function sleep() {
//   timeout = setTimeout(() => {
//     html.style.filter = "brightness(0.5)";
//   }, 3000);
// }

// function wakeUp() {
//   timeout = null;
//   clearTimeout(timeout);
//   html.style.filter = "brightness(1)";
// }

// sleep();

// html.addEventListener("click", () => {
//   console.log(timeout);

//   if (timeout) {
//     wakeUp();
//   } else {
//     sleep();
//   }
// });

// ----------------- //

// Написати скрипт, який буде запускати рахунок від нуля до нескінченності
// Додати можливість зупинити рахунок

//   <style>
//     .timer {
//       text-align: center;
//       width: 300px;
//       border: 1px solid red;
//       padding: 10px;
//     }

//     .count {
//       font-size: 25px;
//     }
//   </style>

// <div class="timer">
//   <p class="count">0</p>
//   <button class="start-btn">START!</button>
//   <button class="clear-btn">CLEAR!</button>;
// </div>

// const count = document.querySelector(".count");
// const btn = document.querySelector(".start-btn");
// const clearBtn = document.querySelector(".clear-btn");

// let interval;

// btn.addEventListener("click", () => {
//   if (!interval) {
//     start();
//   } else {
//     stop();
//   }
// });
// clearBtn.addEventListener("click", clear);

// function start() {
//   btn.textContent = "STOP!";
//   interval = setInterval(() => {
//     count.textContent = Number(count.textContent) + 1;
//   }, 500);
// }

// function stop() {
//   btn.textContent = "START!";
//   clearInterval(interval);
//   interval = null;
// }

// function clear() {
//   clearInterval(interval);
//   interval = null;
//   count.textContent = 0;
// }

// ----------------- //

// Написати простий таймер

// .timer__items {
//   display: flex;
//   font-size: 48px;
// }
// .timer__item {
//   position: relative;
//   min-width: 60px;
//   margin-left: 10px;
//   margin-right: 10px;
//   padding-bottom: 15px;
//   text-align: center;
// }
// .timer__item::before {
//   content: attr(data-title);
//   display: block;
//   position: absolute;
//   left: 50%;
//   bottom: 0;
//   transform: translateX(-50%);
//   font-size: 14px;
// }
// .timer__item:not(:last-child)::after {
//   content: ":";
//   position: absolute;
//   right: -15px;
// }

// <input type="date" class="date-input" />
// <button class="start-btn">START!</button>

// <div class="timer">
//   <div class="timer__items">
//     <div class="timer__item timer__days">00</div>
//     <div class="timer__item timer__hours">00</div>
//     <div class="timer__item timer__minutes">00</div>
//     <div class="timer__item timer__seconds">00</div>
//   </div>
// </div>

// const input = document.querySelector(".date-input");
// const btn = document.querySelector(".start-btn");
// const clearBtn = document.querySelector(".clear-btn");

// const daysEl = document.querySelector(".timer__days");
// const minutesEl = document.querySelector(".timer__minutes");
// const secondsEl = document.querySelector(".timer__seconds");
// const hoursEl = document.querySelector(".timer__hours");

// let interval;

// btn.addEventListener("click", () => {
//   const dateArr = input.value.split("-");

//   interval = setInterval(() => {
//     countdown(dateArr[2], dateArr[1], dateArr[0]);
//   }, 1000);
// });

// clearBtn.addEventListener("click", (e) => {
//   input.value = "";
//   clearInterval(interval);
//   daysEl.textContent = "00";
//   hoursEl.textContent = "00";
//   minutesEl.textContent = "00";
//   secondsEl.textContent = "00";
// });

// function countdown(day, month, year) {
//   const remain = new Date(year, month - 1, day) - new Date();

//   const days = remain > 0 ? Math.floor(remain / 1000 / 60 / 60 / 24) : 0;
//   const hours = remain > 0 ? Math.floor(remain / 1000 / 60 / 60) % 24 : 0;
//   const minutes = remain > 0 ? Math.floor(remain / 1000 / 60) % 60 : 0;
//   const seconds = remain > 0 ? Math.floor(remain / 1000) % 60 : 0;

//   daysEl.textContent = days > 9 ? days : "0" + days;
//   hoursEl.textContent = hours > 9 ? hours : "0" + hours;
//   minutesEl.textContent = minutes > 9 ? minutes : "0" + minutes;
//   secondsEl.textContent = seconds > 9 ? seconds : "0" + seconds;
// }
// ----------------- //

// На самоопрацювання

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }

// for (var i = 0; i < arr.length; i++) {
//   let newIterator = i;
//   setTimeout(function () {
//     console.log(`Index: ${newIterator}, element: ${arr[newIterator]}`);
//   }, 3000);
// }

// UNIT - 2

// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.js

// Написати функцію, яка буде завантажувати скрипт на сторінку
// Передавати колбек, який буде викликатись після завантаження скрипта
// Підключити декілька скріптів
// Кожен наступний має підключатись після того як заватажився минулий

// Відрефакторити код

// const loadScript = (url) => {
//   const script = document.createElement("script");
//   script.src = url;

//   document.body.append(script);

//   return new Promise((resolve, reject) => {
//     script.addEventListener("load", () => {
//       resolve(script);
//     });

//     script.addEventListener("error", () => {
//       reject(null, "ERROR");
//     });
//   });
// };

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
// )
//   .then((script) => {
//     console.log(script, "are loaded");
//     return loadScript(
//       "https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.js"
//     );
//   })
//   .then((script) => {
//     console.log(script, "are loaded");
//     return loadScript(
//       "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
//     );
//   })
//   .then((script) => {
//     console.log(script, "are loaded");
//     console.log("All scripts are loaded!");
//   })
//   .catch((data, error) => {
//     console.error(error);
//   });

// ----------------- //

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// console.log("end");

// ----------------- //

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// ----------------- //

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// ----------------- //

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1.then((res) => {
//   console.log(2);
// });

// console.log("end");

// ----------------- //

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");

// ----------------- //
