// UNIT - 1
// ----------------- //

// Отримати масив картинок за цим посиланням
// https://jsonplaceholder.typicode.com/photos?_limit=20
// Вивести їх користувачеві у вигляді галереї

//   <style>
//     .gallery {
//       display: flex;
//       flex-wrap: wrap;
//     }

//     .gallery__item {
//       margin-left: 5px;
//     }
//   </style>

// <div class="gallery"></div>

// const elem = `<a class="gallery__item" href="large url"><img class="gallery__image" src="small url" alt="Image description" /></a>`;

// const gallery = document.querySelector(".gallery");

// fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
//   .then((response) => response.json())
//   .then((data) => {
//     createMarkup(data);
//   });

// axios;
//   .get("https://jsonplaceholder.typicode.com/photos?_limit=20")
//   .then(({ data }) => {
//     createMarkup(data);
//   });

// function createMarkup(data) {
//   // console.log(data);

//   data.forEach((item) => {
//     const elem = `<a class="gallery__item" href="${item.url}"><img class="gallery__image" src="${item.thumbnailUrl}" alt="Image description" /></a>`;
//     console.log(elem);

//     gallery.insertAdjacentHTML("beforeend", elem);
//   });
// }

// ----------------- //

// Розглянути бібліотеку axios та переписати минулу задачу

// ----------------- //

// Розглянути https://newsapi.org/
// Та написати невеликий сайт з новинами

// const API_KEY = "28a8677180da43e882281a74f68eed8f";
// const news = document.querySelector(".news");
// const searchBtn = document.querySelector(".search-btn");
// const input = document.querySelector("input");
// const loadBtn = document.querySelector(".load-btn");

// let page = 1;
// let limit = 4;

// function searchNews(query) {
//   page = 1;
//   loadBtn.classList.add("hidden");
//   axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${query}&page=1&pageSize=${limit}&apiKey=${API_KEY}`
//     )
//     .then(({ data }) => {
//       console.log(data);
//       if (data.articles.length > 0) {
//         loadBtn.classList.remove("hidden");
//         createMarkup(data.articles);
//       }
//     });
// }

// function createMarkup(articles) {
//   console.log(articles);
//   articles.forEach((item) => {
//     const elem = document.createElement("li");
//     const img = document.createElement("img");
//     const link = document.createElement("a");

//     link.href = item.url;

//     img.src = item.urlToImage;
//     img.width = "200";

//     const title = document.createElement("p");
//     title.textContent = item.title;
//     link.append(title);
//     link.append(img);

//     elem.append(link);

//     news.append(elem);
//   });
// }

// function loadMoreNews() {
//   axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${input.value}&page=${page}&pageSize=${limit}&apiKey=${API_KEY}`
//     )
//     .then(({ data }) => {
//       createMarkup(data.articles);
//     });
// }

// searchBtn.addEventListener("click", (e) => {
//   console.log(input.value);
//   [...document.querySelectorAll("li")].forEach((item) => item.remove());
//   searchNews(input.value);
// });

// loadBtn.addEventListener("click", (e) => {
//   page += 1;
//   loadMoreNews();
// });
