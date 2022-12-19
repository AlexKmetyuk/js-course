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

// ----------------- //

// UNIT - 2

// ----------------- //
// const person = {
//   legs: 2,
//   hands: 2,
//   had: 1,
// };

// Створити об'єкт max на основі об'єкту person
// Додати властивості firstName і lastName в об'єкт max
// Вивести всі властивості об'єкту max по черзі, за допомогою for...in...
// Вивести лише властивості об'єкту max

// const max = Object.create(person);

// max.firstName = "Max";
// max.lastName = "Brown";

// // for (const key in max) {
// //   if (max.hasOwnProperty(key)) {
// //     console.log(key);
// //   }
// // }

// for (const key of Object.keys(max)) {
//   console.log(key);
// }

// ----------------- //

// Створити клас Worker, який буде приймати ім'я, прізвище, ставку на день, та кількість днів
// Написати методи -  getName(), getSurname(), getRate(), getDays(), getSalary
// Написати методи - setDays(), setRate()

// class Worker {
//   #rate;
//   #days;

//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.#rate = rate;
//     this.#days = days;
//   }

//   getName() {
//     return this.name;
//   }

//   getSurname() {
//     return this.surname;
//   }

//   get rate() {
//     return this.#rate;
//   }

//   get days() {
//     return this.#days;
//   }

//   set days(days) {
//     this.#days = days;
//   }

//   set rate(newRate) {
//     this.#rate = newRate;
//   }

//   getSalary() {
//     return this.#days * this.#rate;
//   }
// }

// const max = new Worker("Max", "Brown", 10, 20);

// max.rate = 20;

// console.log(max.getName());
// console.log(max.getSalary());

// console.log(max.days);

// ----------------- //

// Переписати об'єкт з ми нулого заняття на клас
// Додати у об'єкт transaction властивість success

// Типи транзакцій
// const transactionTypes = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
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

// class Account {
//   static TransactionTypes = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
//   };

//   transactions = [];

//   constructor(balance) {
//     this.balance = balance;
//   }

//   getBalance() {
//     return this.balance;
//   }

//   createTransaction(type, amount, success) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//       success,
//     };
//   }

//   withdraw(amount) {
//     const transaction = this.createTransaction(
//       Account.TransactionTypes.WITHDRAW,
//       amount
//     );

//     if (this.balance < amount) {
//       console.log("Недостаньо коштів!");
//       transaction.success = false;
//       this.transactions.push(transaction);
//       return;
//     }
//     transaction.success = true;
//     this.transactions.push(transaction);
//     this.balance -= amount;

//     console.log(`Ви зняли ${amount}, залишилось ${this.balance}`);
//   }

//   deposit(amount) {
//     const transaction = this.createTransaction(
//       Account.TransactionTypes.DEPOSIT,
//       amount,
//       true
//     );

//     this.transactions.push(transaction);
//     this.balance += amount;

//     console.log(
//       `Ви поповнили баланс на ${amount}, загальна сума ${this.balance}`
//     );
//   }

//   getTransaction(id) {
//     return this.transactions.find((transaction) => transaction.id === id);
//   }

//   getAllTransactionAmount(type) {
//     const total = this.transactions.reduce((total, transaction) => {
//       if (type === transaction.type) {
//         total += transaction.amount;
//       }

//       return total;
//     }, 0);

//     return total;
//   }

//   allDec() {
//     return (
//       this.getAllTransactionAmount(Account.TransactionTypes.DEPOSIT) -
//       this.getAllTransactionAmount(Account.TransactionTypes.WITHDRAW)
//     );
//   }
// }

// const alex = new Account(2000);

// console.log(alex.getBalance());

// alex.deposit(1500);

// console.log(alex.getBalance());

// alex.withdraw(2000);

// alex.withdraw(2000);

// console.log(alex.getBalance());

// console.log(alex.transactions);

// ----------------- //

// Створити клас MyArray()
// Створити у ньому властивіть length та методи forEach()  та map()
// При цьому не використовувати методи масива які є у JS

// class MyArray {
//   length = 0;
//   constructor(...args) {
//     this.array = args;

//     for (const item of this.array) {
//       this.length += 1;
//     }
//   }

//   getLength() {
//     return this.length;
//   }

//   forEach(callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this.array[i], i, this.array);
//     }
//   }

//   map(callback) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//       newArr.push(callback(this.array[i], i, this.array));
//     }
//     return newArr;
//   }
// }

// const newArr = new MyArray(1, 5, 2, 5, 7, 4);

// console.log(newArr.array);

// console.log(newArr.getLength());

// newArr.forEach((item, index, arr) => {
//   console.log(item);
// });

// const result = newArr.map((item, index, arr) => {
//   return item + 5;
// });

// console.log(result);
// ----------------- //

// Написати клас для приготування піци

// статичні дані:
// const Stuffing = {
//   DOUBLE_CHEESE: 15,
//   PINEAPPLE: 10,
//   TOMATO: 10,
//   HAM: 15,
//   SAUSAGE: 15,
// };

// const Sizes = {
//   SMALL: 30,
//   MEDIUM: 40,
//   MEGA: 70,
// };

// class Pizza {
//   static Stuffing = {
//     DOUBLE_CHEESE: 15,
//     PINEAPPLE: 10,
//     TOMATO: 10,
//     HAM: 15,
//     SAUSAGE: 15,
//   };

//   static Sizes = {
//     SMALL: 30,
//     MEDIUM: 40,
//     MEGA: 70,
//   };

//   price;

//   constructor(size) {
//     this.price = size;
//   }

//   addStuffing(stuffing) {
//     this.price = this.price + stuffing;
//   }
// }

// const pizza = new Pizza(Pizza.Sizes.MEDIUM);

// pizza.addStuffing(Pizza.Stuffing.DOUBLE_CHEESE);
// pizza.addStuffing(Pizza.Stuffing.HAM);

// console.log(pizza);

// ----------------- //

// Створити клас Worker, який буде приймати ім'я, прізвище, зарплату та бонус
// Створити класс FrontEndDeveloper який буде наслідувати клас Worker
// Додати до класу FrontEndDeveloper властивість rating

// class Worker {
//   constructor(name, surname, salary, bonus) {
//     this.name = name;
//     this.surname = surname;
//     this.salary = salary;
//     this.bonus = bonus;
//   }

//   getFullSalary() {
//     return this.salary + this.bonus;
//   }
// }

// class FrontEndDeveloper extends Worker {
//   rating;
//   constructor(name, surname, salary, bonus, rating) {
//     super(name, surname, salary, bonus);

//     this.rating = rating;
//   }

//   set rating(newRat) {
//     this.rating = newRat;
//   }

//   get rating() {
//     return this.rating;
//   }
// }

// const max = new FrontEndDeveloper("Max", "Brown", 800, 100, 9.1);

// console.log(max.getFullSalary());
// max.rating = 10;
// console.log(max.rating);

// const alex = new Worker("Alex", "Red", 200, 10);

// console.log(alex.getRating());
