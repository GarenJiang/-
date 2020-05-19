import "./2.css";
let p = document.querySelector("#b>p");
let div1 = document.querySelector("#b>.div1");
let div2 = document.querySelector("#b>.div2");
p.textContent = localStorage.getItem("item") || "盖伦";
div1.addEventListener("click", () => {
  p.textContent = "盖伦";
  localStorage.setItem("item", "盖伦");
});
div2.addEventListener("click", () => {
  p.textContent = "德莱尔斯";
  localStorage.setItem("item", "德莱尔斯");
});
