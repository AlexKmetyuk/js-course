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
