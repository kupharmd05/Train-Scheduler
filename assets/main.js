$(document).ready(function () {

  console.log("hi");

  var config = {
    apiKey: "AIzaSyCW-YU-5LAudDgOFvHpBy4aUwhTFnKPLNs",
    authDomain: "train-time-a45ff.firebaseapp.com",
    databaseURL: "https://train-time-a45ff.firebaseio.com",
    projectId: "train-time-a45ff",
    storageBucket: "",
    messagingSenderId: "869092544164"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";

  console.log(trainName, destination, firstTrain, frequency);


  $("submit").on("click", function (event) {
    event.preventDefault();

    console.log("hi")

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#time").val().trim();
    frequency = $("#frequency").val().trim();

    // var newTrain = {
    //   name: trainName,
    //   destination: destination,
    //   firstTrain: firstTrain,
    //   frequency: frequency
    // }

    database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $("#trainName").val("");
    $("#destination").val("");
    $("#time").val("");
    $("#frequency").val("");

    // console.log(trainName);
    // console.log(newTrain.destination);
    // console.log(newTrain.firstTrain);
    // console.log(newTrain.frequency);

 
  });

  database.ref().on("child_added", function (snapshot) {
    var snapval = snapshot.val();

    console.log(snapval.name);
    console.log(snapval.destination);
    console.log(snapval.firstTrain);
    console.log(snapval.frequency)


  })
});