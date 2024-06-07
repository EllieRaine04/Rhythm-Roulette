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
// Jazz songs
$("#jazz-button").click(function(){
    //Generate rand numbers 0 - 2
    var randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    //Generate rand songs based on number
    if (randNum == 0){
        $("#rand-song").html("<h2>" + "Rollin' Out - Eric Darius" + "</h2>" + "<a href='https://open.spotify.com/track/2F8bvOLt0gB43do7itzHcH?si=1bd7727d393b458e'>" + "<img src='img-songs/rolling_out.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Rollin out.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else if (randNum == 1){
        $("#rand-song").html("<h2>" + "Wilting - Glass Trio" + "</h2>" + "<a href='https://open.spotify.com/track/6DrPWXPRmH6osy99X58H6K?si=58d7294339104e9e'>" + "<img src='img-songs/wilting.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Wilting.mp3'>" + "</audio>" + "</div>"
        )
    } else {
        $("#rand-song").html("<h2>" + "Breezin' - George Benson" + "</h2>" + "<a href='https://open.spotify.com/track/1m3BAsNsQAaSNMD2M6vlKY?si=51315c704e0e419d'>" + "<img src='img-songs/breezin.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Breezin.mp3'>" + "</audio>" + "</div>"
        )
    }
})

// Classical songs
$("#classical-button").click(function(){
    //Generate rand numbers 0 - 2
    var randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    //Generate rand songs based on number
    if (randNum == 0){
        $("#rand-song").html("<h2>" + "ICARUS - Tony Ann" + "</h2>" + "<a href='https://open.spotify.com/track/7aTuZWl7qYNYBAHDOurXOx?si=87097d5549194e5a'>" + "<img src='img-songs/icarus.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Tony Ann  ICARUS Official Visualizer.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else if (randNum == 1){
        $("#rand-song").html("<h2>" + "Fracture - Stephan Moccio" + "</h2>" + "<a href='https://open.spotify.com/track/2m2GJpBjQNNphaCgBeoj7R?si=3aa5b31a600047d6'>" + "<img src='img-songs/fracture.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Fracture.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else {
        $("#rand-song").html("<h2>" + "Valse Delle Vigne - Nascondiglio" + "</h2>" + "<a href='https://open.spotify.com/track/3JSPIgK4QMCTSEXZCMRuPj?si=764f2b65487f4de9'>" + "<img src='img-songs/valse_delle_vigne.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Valse Delle Vigne.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    }
})

// Rock songs
$("#rock-button").click(function(){
    //Generate rand numbers 0 - 2
    var randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    //Generate rand songs based on number
    if (randNum == 0){
        $("#rand-song").html("<h2>" + "Next semester - Twenty One Pilots" + "</h2>" + "<a href='https://open.spotify.com/track/1BANPzYIhCQkJ1ZFq2Fb0O?si=5f4b59efa2334991'>" + "<img src='img-songs/next_semester.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Twenty One Pilots  Next Semester Official Video.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else if (randNum == 1){
        $("#rand-song").html("<h2>" + "Paint It, Black - The Rolling Stones" + "</h2>" + "<a href='https://open.spotify.com/track/63T7DJ1AFDD6Bn8VzG6JE8?si=e95f10278bc9459a'>" + "<img src='img-songs/paint_it_black.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/The Rolling Stones  Paint It Black Official Lyric Video.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else {
        $("#rand-song").html("<h2>" + "Dark Matter - Pearl Jam" + "</h2>" + "<a href='https://open.spotify.com/track/0S4VR8n0KBkE6DxrjArswJ?si=9a3fafd45d2f4333'>" + "<img src='img-songs/dark_matter.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Pearl Jam  Dark Matter Official Visualizer.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    }
})

// Pop songs
$("#pop-button").click(function(){
    
    //Generate rand numbers 0 - 2
    var randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    //Generate rand songs based on number
    if (randNum == 0){
        $("#rand-song").html("<h2>" + "Nice to meet you - Imagine Dragon" + "</h2>" + "<a href='https://open.spotify.com/track/7sxb5C2mE0l5xfSL9M2hxQ?si=a9548212ac7e468d'>" + "<img src='img-songs/nice_to_meet_you.jpg' width=500 height=500>" + "</a>"
            + "<div>" + "<audio controls>" + "<source src='img-songs/Imagine Dragons  Nice to Meet You Official Music Video.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else if (randNum == 1){
        $("#rand-song").html("<h2>" + "Espresso - Sabrina Carpenter" + "</h2>" + "<a href='https://open.spotify.com/track/2qSkIjg1o9h3YT9RAgYN75?si=5fcd5966cb974779'>" + "<img src='img-songs/espresso.png' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Sabrina Carpenter  Espresso Official Video.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else {
        $("#rand-song").html("<h2>" + "Too Sweet - Hozier" + "</h2>" + "<a href='https://open.spotify.com/track/4IadxL6BUymXlh8RCJJu7T?si=5f49c4e7da7f46d6'>" + "<img src='img-songs/too_sweet.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Hozier  Too Sweet Official Lyric Video.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    }
})

// Country songs
$("#country-button").click(function(){
    //Generate rand numbers 0 - 2
    var randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    //Generate rand songs based on number
    if (randNum == 0){
        $("#rand-song").html("<h2>" + "Think I’m In Love With You - Chris Stapleton" + "</h2>" + "<a href='https://open.spotify.com/track/65M92JpTbAdHmTQm4jGaDa?si=18951e0fdecc4f35'>" + "<img src='img-songs/think_im_in_love_with_you.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Chris Stapleton  Think Im In Love With You Official Audio.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else if (randNum == 1){
        $("#rand-song").html("<h2>" + "A Bar Song (Tipsy) - Shaboozey" + "</h2>" + "<a href='https://open.spotify.com/track/2FQrifJ1N335Ljm3TjTVVf?si=123ac5a885084f03'>" + "<img src='img-songs/a_bar_song.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Shaboozey  A Bar Song Tipsy Official Visualizer.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else {
        $("#rand-song").html("<h2>" + "Messed Up As Me - Keith Urban" + "</h2>" + "<a href='https://open.spotify.com/track/4Znwf3U6xJsQrj0UveLpOx?si=cc1c2c5f68124fb3'>" + "<img src='img-songs/messed_up_as_me.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Keith Urban  Messed Up As Me Official Audio.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    }
})

// Hip-hop songs
$("#hiphop-button").click(function(){
    //Generate rand numbers 0 - 2
    var randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    //Generate rand songs based on number
    if (randNum == 0){
        $("#rand-song").html("<h2>" + "Unforgettable  - French Montana, Swae Lee" + "</h2>" + "<a href='https://open.spotify.com/track/3B54sVLJ402zGa6Xm4YGNe?si=9046cff21ca64952'>" + "<img src='img-songs/unforgettable.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/French Montana  Unforgettable ft Swae Lee.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else if (randNum == 1){
        $("#rand-song").html("<h2>" + "Blueberry Faygo - Lil Mosey" + "</h2>" + "<a href='https://open.spotify.com/track/6wJYhPfqk3KGhHRG76WzOh?si=f0d3c004f38047a1'>" + "<img src='img-songs/blueberry_faygo.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Lil Mosey  Blueberry Faygo Directed by Cole Bennett.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
    } else {
        $("#rand-song").html("<h2>" + "Magnolia -  Playboi Carti" + "</h2>" + "<a href='https://open.spotify.com/track/1e1JKLEDKP7hEQzJfNAgPl?si=f2f5f5174ef346f6'>" + "<img src='img-songs/magnolia.jpg' width=500 height=500>" + "</a>"
                + "<div>" + "<audio controls>" + "<source src='img-songs/Playboi Carti  Magnolia Official Video.mp3' type='audio/mpeg'>" + "</audio>" + "</div>"
        )
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

