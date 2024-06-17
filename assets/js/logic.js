const blogList = document.querySelector("#blog-list");

let blogs = [];

function testAppend() {
  const blog = document.createElement("h1");
  blog.textContent = "hello";
  blogList.appendChild(blog);
}

/* function renderBlogs() {
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const p = document.createElement("p");
    (p.textContent = "hello:"), blog;
    package.setAttribute("data-index", i);

    blogList.appendChild(p);
  }
} */

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
