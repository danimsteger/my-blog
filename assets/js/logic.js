const blogList = document.querySelector("#blog-list");

let blogs = [];

function testAppend() {
  const blog = document.createElement("h1");
  blog.textContent = "hello";
  blogList.appendChild(blog);
}

function renderBlogs() {
  storedBlogs = localStorage.getItem("blogs");
  blogs = JSON.parse(storedBlogs);

  for (let i = 0; i < blogs.length; i++) {
    let blogPost = document.createElement("div");
    blogPost.setAttribute("data-index", i);
    blogPost.setAttribute("class", "entries");

    let title = document.createElement("h2");
    const lastTitle = blogs[i].username;
    title.textContent = lastTitle;
    title.setAttribute("data-index", i);
    title.setAttribute("class", "title");

    let titleLine = document.createElement("hr");

    let content = document.createElement("p");
    const lastContent = blogs[i].content;
    content.textContent = lastContent;
    content.setAttribute("data-index", i);
    content.setAttribute("class", "content");

    let username = document.createElement("p");
    const lastUsername = blogs[i].username;
    username.textContent = "Posted by:" + lastUsername;
    username.setAttribute("class", "username");

    blogList.appendChild(blogPost);
    blogPost.appendChild(title);
    title.appendChild(titleLine);
    blogPost.appendChild(content);
    blogPost.appendChild(username);
  }
}

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
