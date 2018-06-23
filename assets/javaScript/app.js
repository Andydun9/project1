
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
    var database=firebase.database();

    var zip = []
    var zipcode=0

    //   var zip= $("#zipCode").val().trim()
    //  childSnap.val().zip;

    $("#submit-button").click(function (event) {
        event.preventDefault()
        zip = $("#zipCode").val().trim();
        
        console.log(zip)

        database.ref().push({
            zip:zip
        })
    
    })

     

   








});
// function to get from the landing page to results page
var yesButton = $('#yes').on('click', function() {
    console.log("yesButton");
    $(this).parent().hide();
    $('.container').show();
    resultsPage();
});

// function for displaying the results page
var resultsPage = function() {
    window.location = ""

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

// Spotify
var token = "BQCoyr4JyNpokBwxCsprCe640BmGxMzn3EA3IZRt4sQTJbMAHV6dyYF-I7AWAub8KH05HRz0y5MdkkDLh0C3ogypwSXWNfTZYR7qFb34RXqgQhRxqOnC1L3bIwMtjtwNw4kXGqsFNxpNV7ymIB1V7jjDuARdXevv1w";

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCoyr4JyNpokBwxCsprCe640BmGxMzn3EA3IZRt4sQTJbMAHV6dyYF-I7AWAub8KH05HRz0y5MdkkDLh0C3ogypwSXWNfTZYR7qFb34RXqgQhRxqOnC1L3bIwMtjtwNw4kXGqsFNxpNV7ymIB1V7jjDuARdXevv1w';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };
