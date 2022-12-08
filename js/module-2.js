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

//UNIT - 2
// ----------------- //

// Напишіть функцію, яка буде виводити у консоль 'Hello Javascript'

// function sayHello() {
//   console.log("Hello Javascript!");
// }

// sayHello();

// ----------------- //

// Напишіть функцію, яка буде приймати в якості аргументів ім'я та прізвище та повертати повне ім'я.

// function getFullName(firstName, secondName) {
//   const fullName = `${firstName} ${secondName}`;

//   return fullName;
// }

// const fullName = getFullName("Max", "Brown");

// console.log(fullName);
// ----------------- //

// Напишіть функцію, яка буде приймати в якості аргументів два числа та повертати їх суму

// function getSum(firstNumber, secondNumber) {
//   const sum = firstNumber + secondNumber;
//   return sum;
// }

// console.log(getSum(10, 5));
// console.log(getSum(20, 45));

// ----------------- //

// Напишіть функцію, яка буде приймати в якості аргументів масив чисел та цифру
// Повернути масив чисел, які ділятсья на цифру з аргументів функції

// function createNewArr(numbersArr, number) {
//   const newNumbersArr = [];

//   for (const numberItem of numbersArr) {
//     if (numberItem % number === 0) {
//       newNumbersArr.push(numberItem);
//     }
//   }

//   return newNumbersArr;
// }

// console.log(createNewArr([1, 2, 3, 4, 5, 6, 7, 8], 2));
// console.log(createNewArr([4, 2, 5, 7, 8, 4, 5, 3], 3));

// ----------------- //

// Напишіть функцію, яка буде приймати в якості аргументів довільну кількість строк та повертатиме рядок з цих строк

// function createString() {
//   const argsArr = Array.from(arguments);

//   const string = argsArr.join(" ");

//   return string;
// }

// console.log(createString("Alex", "Polu", "Ajax", "black"));
// ----------------- //

// Напишіть функцію, яка буде приймати в якості аргументів довільну килькість чисел та повертати їх суму
// function sum() {
//   const argsArr = Array.from(arguments);

//   let totalSum = 0;

//   for (const number of argsArr) {
//     totalSum += number;
//   }

//   return totalSum;
// }

// console.log(sum(1, 2, 3, 4, 5));

// ----------------- //

// Напишіть функцію, яка буде приймати в якості аргумента кількість хвилин та поверніть їх у форматі години:хвилини / 00:00
// function getTime(mins) {
//   const hours = Math.floor(mins / 60);
//   const minutes = mins % 60;

//   const fullHours = hours < 10 ? "0" + hours : hours;
//   const fullMinutes = minutes < 10 ? "0" + minutes : minutes;

//   console.log(`${fullHours}:${fullMinutes}`);
// }

// getTime(305);
// getTime(450);
// getTime(124125152);
// ----------------- //

// Напишіть функцію, яка буде приймати в якості аргументів баланс та суму коштів які хочуть зняти, виведіть результат у консоль

// function cashMachine(balance, cash) {
//   const cashLeft = balance - cash;

//   if (cashLeft => 0) {
//     console.log(`Ви зняли ${cash}, залишилось ${cashLeft}`);
//   } else {
//     console.log("Недостатньо коштів");
//   }

// }

// cashMacines(5000, 500)

//  -------------

// let balance = 5000;

// function cashMachine(cash) {
//   if (balance >= cash) {
//     balance = balance - cash;
//     console.log(`Ви зняли ${cash}, залишилось ${balance}`);
//   } else {
//     console.log("Недостатньо коштів");
//   }
// }

// cashMachine(500);
// cashMachine(1000);
// cashMachine(300);
// ----------------- //
