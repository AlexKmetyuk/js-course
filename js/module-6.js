// UNIT - 1

// ----------------- //

// Є html розмітка. Зібрати дані у масив формата [{ brand : brand models array }, { brand : brand models array }]

{
  /* <ul class="cars-list">
  <li class="car">
    <p>Audi</p>
    <ul class="models-list">
      <li>A5</li>
      <li>A3</li>
      <li>RS4</li>
      <li>A7</li>
    </ul>
  </li>
  <li class="car">
    <p>Mercedes</p>
    <ul class="models-list">
      <li>C250</li>
      <li>Maybach</li>
      <li>GL350</li>
    </ul>
  </li>
  <li class="car">
    <p>Volkswagen</p>
    <ul class="models-list">
      <li>Passat</li>
      <li>Touareg</li>
      <li>Polo</li>
    </ul>
  </li>
  <li class="car">
    <p>Skoda</p>
    <ul class="models-list">
      <li>Rapid</li>
      <li>Octavia</li>
      <li>Superb</li>
    </ul>
  </li>
</ul>; */
}

// const carsList = [...document.querySelectorAll(".car")];

// const carsArr = carsList.map((car) => {
//   const brand = [...car.children];

//   const carObj = {};

//   carObj[brand[0].textContent] = [...brand[1].children].map(
//     (item) => item.textContent
//   );

//   return carObj;
// });

// console.log(carsArr);

// ----------------- //

// Створити список у html з даних у масиві нижче
// const pizzas = [
//   {
//     name: "Margarita",
//     price: 150,
//   },
//   {
//     name: "Chef pizza",
//     price: 200,
//   },
//   {
//     name: "Ham pizza",
//     price: 180,
//   },
//   {
//     name: "Double cheese pizza",
//     price: 170,
//   },
// ];

// const list = document.querySelector(".pizzas-list");

// pizzas.forEach((pizza) => {
//   const li = document.createElement("li");
//   const name = document.createElement("p");
//   const price = document.createElement("p");
//   name.textContent = pizza.name;
//   price.textContent = pizza.price;

//   //   li.appendChild(name);
//   //   li.appendChild(price);

//   li.append(name, price);

//   list.append(li);
// });

// ----------------- //

// Створити розмітку списка користувачів.
// Якщо у користувача немає аватара, дати йому стандартний аватар

// const defaultAvatar =
//   "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png";

// const users = [
//   {
//     name: "Alex",
//     avatar:
//       "https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg",
//   },
//   {
//     name: "Max",
//   },
//   {
//     name: "Poly",
//     avatar:
//       "https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg",
//   },
// ];

// const list = document.querySelector(".users-list");

// users.forEach((user) => {
//   const markup = `<li><img width="100" src="${
//     user.avatar || defaultAvatar
//   }" alt="Avatar"/><p>${user.name}</p></li>`;

//   list.insertAdjacentHTML("beforeend", markup);
// });

// ----------------- //

// UNIT - 2

// Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
// Sample HTML file :

// <p class="text">JavaScript Exercises - w3resource</p>
// <div>
// <button class="style-btn"
// onclick="">Style</button>
// </div>

// Clicking on the button the font, font size, and color of the paragraph text will be changed.

// const button = document.querySelector(".style-btn");
// const text = document.querySelector(".text");

// button.addEventListener("click", () => {
//   text.style.backgroundColor = "red";
//   text.style.fontSize = "30px";
// });

// ----------------- //

// Write a JavaScript function to get the values of First and Last name of the following form.
// Sample HTML file :

// <form id="form1">
// First name: <input class="name-input" type="text" value="David"><br>
// Last name: <input class="surname-input" type="text" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>

// const button = document.querySelector(".submit-btn");
// const nameInput = document.querySelector(".name-input");
// const lastNameInput = document.querySelector(".surname-input");

// button.addEventListener("click", (event) => {
//   event.preventDefault();

//   console.log(nameInput.value, lastNameInput.value);

//   nameInput.value = "";
//   lastNameInput.value = "";
// });

// ----------------- //

// Написати код, який буде брати username із input та записувати його в users-list

//  <div>
//   <form>
//     <input class="username-input" type="text" placeholder="username" />
//     <input class="submit-btn" type="button" value="Submit" />
//   </form>
//   <ul class="users-list"></ul>
// </div>

// ----------------- //

// Написати код який буде виводити в консоль ширину і висоту window кожен раз коли window змінюж розміри
// window.addEventListener("resize", () => {
//   console.log("Width:", window.innerWidth, "Height:", window.innerHeight);
// });
