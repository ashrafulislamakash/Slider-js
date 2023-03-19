const images = [
  "images/slider-1.png",
  "images/slider-2.png",
  "images/slider-3.png",
];

let imgIndex = 0;
const imgEi = document.getElementById("slider-img");
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];

  imgEi.setAttribute("src", imgUrl);
  imgIndex++;
}, 1000);
