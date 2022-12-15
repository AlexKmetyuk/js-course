// Створити метод об'єкта, який буде продавати одну машину
// Створити функцію реєстрації яка буде приймати ім'я, прізвище так функцію-колбек яка буде виконуватись після рєєстрації клієнта
// Зареєструвати клієнта та продати одну машину

const car = {
  brand: "Renault",
  model: "Megane",
  number: 10,

  sellCar() {
    this.number -= 1;

    console.log("One car are sold!");
  },
};

// console.log(car);

// car.sellCar();

// console.log(car);

function registration(firstName, lastName, callback) {
  console.log(`${firstName} ${lastName} are registered!`);

  callback();
}

registration("Max", "Brown", car.sellCar.bind(car));

console.log(car);
