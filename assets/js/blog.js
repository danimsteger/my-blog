const backButton = document.querySelector("#back");

function back() {
  window.location.href = "./index.html";
}

backButton.addEventListener("click", back);

testAppend();

renderBlogs();

/* console.log(getBlogs); */

/*
const blogListEl = document.querySelector("#blog-list");

blogListEl.appendChild(blogPost);
 

let blogs = [];

function renderBlogs() {
  blogsCountSpan.textContent = blogs.length;

  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const blogPost = document.createElement("p");
    blogPost.textContent = blog;
    blogPost.setAttribute("data-index", i);

    console.log(blogPost);
  }
} 
  



storeBlogs();
renderBlogs();

init(); */
