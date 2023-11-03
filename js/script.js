//Array img

const imgBoxElem = document.querySelector(".img-box");
const carouselElem = document.querySelector(".carousel");
console.log(carouselElem);
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

imgBoxElem.innerHTML = `<img src="img/${arrayImg[2]}"/>`;
