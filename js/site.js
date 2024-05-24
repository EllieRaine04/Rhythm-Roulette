// index.js - Experimenting
// Author: Elisa Anderson 
// Date:5-14-24

document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.getElementById("album-scroll");
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");

    scrollLeftButton.addEventListener("click", function() {
        scrollContainer.scrollBy({
            left: -150, // Adjust this value to scroll more or less
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener("click", function() {
        scrollContainer.scrollBy({
            left: 150, // Adjust this value to scroll more or less
            behavior: 'smooth'
        });
    });
});
