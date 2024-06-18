const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");
const themeSwitcher2 = document.querySelector("#theme-switcher2");
const container = document.querySelector(".container");

// Theme Switcher: switches theme from light to dark
let mode = "light";

themeSwitcher2.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    container.setAttribute("class", "dark");
    console.log("we are switching to dark mode");
    themeSwitcher2.textContent = "🌝";
  } else {
    mode = "light";
    container.setAttribute("class", "light");
    console.log("we are switching to light mode");
    themeSwitcher2.textContent = "🌚";
  }
});

//Form inputs are stored locally in an object and then stringified when submit is clicked
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const blogPostInfo = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };

  // Checks if all fields have been filled out before submitting.
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
      // Stringifies the blogPostInfo object and stores it locally
      localStorage.setItem("blogPostInfo", JSON.stringify(blogPostInfo));

      // Takes locally stored blogPostInfo string and pushes it to blogs array (found in logic.js)
      blogs.push(blogPostInfo);
      usernameInput.value = "";
      titleInput.value = "";
      contentInput.value = "";

      // Calls storeBlogs function found in logic.js to locally store the blogs array as a string
      storeBlogs();

      // Changes page to blog
      window.location.href = "./blog.html";
    }
  }
  validateForm();
});

// Calls init function found in logic.js to parse the blogs array from local storage.
init();
