
$(document).ready(function () {


    var config = {
        apiKey: "AIzaSyAUo4yqSzNjCfAdx9tGPN3HtgnAmb4zDbk",
        authDomain: "brewfinder-da560.firebaseapp.com",
        databaseURL: "https://brewfinder-da560.firebaseio.com",
        projectId: "brewfinder-da560",
        storageBucket: "brewfinder-da560.appspot.com",
        messagingSenderId: "839326870516"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

    var zip = []
    var zipcode = 0

    //   var zip= $("#zipCode").val().trim()
    //  childSnap.val().zip;

    $("#submit-button").click(function (event) {
        event.preventDefault()
        zip = $("#zipCode").val().trim();

        console.log(zip)

        database.ref().push({
            zip: zip
        })

    })

// function to get from the landing page to results page
var yesButton = $('#yes').on('click', function () {
    console.log("yesButton");
    $(this).parent().hide();
    $('.container').show();
    resultsPage();
});

// function for displaying the results page
var resultsPage = function () {
    window.location = "../project1/results.html";

}

// function to bring user to the Wiki page if no is clicked
var noButton = $('#no').on('click', function () {
    console.log("noButton");
    $(this).parent().hide();
    $('.container').show();
    deadPage();
});

// function for displaying the dead page
var deadPage = function Redirect() {
    window.location = "https://en.wikipedia.org/wiki/Shirley_Temple_(beverage)";
}
 
});
