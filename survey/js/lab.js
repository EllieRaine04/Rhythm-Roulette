/*
* Authors: Elisa Anderson, Bao Hy Dang, Jasmin Vega, 
Rory Gershen-Lewis, Joyce Cha, Freddie Torres
* Created: May 21 2024
* License: Public Domain
*/

//sortUserName - a function that takes user input and sorts the letters
//of their name

// script.js

// script.js
//document.addEventListener('DOMContentLoaded', function() {
//    const form = document.getElementById('survey-form');
//
//    form.addEventListener('submit', function(event) {
//        event.preventDefault();
//        const formData = new FormData(form);
//        const entries = {};
//        
//        formData.forEach((value, key) => {
//            if (entries[key]) {
//                if (!Array.isArray(entries[key])) {
//                    entries[key] = [entries[key]];
//                }
//                entries[key].push(value);
//            } else {
//                entries[key] = value;
//            }
//        });



 //   form.addEventListener('submit', function(event) {
 //      event.preventDefault();
 //       const formData = new FormData(form);
 //       const favoriteGenre = formData.get('favoriteGenre');
 //       
 //       if (favoriteGenre === 'Rock') {
 //           window.location.href = 'Rock/Country-page.html';
 //       } else if (favoriteGenre === 'Pop') {
 //           window.location.href = 'Pop/Hip-Hop-page.html';
 //       } else if (favoriteGenre === 'Jazz') {
 //           window.location.href = 'Jazz/Classical-page.html';
 //       } else if (favoriteGenre === 'Country') {
 //           window.location.href = 'Rock/Country-page.html';
 //       } else if (favoriteGenre === 'Classical') {
 //           window.location.href = 'Jazz/Classical-page.html';
 //       } else if (favoriteGenre === 'Hip-hop') {
 //           window.location.href = 'Pop/Hip-hop-page.html';
 //       }
 //       
 //       form.reset();
 //   });

 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        
        const genres = formData.getAll('genres');

        if (genres.includes('rock')) {
            window.location.href = 'Rock-Country/index.html';
        } else if (genres.includes('pop')) {
            window.location.href = 'Pop-Hip-hop/index.html';
        } else if (genres.includes('jazz')) {
            window.location.href = 'Jazz-Classical/index.html';
        } else if (genres.includes('country')) {
            window.location.href = 'Rock-Country/index.html';
        } else if (genres.includes('classical')) {
            window.location.href = 'Jazz-Classical/index.html';
        } else if (genres.includes('hip-hop')) {
            window.location.href = 'Pop-Hip-hop/index.html';
        } else if (genres.includes('calm and peaceful')) {
            window.location.href = 'Jazz-Classical/index.html';
        } else if (genres.includes('up and peppy')) {
            window.location.href = 'Pop-Hip-hop/index.html';
        } else if (genres.includes('something you can bang your head to')) {
            window.location.href = 'Rock-Country/index.html';
        }
        
        form.reset();
    });
});

//   console.log('Form submitted:', entries);
//    link;
//   form.reset();