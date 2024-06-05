// index.js - Experimenting
// Author: Elisa Anderson 
// Date:5-14-24

//Scrolling?______________________________________________
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

//Chat bot conversation______________________________________
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  };

//Generate chat through button
$("#make-convo").click(function(){
    const chat = $("#insert-text").val();
    $("#output-chatbot").append('<div class="human-text"><p>' + chat + '</p></div>')
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output-chatbot").append('<div class="bot-text"><p>' + newText + '</p></div>');
    // add section's formatting (background color) to the conversation
    $(this).parent().addClass("chat-section");
    //Clear input every time user hit send
    document.getElementById('insert-text').value = '';
});

//Survey_______________________________________________________
$("#survey-button").click(function(){
    $("#survey-here").append("HOWDY");
});