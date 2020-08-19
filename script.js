'use strict';

function getDogImageMulti(numDogs) {
    fetch('https://dog.ceo/api/breeds/image/random/' + numDogs)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));

}

function displayResults(responseJson) {
    console.log(responseJson);

    // Initial method - Works, but does not meet reqs
    // $("div").empty();
    // for (let i = 0; i < responseJson.message.length; i++) {
    //     $("div").append(`<img src="${responseJson.message[i]}">`)
    // }

    //updated method
    $('.results-img').replaceWith(
        `<img src="${responseJson.message[0]}" class="results-img">`)

    for (let i = 1; i < responseJson.message.length; i++) {
        $("div").append(`<img src="${responseJson.message[i]}">`)
    }

    //display the results section
    $('.results').removeClass('hidden');

}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();

        const numDogs = $('#js-numDogs').val(); // obtains number from form

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