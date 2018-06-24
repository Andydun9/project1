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
  });
// end firebase

  // linking the zip when it's entered
$('#submit-button').on('click', function () {
    console.log("#submit-button");
    // var input = $('#zipCode').val().trim();
    // console.log(input);
    var Zip = $('#zipCode').val().trim();
    console.log(Zip);

    //  Weather API
    var weatherAPI = "7f2360e2ae279def0b500b9f28054641";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + Zip + "&units=imperial&appid=" + weatherAPI;


    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);

        // transferring content to HTML
        $(".city").html("<h2>" + response.name + "Temperature</h2>");
        $(".temp").text(response.main.temp + "F");

        // Log data into console
        console.log("Temperature (F):" + response.main.temp);

    })
});