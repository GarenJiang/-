let p = document.querySelector("#a>P");
let x = localStorage.getItem("count") * 1 || 0;
let but1 = document.querySelector("#a>.button1");
let but2 = document.querySelector("#a>.button2");
let but3 = document.querySelector("#a>.button3");
let but4 = document.querySelector("#a>.button4");
but1.addEventListener("click", () => {
  x += 1;
  localStorage.setItem("count", x);
  p.innerHTML = x || 0;
});
but2.addEventListener("click", () => {
  x -= 1;
  localStorage.setItem("count", x);
  p.innerHTML = x || 0;
});
but3.addEventListener("click", () => {
  x *= 2;
  localStorage.setItem("count", x);
  p.innerHTML = x || 0;
});
but4.addEventListener("click", () => {
  x /= 2;
  localStorage.setItem("count", x);
  p.innerHTML = x || 0;
});
p.innerHTML = x || 0;
