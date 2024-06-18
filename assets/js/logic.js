const blogList = document.querySelector("#blog-list");

let blogs = [];

function testAppend() {
  const blog = document.createElement("h1");
  blog.textContent = "hello";
  blogList.appendChild(blog);
}

/* let getBlogs = localStorage.getItem("blogs"); */

function renderBlogs() {
  storedBlogs = localStorage.getItem("blogs");
  blogs = JSON.parse(storedBlogs);

  for (let i = 0; i < blogs.length; i++) {
    let blogPost = document.createElement("div");
    blogPost.setAttribute("data-index", i);

    let title = document.createElement("h2");
    const lastTitle = blogs[i].username;
    title.textContent = lastTitle;
    title.setAttribute("data-index", i);

    let content = document.createElement("p");
    const lastContent = blogs[i].content;
    content.textContent = lastContent;
    content.setAttribute("data-index", i);

    let username = document.createElement("p");
    const lastUsername = blogs[i].username;
    username.textContent = "Posted by:" + lastUsername;

    blogList.appendChild(blogPost);
    blogPost.appendChild(title);
    blogPost.appendChild(content);
    blogPost.appendChild(username);
  }
}

//  makePost() {

//   const title = document.createElement("h2");
//   const lastTitle = JSON.parse(localStorage.getItem("title"));
//   title.textContent = lastTitle;

//   const content = document.createElement("p");
//   const lastContent = JSON.parse(localStorage.getItem("content"));
//   content.textContent = lastContent;

//   const username = document.createElement("p");
//   const lastUsername = JSON.parse(localStorage.getItem("username"));
//   username.textContent = lastUsername;

//   if (blogPost !== null) {
//     blogList.appendChild(blogPost);
//     blogPost.appendChild(title);
//     blogPost.appendChild(content);
//     blogPost.appendChild(username);
//   }
// }   */

/* function renderBlogs() {
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const p = document.createElement("p");
    blogPost.textContent = blog;
    blogPost.setAttribute("data-index", i);

    blogList.appendChild(p);
  }
} */

function init() {
  const storedBlogs = JSON.parse(localStorage.getItem("blogs"));

  if (storedBlogs !== null) {
    blogs = storedBlogs;
  }
}

function storeBlogs() {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

function test() {
  console.log("i am testing this");
}

/* 
function renderBlogPost() {
  const lastPost = JSON.parse(localStorage.getItem("blogPost"));
  if (lastPost !== null) {
    console.log(lastPost);
  }
}
renderBlogPost();
 */
