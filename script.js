'use strict';

function getDogImageMulti(numDogs) {
    fetch('https://dog.ceo/api/breeds/image/random/' + numDogs)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
    //.then(responseJson => console.log(responseJson));
}

function displayResults(responseJson) {
    console.log(responseJson);

    $("div").empty();
    // WHY DOESNT THIS WORK?
    for (let i = 0; i < responseJson.message.length; i++) {
        $("div").append(`<img src="${responseJson.message[i]}">`)
    }
    //$("div").append(`<img src="${responseJson.message}">`)

}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();

        const numDogs = $('#js-numDogs').val(); // obtains number from form
        //console.log(numDogs); // confirm number has been obtained

        //enforce constraint on number of dogs, then call api
        if (numDogs < 1 || numDogs > 50) {
            alert("The number of dogs must be between 1-50")
        } else {

            const responseJson = getDogImageMulti(numDogs); //THIS IS AN ARRAY
        }
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});