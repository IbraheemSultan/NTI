// let img = document.getElementById("sliderImg");

// const imgSrc = [
//   "image/menu-1.jpeg",
//   "image/menu-2.jpeg",
//   "image/menu-3.jpeg",
//   "image/menu-4.jpeg",
//   "image/menu-5.jpeg",
//   "image/menu-6.jpeg",
//   "image/menu-7.jpeg",
//   "image/menu-8.jpeg",
// ];
// var i = 0;
// setInterval(arrowRight,2000)
// function arrowRight() {
//   img.src = imgSrc[i++];
//   if (i == 7) i = 0;
// }

// function arrowLeft() {
//     if (i == 0) i = 7;
//     img.src = imgSrc[i--];
// }

// optamization code of Grads  

let img = document.getElementById("sliderImg");

const imgSrc = [
  "image/menu-1.jpeg",
  "image/menu-2.jpeg",
  "image/menu-3.jpeg",
  "image/menu-4.jpeg",
  "image/menu-5.jpeg",
  "image/menu-6.jpeg",
  "image/menu-7.jpeg",
  "image/menu-8.jpeg",
];
var i = 1;
setInterval(arrowRight,5000)
function arrowRight() {
  img.src = `image/menu-${++i}.jpeg`;
  if (i == 8) i = 1;
}

function arrowLeft() {
    if (i == 1) i = 8;
  img.src = `image/menu-${--i}.jpeg`;
}

function slider1() {
    img.src=imgSrc[0]
}
function slider2() {
    img.src=imgSrc[1]
}
function slider3() {
    img.src=imgSrc[2]
}

// 