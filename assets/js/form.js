const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");

//Form inputs are stored locally in an object and then stringified when submit is clicked
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const blogPostInfo = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };

  function validateForm() {
    if (usernameInput.value == "" || usernameInput.value == null) {
      alert("Username must be filled out to submit. Please try again.");
      return false;
    } else if (titleInput.value == "" || titleInput.value == null) {
      alert("Title must be filled out to submit. Please try again.");
      return false;
    } else if (contentInput.value == "" || contentInput.value == null) {
      alert("Blog content must be filled out to submit.  Please try again.");
      return false;
    } else {
      localStorage.setItem("blogPostInfo", JSON.stringify(blogPostInfo));

      blogs.push(blogPostInfo);
      usernameInput.value = "";
      titleInput.value = "";
      contentInput.value = "";

      console.log(blogs);

      storeBlogs();
      /*  renderBlogs(); */

      //Changes page to blog
      window.location.href = "./blog.html";
    }
  }
  validateForm();
});

init();
