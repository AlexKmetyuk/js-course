// UNIT - 1
// ----------------- //

// Написати скрипт, який буде додавати у список заміток замітку, з можливістю її видалення

//   <style>
//     li {
//       margin-bottom: 10px;
//     }
//     li button {
//       margin-left: 10px;
//     }
//   </style>

// <form class="add-form">
//   <label>Add note:</label>
//   <input class="note-input" type="text" />
//   <button>Add</button>
// </form>

// <ul class="notes"></ul>

// const input = document.querySelector(".note-input");
// const form = document.querySelector(".add-form");
// const notesList = document.querySelector(".notes");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (input.value === "") return;

//   const note = createNote(input.value);
//   input.value = "";

//   notesList.append(note);
// });

// notesList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete-btn")) {
//     e.target.parentNode.remove();
//   }
// });

// function createNote(text) {
//   const noteItem = document.createElement("li");
//   noteItem.textContent = text;
//   const btn = createDeleteButton();

//   noteItem.append(btn);

//   return noteItem;
// }

// function createDeleteButton() {
//   const button = document.createElement("button");
//   button.textContent = "Delete";
//   button.classList.add("delete-btn");

//   return button;
// }

// ----------------- //

// Написати скрип який буде створювати галерею зображень,
// та при натисканні на зображення буде виводити його велику версію

// const images = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
//     description: "Aerial Beach View",
//   },
// ];

// const list = document.querySelector(".images-list");

// function createImage({ preview, original, description }) {
//   const item = document.createElement("li");
//   const img = document.createElement("img");

//   img.src = preview;
//   img.alt = description;
//   img.dataset.large = original;
//   img.style.width = "200px";
//   img.classList.add("img");
//   item.append(img);

//   return item;
// }

// images.forEach((item) => {
//   const itemImg = createImage(item);

//   list.append(itemImg);
// });

// list.addEventListener("click", (e) => {
//   if (e.target.classList.contains("img")) {
//     const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.large}" width="800" height="600">
// `);

//     instance.show();
//   }
// });

// ----------------- //

// Написати скрипт який буде керувати червоним квадратиком за допомогою стрілок на клавіатурі

{
  /* <style>
    .border {
      width: 400px;
      height: 400px;
      border: 1px solid black;
      padding: 0;
      margin: 0;
      position: relative;
    }

    .box {
      width: 20px;
      height: 20px;
      background-color: red;
      position: absolute;
      top: 0px;
      left: 0px;
    }
  </style> */
}

{
  /* <div class="border">
  <div class="box"></div>
</div>; */
}

// const box = document.querySelector(".box");

// let topStart = 0;
// let leftStart = 0;

// window.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowUp") {
//     if (topStart > 0) topStart -= 10;
//     box.style.top = topStart + "px";
//   } else if (e.key === "ArrowDown") {
//     if (topStart < 380) topStart += 10;
//     box.style.top = topStart + "px";
//   } else if (e.key === "ArrowLeft") {
//     if (leftStart > 0) leftStart -= 10;
//     box.style.left = leftStart + "px";
//   } else if (e.key === "ArrowRight") {
//     if (leftStart < 380) leftStart += 10;
//     box.style.left = leftStart + "px";
//   }
// });
// ----------------- //
