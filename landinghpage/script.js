

// side bar
document.querySelector("#opennav").addEventListener("click", function () {
    let a = document.querySelector(".menu-bar");
    let b = document.querySelector("#opennav");
    b.style.display = "none";
    a.style.display = "block";
  });

  document.querySelector("#closenav").addEventListener("click", function () {
    let a = document.querySelector(".menu-bar");
    let b = document.querySelector("#opennav");
    b.style.display = "block";
    a.style.display = "none";
  });

//   slider
let slideIndex = 0;
const slides = document.querySelector('.slides');

function showSlide(index) {
    const slidesArray = document.querySelectorAll('.slide');
    if (index >= slidesArray.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slidesArray.length - 1;
    } else {
        slideIndex = index;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

setInterval(() => {
    moveSlide(1);
}, 3000); // Change image every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});


