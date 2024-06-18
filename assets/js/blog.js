const backButton = document.querySelector("#back");
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

//Changes the page to the original form submission page when the 'back' button is clicked.
function back() {
  window.location.href = "./index.html";
}

backButton.addEventListener("click", back);

// Calls renderBlogs function found in logic.js to display the blogs array that was stored locally
renderBlogs();

// Switches theme from light to dark
let mode = "light";

themeSwitcher.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    container.setAttribute("class", "dark");
    console.log("we are switching to dark mode");
    themeSwitcher.textContent = "🌝";
  } else {
    mode = "light";
    container.setAttribute("class", "light");
    console.log("we are switching to light mode");
    themeSwitcher.textContent = "🌚";
  }
});
