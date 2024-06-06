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

//Generate random songs______________________________________
// Rock songs
$("#jazz-button").click(function(){
    //Generate rand numbers 0 - 2
    var randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    //Generate rand songs based on number
    if (randNum == 0){
        $("#rand-song").html("<a href='https://open.spotify.com/track/2F8bvOLt0gB43do7itzHcH?si=1bd7727d393b458e'>" + "<img src='img-songs/rolling_out.jpg' width=500 height=500>" + "</a>")
        // var rollinout = new Audio('Rollin out.mp3');
        // rollinout.play();
    } else if (randNum == 1){
        $("#rand-song").html("<a href='https://open.spotify.com/track/6DrPWXPRmH6osy99X58H6K?si=58d7294339104e9e'>" + "<img src='img-songs/wilting.jpg' width=500 height=500>" + "</a>")
    } else {
        $("#rand-song").html("<a href='https://open.spotify.com/track/1m3BAsNsQAaSNMD2M6vlKY?si=51315c704e0e419d'>" + "<img src='img-songs/breezin.jpg' width=500 height=500>" + "</a>")
    }
})


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
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        
        const genres = formData.getAll('genres');

        if (genres.includes('rock')) {
            window.location.href = '.Rock-Country/index.html';
        } else if (genres.includes('pop')) {
            window.location.href = '.Pop-Hip-hop/index.html';
        } else if (genres.includes('jazz')) {
            window.location.href = '.Jazz-Classical/index.html';
        } else if (genres.includes('country')) {
            window.location.href = '.Rock-Country/index.html';
        } else if (genres.includes('classical')) {
            window.location.href = '.Jazz-Classical/index.html';
        } else if (genres.includes('hip-hop')) {
            window.location.href = '.Pop-Hip-hop/index.html';
        } else if (genres.includes('calm and peaceful')) {
            window.location.href = '.Jazz-Classical/index.html';
        } else if (genres.includes('up and peppy')) {
            window.location.href = '.Pop-Hip-hop/index.html';
        } else if (genres.includes('something you can bang your head to')) {
            window.location.href = '.Rock-Country/index.html';
        }
        
        form.reset();
    });
});

