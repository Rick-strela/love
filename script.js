function showHiddenMessage() {
    document.getElementById('hiddenMessage').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll('#gallery img');

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}