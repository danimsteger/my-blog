const backButton = document.querySelector("#back");

function back() {
  window.location.href = "./index.html";
}

backButton.addEventListener("click", back);

testAppend();

renderBlogs();
