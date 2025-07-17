let x1 = document.getElementById("color1");
const s1 = window.getComputedStyle(x1);
let x2 = document.getElementById("color2");
const s2 = window.getComputedStyle(x2);
let x3 = document.getElementById("color3");
const s3 = window.getComputedStyle(x3);
let x4 = document.getElementById("color4");
const s4 = window.getComputedStyle(x4);
let box = document.getElementById("selectedColor");

x1.addEventListener("click", function (e) {
  localStorage.setItem("bgColor", s1.backgroundColor);
  box.style.backgroundColor = localStorage.getItem("bgColor");
});
x2.addEventListener("click", function (e) {
  localStorage.setItem("bgColor", s2.backgroundColor);

  box.style.backgroundColor = localStorage.getItem("bgColor");
});
x3.addEventListener("click", function (e) {
  localStorage.setItem("bgColor", s3.backgroundColor);

  box.style.backgroundColor = localStorage.getItem("bgColor");
});
x4.addEventListener("click", function (e) {
  localStorage.setItem("bgColor", s4.backgroundColor);
  box.style.backgroundColor = localStorage.getItem("bgColor");
});

// localStorage.clear()
if (localStorage.getItem("bgColor")) {
  box.style.backgroundColor = localStorage.getItem("bgColor");
}
