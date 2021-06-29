const user_btn = document.querySelector("button");
const error_div = document.querySelector(".error");


const get_posts = (id) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result) => result.json())
  .then((data) => {
    const filtered = data.filter((post) => post.userId === id);
    localStorage.setItem("user_posts", JSON.stringify(filtered))
    window.location = "./posts.html"
  })
  .catch((err) => error_div.append(err.message));
};


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
          <button onclick="get_posts(${user.id})">Get User’s Posts</button>
        </div>
        </div>
        `;
        })
        .join("");
      card.innerHTML = mapped_user;
    })
    .catch((err) => error_div.append(err.message));
});
