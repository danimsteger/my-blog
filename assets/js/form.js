const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const lastBlogPost = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };
  localStorage.setItem("lastBlogPost", JSON.stringify(lastBlogPost));
  console.log(lastBlogPost);

  window.location.href = "./blog.html";
});
