const button = document.getElementById("getButton");
const navBar = document.getElementById("getNav");

console.log(button);
console.log(navBar);

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    button.style.backgroundColor = "#1a8917";
    navBar.style.backgroundColor = "white";
  } else {
    navBar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
});
