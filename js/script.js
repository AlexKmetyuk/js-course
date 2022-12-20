// Створити розмітку списка користувачів.
// Якщо у користувача немає аватара, дати йому стандартний аватар

const defaultAvatar =
  "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png";

const users = [
  {
    name: "Alex",
    avatar:
      "https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg",
  },
  {
    name: "Max",
  },
  {
    name: "Poly",
    avatar:
      "https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg",
  },
];

const list = document.querySelector(".users-list");

users.forEach((user) => {
  const markup = `<li><img width="100" src="${
    user.avatar || defaultAvatar
  }" alt="Avatar"/><p>${user.name}</p></li>`;

  list.insertAdjacentHTML("beforeend", markup);
});
