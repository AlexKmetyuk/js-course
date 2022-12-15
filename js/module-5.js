// UNIT - 1
// ----------------- //

// Написати скрипт керування  особистим кабінетом інтернет-банку
// Клієнт може знімати та поповняти кошти на балансі
// Кожна транзакція, це об'єкт з властивостями id, type, amount

// Типи транзакцій
// const transactionTypes = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 1000,
//   transactions: [],
// };

// const account = {
//   balance: 1000,
//   transactions: [],

//   getBalance() {
//     return this.balance;
//   },

//   createTransaction(type, amount) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };
//   },

//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log("Недостаньо коштів!");
//       return;
//     }

//     const transaction = this.createTransaction(
//       transactionTypes.WITHDRAW,
//       amount
//     );
//     this.transactions.push(transaction);
//     this.balance -= amount;

//     console.log(`Ви зняли ${amount}, залишилось ${this.balance}`);
//   },

//   deposit(amount) {
//     const transaction = this.createTransaction(
//       transactionTypes.DEPOSIT,
//       amount
//     );

//     this.transactions.push(transaction);
//     this.balance += amount;

//     console.log(
//       `Ви поповнили баланс на ${amount}, загальна сума ${this.balance}`
//     );
//   },

//   getTransaction(id) {
//     return this.transactions.find((transaction) => transaction.id === id);
//   },

//   getAllTransactionAmount(type) {
//     const total = this.transactions.reduce((total, transaction) => {
//       if (type === transaction.type) {
//         total += transaction.amount;
//       }

//       return total;
//     }, 0);

//     return total;
//   },

//   allDec() {
//     return (
//       this.getAllTransactionAmount(transactionTypes.DEPOSIT) -
//       this.getAllTransactionAmount(transactionTypes.WITHDRAW)
//     );
//   },
// };

// const balance = account.getBalance();

// console.log("Balance", balance);

// account.withdraw(500);
// account.deposit(1500);
// account.deposit(400);
// account.deposit(200);

// console.log(account);

// const allDeposits = account.getAllTransactionAmount(transactionTypes.DEPOSIT);
// console.log("All deposits", allDeposits);

// const allWithdraw = account.getAllTransactionAmount(transactionTypes.WITHDRAW);
// console.log("All withdraw", allWithdraw);

// console.log(account.allDec());

// ----------------- //

// Є функція

// Викликати її так, щоб у this.value було "Hello, javascript"
// function log() {
//   console.log(this.value);
// }

// const obj = { value: "Hello, javascript!" };

// log.call(obj);

// ----------------- //

// Є функція showFullName і об'єкт user

// function showFullName(firstPart, secondPart) {
//   console.log(this[firstPart] + " " + this[secondPart]);
// }

// const user = {
//   firstName: "Max",
//   lastName: "Brown",
// };

// Викликати функцію так, щоб вона вивела в консоль повне ім'я користувача

// showFullName.call(user, "firstName", "lastName");

// ----------------- //

// Є функція add

// function add(number) {
//   return this.value + number;
// }

// Викликати функцію так, щою у this було {value: 10} а у number = 5
// Створити нову функцію addFive, яка буде зажди додавати 5 до number
// Створити нову функцію addTen, яка буде зажди додавати 10 до number

// function add(number) {
//   return this.value + number;
// }

// // const result = add.call({ value: 10 }, 5);

// const addFive = add.bind({ value: 5 });
// const addTen = add.bind({ value: 10 });

// const result = addFive(10);
// const result2 = addTen(45);
// const result3 = addTen(100);

// console.log(result);
// console.log(result2);
// console.log(result3);
// ----------------- //
// Виправте помилки щоб код працював

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice);
// callAction(product.showPrice.bind(product));

// ----------------- //
// const car = {
//   brand: "Renault",
//   model: "Megane",
//   number: 10,
// };

// Створити метод об'єкта, який буде продавати одну машину
// Створити функцію реєстрації яка буде приймати ім'я, прізвище так функцію-колбек яка буде виконуватись після рєєстрації клієнта
// Зареєструвати клієнта та продати одну машину

// const car = {
//   brand: "Renault",
//   model: "Megane",
//   number: 10,

//   sellCar() {
//     this.number -= 1;

//     console.log("One car are sold!");
//   },
// };

// // console.log(car);

// // car.sellCar();

// // console.log(car);

// function registration(firstName, lastName, callback) {
//   console.log(`${firstName} ${lastName} are registered!`);

//   callback();
// }

// registration("Max", "Brown", car.sellCar.bind(car));

// console.log(car);
