import "./3.css";
let remove = document.querySelector("#c>div");
if (/right/.test(localStorage.getItem("class"))) {
  remove.classList.add("right");
  remove.classList.add("item");
}
remove.addEventListener("click", () => {
  if (/right/.test(remove.className)) {
    remove.classList.remove("item");
    remove.classList.remove("right");
    localStorage.setItem("class", remove.className);
  } else {
    remove.classList.remove("item");
    remove.classList.add("right");
    localStorage.setItem("class", remove.className);
  }
});
