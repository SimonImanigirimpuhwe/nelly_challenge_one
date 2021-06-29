
const get_user_name  = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((result) => result.json())
    .then((data) => {
        const header = document.querySelector(".header_title")
        return header.innerHTML = `${data.name}'s posts`
    })
    .catch((err) =>console.log(err))   
}

window.addEventListener('load', () => {
   const posts = localStorage.getItem("user_posts");

   const post_div = document.querySelector(".posts_container")
   const parsed_posts = JSON.parse(posts)
   get_user_name(parsed_posts[0].userId)
   
   const user_posts = parsed_posts.map((post) => {
       return `
       <div class="post_card">
        <div class="user_info">
            <p class="title">${post.title}</p>
            <p>${post.body}</p>
        </div>
       </div>
  `
   }).join("")

   post_div.innerHTML = user_posts
   
})