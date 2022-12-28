// UNIT - 1

// UNIT - 2
// ----------------- //

// Написати скрипт чату
// Формат повідомлення - `<p><time>${new Date().toLocaleTimeString()}</time> ${message}</p>`

// Початкова розмітка:
//    <input type="text" />
//     <button class="send">send message</button>
//     <button class="save">save chat</button>
//     <button class="clear">clear chat</button>
//     <div></div>

// send message - cтворює повідомлення
// save chat - зберігає чат до localStorage
// clear chat -  очищає чат

// const sendBtn = document.querySelector(".send");
// const saveBtn = document.querySelector(".save");
// const clearBtn = document.querySelector(".clear");
// const input = document.querySelector("input");
// const chat = document.querySelector(".chat");

// sendBtn.addEventListener("click", (e) => {
//   const message = `<p><time>${new Date().toLocaleTimeString()}</time> ${
//     input.value
//   }</p>`;

//   chat.insertAdjacentHTML("afterbegin", message);
//   input.value = "";
// });

// saveBtn.addEventListener("click", saveChatToStorage);

// clearBtn.addEventListener("click", clearStorage);

// function saveChatToStorage() {
//   const markup = chat.innerHTML;
//   localStorage.setItem("chat", markup);
// }

// function clearStorage() {
//   localStorage.removeItem("chat");
//   chat.innerHTML = "";
// }

// function loadChat() {
//   const markup = localStorage.getItem("chat");
//   chat.innerHTML = markup;
// }

// loadChat();

// ----------------- //

// Написати скрипт який додає продукт в корзину
// Наповнення корзини має зберігатись в localStorage

// Початкова розмітка

//   <style>
//     ul {
//       display: flex;
//       list-style: none;
//     }

//     li {
//       margin-left: 10px;
//       border: 1px solid black;
//       padding: 5px;
//     }

//     .cart {
//       border: 1px solid black;
//       padding: 10px;
//     }
//   </style>

// <ul class="list">
//   <li class="item">
//     <h3 class="title">Item 1</h3>
//     <img
//       src="http://placeimg.com/150/200/tech"
//       alt="#"
//       width="150"
//       height="200"
//     />
//     <p>Price: <span class="price">1500</span></p>
//     <button class="add-btn">Add to cart</button>
//   </li>
//   <li class="item">
//     <h3 class="title">Item 2</h3>
//     <img
//       src="http://placeimg.com/150/200/nature"
//       alt="#"
//       width="150"
//       height="200"
//     />
//     <p>Price: <span class="price">500</span></p>
//     <button class="add-btn">Add to cart</button>
//   </li>
//   <li class="item">
//     <h3 class="title">Item 3</h3>
//     <img
//       src="http://placeimg.com/150/200/arch"
//       alt="#"
//       width="150"
//       height="200"
//     />
//     <p>Price: <span class="price">2000</span></p>
//     <button class="add-btn">Add to cart</button>
//   </li>
// </ul>

// <div class="cart">
//   <ul class="cart-list"></ul>
//   <p class="total-price">Total price:</p>
//   <button class="clear-btn">Clear cart</button>
// </div>

// const productList = document.querySelector(".list");
// const cartList = document.querySelector(".cart-list");
// const cartTotalPrice = document.querySelector(".total-price");
// const clearBtn = document.querySelector(".clear-btn");

// const cart = JSON.parse(localStorage.getItem("cart")) || [];
// if (cart.length !== 0) {
//   generateCart();
// }
// // const product = {
// //   name: "name",
// //   price: "1000",
// //   count: 2,
// // };

// productList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("add-btn")) {
//     const card = e.target.parentNode;
//     const name = card.querySelector(".title").textContent;
//     const price = card.querySelector(".price").textContent;
//     const product = {
//       name,
//       price,
//       count: 1,
//     };

//     if (cart.length === 0) {
//       cart.push(product);
//       generateCart();

//       return;
//     }

//     const productIndex = cart.map((item) => item.name).indexOf(name);
//     if (productIndex === -1) {
//       cart.push(product);
//     } else {
//       cart[productIndex].count += 1;
//     }

//     generateCart();
//   }
// });

// function generateCart() {
//   saveCartToStorage();
//   cartList.innerHTML = "";
//   let total = 0;
//   cart.forEach((product) => {
//     const productEl = `<li><p>${product.name}</p><p>Price: ${
//       product.price
//     }</p><p>Count: ${product.count}</p><p>Total: ${
//       product.price * product.count
//     }</p></li>`;

//     console.log(productEl);
//     cartList.innerHTML += productEl;
//     total += product.price * product.count;
//   });

//   cartTotalPrice.textContent = "Total price: " + total;
// }

// function saveCartToStorage() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// function clearCart() {
//   localStorage.removeItem("cart");
//   cartList.innerHTML = "";
//   cart.length = 0;
//   cartTotalPrice.textContent = "Total price: 0";
// }

// clearBtn.addEventListener("click", clearCart);
