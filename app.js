const user_btn = document.querySelector("button");
const error_div = document.querySelector(".error");

// user_btn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((result) => result.json())
//     .then((data) => {
//       //   data.forEach((user) => console.log(user.name, user.email));
//       const filtered = data.filter((post) => post.userId === 10);
//       console.log(filtered);
//     })
//     .catch((err) => console.log(err.message));
// });

window.addEventListener("load", () => {
  const card = document.querySelector(".container");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => {
      const mapped_user = data
        .map((user) => {
          return `
        <div class="user_card">
        <div class="avatar">
          <img src="./undraw_profile_pic_ic5t.svg" alt="avatar" />
        </div>
        <div class="user_info">
          <p>${user.name}</p>
          <p>${user.email}</p>
          <button>Get User’s Posts</button>
        </div>
        </div>
        `;
        })
        .join("");
      card.innerHTML = mapped_user;
    })
    .catch((err) => error_div.append(err.message));
});
