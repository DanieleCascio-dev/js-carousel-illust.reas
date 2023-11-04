//Array img

const imgBoxElem = document.querySelector(".img-box");
const carouselElem = document.querySelector(".carousel");
/* const rightElem = document.querySelector(".right");
console.log(rightElem); */
const leftElem = document.querySelector(".left");

const arrayImg = [
  "07_BOTANICAL_01.jpg",
  "12_13_GHOST_COTTAGECORE_01.jpg",
  "14-15_PUMPKIN_SPELL_01.jpg",
  "16_CLOUDS_01.jpg",
  "30_BUBBLE_BATH_01.jpg",
  "31_ARCADE_01.jpg",
];

let imgMess = "";

for (let i = 0; i < arrayImg.length; i++) {
  const element = arrayImg[i];
  imgMess += `<img src="img/${element}"/>`;
}

carouselElem.innerHTML += imgMess;

let index = 2;
imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;

//Change img on click right

document.querySelector(".right").addEventListener("click", function () {
  console.log("hey");
  if (index === arrayImg.length - 1) {
    index = 0;
    imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
    index++;
  } else {
    if (index !== 1) {
      index++;
      imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
    } else {
      imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
      index++;
    }
  }
});

//Change on click left
document.querySelector(".left").addEventListener("click", function () {
  console.log("hey");
  if (index === 0) {
    index = arrayImg.length - 1;
    imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
    console.log(
      (imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`)
    );
  } else if (index === arrayImg.length - 1) {
    index--;
    imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
  } else {
    index--;
    imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
  }
});
