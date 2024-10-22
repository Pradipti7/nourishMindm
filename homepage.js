let slideIndex = 0;
let timeoutId;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dots");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  // Make slides transparent
        slides[i].classList.remove("active"); // Remove active class
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show the active slide
    slides[slideIndex - 1].style.opacity = "1";  // Make the slide visible
    slides[slideIndex - 1].classList.add("active");  // Add active class for fade-in

    // Update active dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";

    // Set timeout for the next slide (adjust the delay as needed)
    clearTimeout(timeoutId);
    timeoutId = setTimeout(showSlides, 8000); // Change slide every 8 seconds
}

function plusSlides(n) {
    clearTimeout(timeoutId); // Clear timeout to prevent multiple calls
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timeoutId); // Clear timeout to prevent multiple calls
    showSlides(slideIndex = n);
}
