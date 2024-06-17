const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const blogPost = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };
  localStorage.setItem("blogPost", JSON.stringify(blogPost));

  blogs.push(blogPost);
  usernameInput.value = "";
  titleInput.value = "";
  contentInput.value = "";

  console.log(blogs);

  storeBlogs();
  /*  renderBlogs(); */

  window.location.href = "./blog.html";
});

init();
