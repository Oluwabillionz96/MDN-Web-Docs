const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const full = document.querySelector(".full-img");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg']

/* Declaring the alternative text for each image file */

/* Looping through images */

for (const image of images) {
    let img = document.createElement("img");
    img.setAttribute('src', image);
    thumbBar.appendChild(img);
}

thumbBar.addEventListener('click', (e) => {
    displayedImage.setAttribute('src', e.target.src)
})


/*Wiring up the Darken/Lighten button */
