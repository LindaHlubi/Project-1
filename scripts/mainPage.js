"use strict";
console.log("=== Loaded viewFavourites.js ===");
// Declare the part of the URL here that is going to be used to route the user
const RECIPE = '?recipe';
const FAV = '?fav';

// Set a couple of variables for use.
let urlSearch;
let workingDiv;

function defaultAction(){
    let i = 0;
    while (i < MAX_RANDOMS) {
        getRandomRecipe();
        i++;
    }
}

urlSearch = window.location.search;

// Check where the uer is trying to go and send them there if it exists.
if (urlSearch) {
    urlSearch = urlSearch.split("=");
    workingDiv = $('#random-recipes');
    // Display a specific recipe.
    if (urlSearch[0] === RECIPE ) {
        workingDiv.empty();
        workingDiv.html("we're going to run the script <b>displaySingleRecipe.js</b> here");

    // Display the users favorites.
    } else if (urlSearch[0] === FAV) {
        workingDiv.empty();
        workingDiv.html("we're going to run the script <b>showFavourites.js</b> here");

    // If there's no match, perform the default action.
    // TODO add in a notifier to the user their match cold not be found.
    } else defaultAction();

} else {
    // Default to the main page - simply shows a couple of random images.
    defaultAction();
}
