// Selecting slides and initializing counter
const slides = document.querySelectorAll(".slide");
let counter = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// Function to move to the previous slide
function goPrev() {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    showSlide(counter);
}

// Function to move to the next slide
function goNext() {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    showSlide(counter);
}

// Initial setup to show the first slide
showSlide(counter);