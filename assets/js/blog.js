const backButton = document.querySelector("#back");
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

function back() {
  window.location.href = "./index.html";
}

backButton.addEventListener("click", back);

testAppend();

renderBlogs();

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

// alert("you clicked this");
