// UNIT - 1
// ----------------- //

// const person = {
//   name: "Max",
//   login: "max1122",
//   age: 25,
//   password: "qwerty123",
//   statistic: { friends: 23, views: 252 },
// };

// Вивести у консоль name, age, password двома способами
// Змінити password на 'qwe444qwe'
// Змінити friends на 30
// Додати властивість email
// Вивести у консоль масив всіх ключів об'єкта
// Вивести у консоль всі ключі об'єкта по черзі
// Вивести у консоль масив всіх властивостей об'єкта
// Вивести у консоль всі властивості об'єкта по черзі
// Вивести у консоль масив всіх значень об'єкта у форматі - [['ключ','значення'],['ключ','значення'],['ключ','значення']]
// Видалити властивість statistic

// console.log(person);

// console.log(person.name);
// console.log(person.age);
// console.log(person.password);

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["password"]);

// person.password = "qwe444qwe";
// person.statistic.friends = 30;

// person.email = "emil@gmail.com";

// const objKeys = Object.keys(person);

// console.log(objKeys);

// for (const key of Object.keys(person)) {
//   console.log(key);
// }

// const personValues = Object.values(person);

// console.log(personValues);

// for (const key of Object.keys(person)) {
//   console.log(person[key]);
// }

// const objArr = Object.entries(person);

// console.log(objArr);

// delete person.statistic;

// console.log(person);

// ----------------- //

// Написати функцію, яка перевіряє, чи є елемент простим об'єктом, а не масивом і не null

// function isObject(obj) {
//   if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
//     return true;
//   }
//   return false;
// }

// console.log(isObject(null));
// ----------------- //

// Написати функцію, яка буде повертати новий об'єкт без вказаних значень without({a: 1, b: 2, c: 3}, ['b', 'c']) // { a: 1 }

// function without(obj, keysArr) {
//   const newObj = {};

//   for (const key of Object.keys(obj)) {
//     if (!keysArr.includes(key)) {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// const newObj = without({ a: 1, b: 2, d: 6 }, ["d", "a"]);

// console.log(newObj);
// ----------------- //

// Написати функцію, яка буде зрівнювати два об'єкта а ідентичність

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 3, c: 3 };
// const obj3 = { a: 1, b: 3, c: 3, d: 5 };
// const obj4 = { a: 1, b: 2, c: 3 };

// function isEqual(firstObj, secondObj) {
//   if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
//     console.log("Об'єкти різної довжини");
//     return false;
//   }

//   for (const key of Object.keys(firstObj)) {
//     if (firstObj[key] !== secondObj[key]) {
//       console.log("Об'єкти не ідентичні");
//       return false;
//     }
//   }

//   console.log("Об'єкти ідентичні");
//   return true;
// }

// isEqual(obj1, obj4);

// ----------------- //

// const users = {
//   usersArr: [
//     { username: "max2244", likes: 56, password: "qwert123" },
//     { username: "alex562", likes: 44, password: "adqbe512" },
//     { username: "julia858", likes: 90, password: "211sdg3" },
//   ],
// };

// Написати метод об'єкта, який поверне всіх користувачів
// Написати метод об'єкта, який поверне середню кількість лайків усіх користувачів
// Написати метод об'єкта, який буде знаходити юзера за його ім'ям
// Написати метод об'єкта, який буде змінювати пароль користувача
// Написати метод об'єкта, який буде створювати нового користувача

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

// const allUsers = users.getAllUsers();
// console.log(allUsers);

// const averageLikes = users.getAverageLikes();
// console.log(averageLikes);

// const user = users.getUser("julia858");
// console.log(user);

// const max = users.getUser("max2244");
// console.log(max);

// users.changePassword("max2244", "qw13r31wd2");

// const newMax = users.getUser("max2244");
// console.log(newMax);

// console.log(users.getAllUsers());

// users.addUser("Ivanq323523", "qsfeg2e32532");

// console.log(users.getAllUsers());
