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

  // Testing initial variable setup
  // console.log(trainName, destination, firstTrain, frequency);

// On click of submit button, capture input values, push to firebase, and reset values to empty after push
  $("#submit").on("click", function (event) {
    event.preventDefault();

    console.log("hi")

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#time").val().trim();
    frequency = ($("#frequency").val().trim());



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


  });

  // Firebase data added to table and handle time functions
  database.ref().on("child_added", function (snapshot) {
    var sv= snapshot.val();

    console.log(sv);
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.firstTrain);
    console.log(sv.frequency)

    tFrequency = sv.frequency

    firstTrain = sv.firstTrain

    console.log(tFrequency, firstTrain);

    var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("Current Time " + moment(currentTime).format("HH:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log(diffTime);

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("Minutes until next train " + tMinutesTillTrain);
    

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("Arrival Time " + moment(nextTrain).format("LT"));
    var nextArrival = moment(nextTrain).format("LT");


   
  $("#trainData")
  .append("<tr><td>" + sv.trainName + "</td><td>" + sv.destination + "</td><td>" + sv.freqency + "</td><td>" + nextArrival + "</td><td>" + tMinutesTillTrain + "</td>")



  })


});