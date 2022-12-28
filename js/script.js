// Написати скрипт який додає продукт в корзину
// Наповнення корзини має зберігатись в localStorage

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
