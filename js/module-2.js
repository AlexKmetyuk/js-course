// UNIT - 1
// ----------------- //

// const arr = ["Alex", "Mango", "Kiwi", "Apple"];
// Вивести довжину масива у консоль
// Вивести у консоль перший, третій, останній елемент масиву
// Замінити третій елемент на "Ajax", останній на "Poly"
// За допомогою циклу вивести всі елементи масива у консоль (for / for...of...)

// const arr = ["Alex", "Mango", "Kiwi", "Apple"];

// console.log(arr.length);
// console.log(arr[0], arr[2], arr[arr.length - 1]);

// arr[2] = "Ajax";
// arr[arr.length - 1] = "Poly";

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const arrItem of arr) {
//   console.log(arrItem);
// }

// ----------------- //

// const arr = [1, 2, 3, 4, 5];
// Створити копію масиву

// const arr = [1, 2, 3, 4, 5];

// const newArr = Array.from(arr);
// const newArr = arr.slice(0)
// const newArr = [].concat(arr);

// console.log(arr);
// console.log(newArr);

// console.log(arr === newArr);

// ----------------- //

// const poem = "Ой у лузі червона калина";
// Попросити користувача ввести номер слова та замінити його на слово яке введе користувач
// Вивести користувачеві нове речення

// const wordsArr = poem.split(" ");

// const wordNumber = prompt(
//   `${poem}. \nВведіть номер слова яке хочете замінити. Від 1 до ${wordsArr.length}`
// );

// const userWord = prompt("Введіть слово для заміни");

// wordsArr[wordNumber - 1] = userWord;

// const newPoem = wordsArr.join(" ");

// alert(newPoem);

// ----------------- //

// Створити масив та заповнити його числами від 1 до 10
// Написати код який буде повертати цей масив у зворотньому порядку не використовуючи reverse()

// const numbersArr = ["alex", "max", "ajax", "brown"];

// console.log(numbersArr);

// const newArr = [];

// for (const number of numbersArr) {
//   newArr.unshift(number);
// }

// for (let i = numbersArr.length - 1; i >= 0; i--) {
//   newArr.push(numbersArr[i]);
// }

// console.log(newArr);

// ----------------- //

// Написати код який створить новий масив без повторів
// const arr = [1, 2, 3, 4, 3, 2, 5, 1, 6, 6, 7, 2];

// const newArr = [];

// for (const number of arr) {
//   if (!newArr.includes(number)) {
//     newArr.push(number);
//   }
// }

// console.log(newArr);

// ----------------- //

// Написати код, який створить новий масив без falsy значень

// const arr = [
//   "Poly",
//   undefined,
//   "Mango",
//   "Ajax",
//   false,
//   null,
//   "Max",
//   0,
//   124124,
//   12143,
//   NaN,
//   "",
// ];

// const newArr = [];

// for (const item of arr) {
//   if (item) {
//     newArr.push(item);
//   }
// }

// console.log(arr);

// console.log(newArr);

// ----------------- //

// Написати код, який буде зрівнювати два масива на ідентичність
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];
// const arr3 = [1, 2, 3, 4, 5, 6];
// const arr4 = [1, 2, 3, 5, 4];
// Зрівняти ці масиви

// const firstArr = arr1;
// const secondArr = arr4;

// let isEqual;

// if (firstArr.length === secondArr.length) {
//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] === secondArr[i]) {
//       isEqual = true;
//     } else {
//       isEqual = false;
//       break;
//     }
//   }
// } else {
//   isEqual = false;
// }

// console.log("Are arrays equal?", isEqual);

// ----------------- //
