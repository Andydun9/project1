
  // var config = {
  //   apiKey: "AIzaSyAUo4yqSzNjCfAdx9tGPN3HtgnAmb4zDbk",
  //   authDomain: "brewfinder-da560.firebaseapp.com",
  //   databaseURL: "https://brewfinder-da560.firebaseio.com",
  //   projectId: "brewfinder-da560",
  //   storageBucket: "",
  //   messagingSenderId: "839326870516"
  // };
  // firebase.initializeApp(config);

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