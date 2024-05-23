/*
* Authors: Elisa Anderson, Bao Hy Dang, Jasmin Vega, 
Rory Gershen-Lewis, Joyce Cha, Freddie Torres
* Created: May 21 2024
* License: Public Domain
*/

//sortUserName - a function that takes user input and sorts the letters
//of their name

// script.js
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
