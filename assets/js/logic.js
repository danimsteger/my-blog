const blogList = document.querySelector("#blog-list");

let blogs = [];

//Displays each blog post
function renderBlogs() {
  // Gets blogs array from local storage and parses it to be able to use parts of each element in the array
  storedBlogs = localStorage.getItem("blogs");
  blogs = JSON.parse(storedBlogs);

  // For each item in the array, the following will happen:
  for (let i = 0; i < blogs.length; i++) {
    // Create a div
    let blogPost = document.createElement("div");
    blogPost.setAttribute("data-index", i);
    blogPost.setAttribute("class", "entries");

    // Add h2 element with the title of that element in the array
    let title = document.createElement("h2");
    const lastTitle = blogs[i].username;
    title.textContent = lastTitle;
    title.setAttribute("data-index", i);
    title.setAttribute("class", "title");

    // Add line underneath the title
    let titleLine = document.createElement("hr");
    titleLine.setAttribute("class", "lines");

    // Add p element with the blog content of that element in the array
    let content = document.createElement("p");
    const lastContent = blogs[i].content;
    content.textContent = lastContent;
    content.setAttribute("data-index", i);
    content.setAttribute("class", "content");

    // Add p element with the words "Posted by:" and the username of that element in the array
    let username = document.createElement("p");
    const lastUsername = blogs[i].username;
    username.textContent = "Posted by:" + lastUsername;
    username.setAttribute("class", "username");

    // Append the div to the blogList div
    blogList.appendChild(blogPost);

    // Append title, titleLine, content, and username to each blogPost div
    blogPost.appendChild(title);
    title.appendChild(titleLine);
    blogPost.appendChild(content);
    blogPost.appendChild(username);
  }
}

// If there have been form submissions and there is something in the blogs array, then parse it.
function init() {
  const storedBlogs = JSON.parse(localStorage.getItem("blogs"));

  if (storedBlogs !== null) {
    blogs = storedBlogs;
  }
}

// String the blogs array and put it in local storage.
function storeBlogs() {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}
