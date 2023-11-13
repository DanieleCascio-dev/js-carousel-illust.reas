// //Array img

// const imgBoxElem = document.querySelector(".img-box");
// const carouselElem = document.querySelector(".carousel");
// /* const rightElem = document.querySelector(".right");
// console.log(rightElem); */
// const leftElem = document.querySelector(".left");
// let imgMess = "";
// let message = "";
// let index = 2;

// const arrayImg = [
//   "07_BOTANICAL_01.jpg",
//   "12_13_GHOST_COTTAGECORE_01.jpg",
//   "14-15_PUMPKIN_SPELL_01.jpg",
//   "16_CLOUDS_01.jpg",
//   "30_BUBBLE_BATH_01.jpg",
//   "31_ARCADE_01.jpg",
// ];

// message += createSlides(arrayImg);
// console.log(message);
// for (let i = 0; i < arrayImg.length; i++) {
//   const element = arrayImg[i];
//   imgMess += `<img src="img/${element}"/>`;
// }

// carouselElem.innerHTML += imgMess;
// imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;

// //Change img on click right

// document.querySelector(".right").addEventListener("click", function () {
//   console.log("hey");
//   nextImg(arrayImg, index);
// });

// //Change on click left
// document.querySelector(".left").addEventListener("click", function () {
//   console.log("hey");
//   if (index === 0) {
//     index = arrayImg.length - 1;
//     imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
//     console.log(
//       (imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`)
//     );
//   } else if (index === arrayImg.length - 1) {
//     index--;
//     imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
//   } else {
//     index--;
//     imgBoxElem.style.backgroundImage = `url(../img/${arrayImg[index]})`;
//   }
// });

// /* **************************** */
// //FUNCTION

// function createSlides(array) {
//   array.forEach((curImg) => {
//     return `<img src="img/${curImg}" alt="" >`;
//   });
// }

// function nextImg(array, index) {
//   console.log("ciao");
//   if (index === array.length - 1) {
//     index = 0;
//     imgBoxElem.style.backgroundImage = `url(../img/${array[index]})`;
//     index++;
//   } else {
//     if (index !== 1) {
//       index++;
//       imgBoxElem.style.backgroundImage = `url(../img/${array[index]})`;
//     } else {
//       imgBoxElem.style.backgroundImage = `url(../img/${array[index]})`;
//       index++;
//     }
//   }
// }
/* *************************************************************************** */
//Dichiarazioni variabili
const items = document.querySelector(".items");
const thumbnailElem = document.querySelector(".thumbnail");
console.log(thumbnailElem);
let imgMess = "";
let thumbnailMess = "";

const images = [
  {
    image: "img/ARCADE.jpg",
    title: "31-Arcade",
    text: "This is the last day of witchtober!I couldn’t help but conclude this challenge by forcing myself to raise the bar, thus making an illustration that also included an animation.",
  },
  {
    image: "img/BOTANICAL.jpg",
    title: "07-Botanical",
    text: "Mandrakes you know, they are clever, better to hide the keys of the greenhouse if you plan to grow them!I hope you like this drawing as much as I do!",
  },
  {
    image: "img/BUBBLE_BATH.jpg",
    title: "30-Bubble bath",
    text: "We are almost at the end of this 'witchtober'! I do not deny that the theme has put me to the test, but after a first moment of discouragement the design was born almost alone! Also in this instance, the final result is greatly influenced by the color palette, do you like it?",
  },
  {
    image: "img/CLOUDS.jpg",
    title: "16-Clouds",
    text: "Day 16, theme 'Clouds'. I’m really proud of how this challenge is progressing. My profile is enriched with many magical illustrations, I’m excited to see my progress so far!",
  },
  {
    image: "img/GHOST_COTTAGECORE.jpg",
    title: "12-Ghost + 13-Cottagecore",
    text: "Everyone told me 'inktober is an impossible challenge, it just demoralizes you'. In fact this week it was impossible to carry out all the drawings of the challenge, but it doesn’t matter, those I skipped I will finish them later! In the meantime I want to share this last drawing, made in record time (which is wonderful, because it means I’m learning to draw much faster).",
  },
  {
    image: "img/PUMPKIN_SPELL.jpg",
    title: "14-Pumpkin + 15-Spell",
    text: "I hope you like this new illustration. I see a story full of meaning and you?",
  },
];

//Create slides and thumbnail
createSliderWithThumbs(images);

//Put the img into html
items.innerHTML += imgMess;

//Array with all item in html
const allImg = document.querySelectorAll(".item");
const allThumbnail = document.querySelectorAll(".small-img");

//set a variable for last postion of allImg
const lastPos = allImg.length - 1;

//set a variable for index
let indexImg = 0;

//Set the first img to display block
allImg[0].classList.add("active");
allThumbnail[indexImg].classList.add("selected");
/* allThumbnail[indexImg].addEventListener("mouseover", wait);
allThumbnail[indexImg].addEventListener("mouseout", go); */

//add interval
let interval = setInterval(nextImg, 5000);

//Event listener to "next" div
document.querySelector(".next").addEventListener("click", nextImg);

//Event listener to "prev" div
document.querySelector(".prev").addEventListener("click", prevImg);

/* Quando clicco su un thumb cambia anche la img nello slides */
allThumbnail.forEach((currThumbnail, index) => {
  currThumbnail.addEventListener("click", function () {
    clearInterval(interval);
    removeSlidesAndThumb(indexImg);
    showSlidesAndThumb(index);
    indexImg = index;
    interval = setInterval(nextImg, 5000);
  });
});

/* *************************** */
/* FUNCTION */

function createSliderWithThumbs(slidesArray) {
  slidesArray.forEach((curImg) => {
    imgMess += createSlides(curImg);

    createThumbnail(curImg);
  });
}

/* Crea un elemento che rappresenta uno slide */
function createSlides(singleSlide) {
  return ` <div class="item">
  <img src="${singleSlide.image}" alt="" />
  <div class="img-info">
    <h2>${singleSlide.title}</h2>
    <p class="bg-gray">${singleSlide.text}</p>
  </div>
</div>`;
}

/* Crea un elemento che rappresenta un thumbnail */
function createThumbnail(singleSlide) {
  const thumbnailDiv = document.createElement("div");
  thumbnailElem.append(thumbnailDiv);
  thumbnailDiv.classList.add("small-img");
  thumbnailDiv.style.backgroundImage = `url(${singleSlide.image})`;
}

function removeSlidesAndThumb(indexImg) {
  allImg[indexImg].classList.remove("active");
  allThumbnail[indexImg].classList.remove("selected");
}

function showSlidesAndThumb(indexImg) {
  allImg[indexImg].classList.add("active");
  allThumbnail[indexImg].classList.add("selected");
}

function nextImg() {
  clearInterval(interval);
  removeSlidesAndThumb(indexImg);
  if (indexImg >= lastPos) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  showSlidesAndThumb(indexImg);
  interval = setInterval(nextImg, 5000);
}

function prevImg() {
  clearInterval(interval);
  removeSlidesAndThumb(indexImg);
  if (indexImg <= 0) {
    indexImg = lastPos;
  } else {
    indexImg--;
  }
  showSlidesAndThumb(indexImg);
  interval = setInterval(nextImg, 5000);
}

/* function wait() {
  console.log("wait");
  clearInterval(interval);
}
function go() {
  interval = setInterval(nextImg, 5000);
}
 */
