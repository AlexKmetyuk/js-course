// UNIT - 1
// ----------------- //

// Написати функцію, яка буде запитувати ім'я користувача, та функції колбек sayHi та sayGoodbye
// Якщо користувач ввів ім'я - виконувати sayHi, якщо ні - sayGoodbye

// function getUser(onLogin, onError) {
//   const username = prompt("Введіть ваше ім'я");

//   if (username) {
//     onLogin(username);
//   } else {
//     onError();
//   }
// }

// function sayHi(username) {
//   alert(`Hello, ${username}!`);
// }

// function sayGoodbye() {
//   alert("Goodbye!");
// }

// getUser(sayHi, sayGoodbye);

// ----------------- //

// Написати функцію, яка буде імітувати реєстрацію користувача
// Першим аргументом буде приймати об'єкт {login, password}
// Другим та третім аргументами буде риймати функції колбек onRegistered, onNotRegistered відповідно

// function registration({ login, password }, onRegistered, onNotRegistered) {
//   if (login && password) {
//     onRegistered(login);
//   } else {
//     onNotRegistered();
//   }
// }

// function register(username) {
//   console.log(`Hello ${username}! You are successfully registered`);
// }

// function error() {
//   console.log("You are not registered!");
// }

// registration({ login: "max123", password: "123124" }, register, error);

// ----------------- //

// Написати функцію, яка буде приймати масив та функцію колбек та повертати новий масив
// Перебирати масив та передавати елемент масива у функцію колбек на кожній ітерації
// Збільшити кожен елемент масива на 5
// Звести кожен елемент масива в квадрат

// function each(arr, callback) {
//   const newArr = [];

//   for (const item of arr) {
//     const result = callback(item);
//     newArr.push(result);
//   }

//   return newArr;
// }

// function addFive(item) {
//   return item + 5;
// }

// function square(item) {
//   return item * item;
// }

// const result1 = each([1, 2, 3, 4, 5], addFive);
// const result2 = each([1, 2, 3, 4, 5], square);

// console.log(result1);
// console.log(result2);
// ----------------- //

// Переписати функції нижче на стрілочні

// function sayHi(name) {
//   console.log(`Hello, ${name}!`);
// }

// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// numbers.forEach(function (number) {
//   console.log(number);
// });

// const sayHi = (name) => console.log(`Hello, ${name}!`);
// sayHi("Alex");

// const sum = (firstNum, secondNum) => firstNum + secondNum;

// const result = sum(45, 37);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => console.log(number));
// numbers.forEach(console.log);

// ----------------- //

// const number = [1,4,2,6,5,4,3,7,5]
// Використовувати forEach !!!
// Вивести кожен елемент масива у консоль
// Створити новий масив та піднести кожне исло до квадрата
// Знайти суму всіх чисел

// const newArr = [];

// numbers.forEach((number) => {
//   newArr.push(number ** 2);
// });

// let totalSum = 0;

// numbers.forEach((number) => {
//   totalSum += number;
// });

// console.log(totalSum);

// ----------------- //

// const names = ['Max', 'Steve', "Alex", 'Mike']
// Вивести у консоль по порядку імена у форматі - Index: 0, Name: Max

// names.forEach((name, index) => {
//   console.log(`Index: ${index}, Name: ${name}`);
// });
// ----------------- //

// let users = [
//   { name: "Steve", age: 18 },
//   { name: "John", age: 12 },
//   { name: "Liam", age: 16 },
//   { name: "Mike", age: 20 },
//   { name: "Jacob", age: 21 },
// ];
// Вивести у консоль за допомогою forEach() всіх повнолітніх користувачів
// Додати кожному користувачу властивість city

// users.forEach((user) => {
//   const { name, age } = user;

//   if (age >= 18) {
//     console.log(name);
//   }
// });

// users.forEach((user) => {
//   user.city = "Kyiv";
// });

// console.log(users);
// ----------------- //

// Переписати методи об'єкта з минулого заняття на forEach()

// const users = {
//   usersArr: [
//     { username: "max2244", likes: 56, password: "qwert123" },
//     { username: "alex562", likes: 44, password: "adqbe512" },
//     { username: "julia858", likes: 90, password: "211sdg3" },
//   ],

//   getAllUsers() {
//     return this.usersArr;
//   },

//   getAverageLikes() {
//     let totalLikes = 0;

//     for (const user of this.usersArr) {
//       totalLikes += user.likes;
//     }
//     const averageLikes = (totalLikes / this.usersArr.length).toFixed();
//     return averageLikes;
//   },

//   getUser(username) {
//     for (const user of this.usersArr) {
//       if (user.username === username) {
//         return user;
//       }
//     }

//     return null;
//   },

//   changePassword(username, newPassword) {
//     for (const user of this.usersArr) {
//       if (user.username === username) {
//         user.password = newPassword;
//         return;
//       }
//     }
//     console.log("user not find");
//     return null;
//   },
//   addUser(username, password) {
//     const newUser = {
//       username,
//       password,
//       likes: 0,
//     };

//     this.usersArr.push(newUser);
//   },
// };

// ---

// const users = {
//   usersArr: [
//     { username: "max2244", likes: 56, password: "qwert123" },
//     { username: "alex562", likes: 44, password: "adqbe512" },
//     { username: "julia858", likes: 90, password: "211sdg3" },
//   ],

//   getAllUsers() {
//     return this.usersArr;
//   },

//   getAverageLikes() {
//     let totalLikes = 0;

//     this.usersArr.forEach((user) => {
//       totalLikes += user.likes;
//     });

//     const averageLikes = (totalLikes / this.usersArr.length).toFixed();
//     return averageLikes;
//   },

//   getUser(username) {
//     let findUser;

//     this.usersArr.forEach((user) => {
//       if (user.username === username) {
//         findUser = user;
//       }
//     });

//     if (findUser) {
//       return findUser;
//     }

//     return null;
//   },

//   changePassword(username, newPassword) {
//     let isChanged;

//     this.usersArr.forEach((user) => {
//       if (user.username === username) {
//         user.password = newPassword;
//         isChanged = true;
//       }
//     });

//     if (!isChanged) {
//       console.log("user not find");
//       return null;
//     }
//   },

//   addUser(username, password) {
//     const newUser = {
//       username,
//       password,
//       likes: 0,
//     };

//     this.usersArr.push(newUser);
//   },
// };

// const averageLikes = users.getAverageLikes();
// console.log(averageLikes);

// const max = users.getUser("max2244");
// console.log(max.username);
// users.changePassword("max2244", "sbvawrqerbeqr");

// ----------------- //

// const numbers = [1,2,3,4,5]
// Написати функцію аналог forEach()

// function each(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// const addFive = (item) => {
//   console.log(item + 5);
// };

// each(numbers, addFive);

// numbers.forEach(addFive);

// ----------------- //

// UNIT - 2
// ----------------- //

// const numbers = [1, 2, 3, 4, 5]
// Створити новий масив де всі числа будуть піднесені до квадрата

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((num) => num * num);

// console.log(numbers);
// console.log(newNumbers);

// ----------------- //
// const users = [
//   { name: "Max", age: 18 },
//   { name: "Poly", age: 22 },
//   { name: "Alex", age: 17 },
//   { name: "John", age: 33 },
// ];

// Ствоорити масив імен користувачів
// Cтворити масив де будуть тільки повнолітні користувачі
// Перевірити чи всі користувачі повнолітіні
// Перевірити чи хоча б один користувач повнолітній
// const names = users.map(({ name }) => name);
// console.log(names);

// const moreThen18 = users.filter(({ age }) => age >= 18);
// console.log(moreThen18);

// const isAllMoreThen18 = users.every((user) => user.age >= 18);
// console.log(isAllMoreThen18);

// const isOneMoreThen18 = users.some((user) => user.age >= 18);
// console.log(isOneMoreThen18);

// ----------------- //

// const numbers = [11, 10, 22, 29, 31, 2, 4, 7, 8, 12]
// Створти масив тільки парних чисел

// const even = numbers.filter((num) => !(num % 2));

// console.log(even);
// ----------------- //

// const strings = ['car', 'alex', 'javascript', 'php', 'node.js', 'react', 'react-native']
// Створити масив, де всі строки будуть більше 5 символів
// const newStrings = strings.filter((string) => string.length > 5);

// console.log(newStrings);
// ----------------- //

// const blend = [1, 2, [3, 4], 5, [6, 7], 10, [1, 2, 3]];
// Є масив чисел і підмасивів
// Створити новий масив який буде містити тільки підмасиви

// const onlyArr = blend.filter((item) => Array.isArray(item));

// console.log(onlyArr);
// ----------------- //

// const numbers = [1, 2, -3, -4, 5, -10, -22, 6, 8];
// Порахувати кільуість від'ємних чисел масиву
// const count = numbers.reduce((total, item) => {
//   if (item < 0) {
//     total += 1;
//   }

//   return total;
// }, 0);

// console.log(count);
// ----------------- //

// const numbers = [11, 10, 22, 29, 31, 2, 4, 7, 8, 12]
// Порахувати суму чисел масиву за допомогою reduce()

// ----------------- //

// const users = [
//   { name: "Max", age: 18 },
//   { name: "Poly", age: 22 },
//   { name: "Alex", age: 17 },
//   { name: "John", age: 33 },
// ];
// Створити масив імен лише повнолітніх користувачів

// const names = users.reduce((newArr, user) => {
//   if (user.age >= 18) {
//     newArr.push(user.name);
//   }

//   return newArr;
// }, []);

// console.log(names);

// ----------------- //

// const wizards = [
//   {
//     name: "Harry Potter",
//     house: "Gryfindor",
//   },
//   {
//     name: "Cedric Diggory",
//     house: "Hufflepuff",
//   },
//   {
//     name: "Tonks",
//     house: "Hufflepuff",
//   },
//   {
//     name: "Ronald Weasley",
//     house: "Gryfindor",
//   },
//   {
//     name: "Hermione Granger",
//     house: "Gryfindor",
//   },
// ];

// const points = {
//   "Harry Potter": 500,
//   "Cedric Diggory": 750,
//   "Ronald Weasley": 100,
//   "Hermione Granger": 1270,
// };

// Створити масив, який буде міститит тільки магів з Gryfindor
// Об'єднати масив wizards та об'єкт points
