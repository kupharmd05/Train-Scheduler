# Train-Scheduler

https://kupharmd05.github.io/Train-Scheduler

The assigment:  Use Google's firebase and moment.js to allow a user to input a train name, destination, first train of the day time, and frequency in minutes and have the page display the train name, destination, frequency, next arrival time and minutes away.

The solution:  Assign variables to the user inputs for each item, pass those to firebase and reset the fields.  Utilize moment.js to convert the first train of the day time to a time in the past (one year ago) and the current time to solve when the next train will arrive.