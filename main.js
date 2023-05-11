// WEBSITE PROJECT BY NAAZPREET GIANI

//BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", calculateScore);

//Variables
let outputMessageEl = document.getElementById("output");

inputEl1 = document.getElementById("q1-in");
inputEl2 = document.getElementById("q2-in");
inputEl3 = document.getElementById("q3-in");
inputEl4 = document.getElementById("q4-in");
inputEl5 = document.getElementById("q5-in");

outputEl1 = document.getElementById("q1-out");
outputEl2 = document.getElementById("q2-out");
outputEl3 = document.getElementById("q3-out");
outputEl4 = document.getElementById("q4-out");
outputEl5 = document.getElementById("q5-out");

function calculateScore() {
  //Set score to zero
  let score = 0;

  //Variables
  let q1 = inputEl1.value.toLowerCase();
  let q2 = inputEl2.value.toLowerCase();
  let q3 = inputEl3.value.toLowerCase();
  let q4 = inputEl4.value.toLowerCase();
  let q5 = inputEl5.value.toLowerCase();

  //Process
  if (q1 === "stephen curry" || q1 === "steph curry") {
    score++;
    outputEl1.innerHTML = "Correct!";
    inputEl1.style.borderColor = "green";
    outputEl1.style.color = "green";
  } else {
    outputEl1.innerHTML = "Incorrect.";
    inputEl1.style.borderColor = "red";
    outputEl1.style.color = "red";
  }

  if (q2 === "james naismith" || q2 === "james" || q2 === "naismith") {
    score++;
    outputEl2.innerHTML = "Correct!";
    inputEl2.style.borderColor = "green";
    outputEl2.style.color = "green";
  } else {
    outputEl2.innerHTML = "Incorrect.";
    inputEl2.style.borderColor = "red";
    outputEl2.style.color = "red";
  }

  if (q3 === "dribbling") {
    score++;
    outputEl3.innerHTML = "Correct!";
    inputEl3.style.borderColor = "green";
    outputEl3.style.color = "green";
  } else {
    outputEl3.innerHTML = "Incorrect.";
    inputEl3.style.borderColor = "red";
    outputEl3.style.color = "red";
  }

  if (q4 === "travel") {
    score++;
    outputEl4.innerHTML = "Correct!";
    inputEl4.style.borderColor = "green";
    outputEl4.style.color = "green";
  } else {
    outputEl4.innerHTML = "Incorrect.";
    inputEl4.style.borderColor = "red";
    outputEl4.style.color = "red";
  }

  if (q5 === "bottom") {
    score++;
    outputEl5.innerHTML = "Correct!";
    inputEl5.style.borderColor = "green";
    outputEl5.style.color = "green";
  } else {
    outputEl5.innerHTML = "Incorrect.";
    inputEl5.style.borderColor = "red";
    outputEl5.style.color = "red";
  }

  //CALCULATIONS AND FEEDBACK
  let percentScoreEl = (score / 5) * 100;

  let outOfScoreEl = score;

  if (outOfScoreEl <= 2) {
    outputMessageEl.innerHTML = "Try Again.";
    outputMessageEl.style.color = "red";
  } else if (outOfScoreEl === 3) {
    outputMessageEl.innerHTML = "Not Bad!";
    outputMessageEl.style.color = "orange";
  } else if (outOfScoreEl === 4) {
    outputMessageEl.innerHTML = "Great Job!";
    outputMessageEl.style.color = "lime";
  } else {
    outputMessageEl.innerHTML = "Amazing Job!";
    outputMessageEl.style.color = "green";
  }

  // Output
  document.getElementById("outOfScore").innerHTML = outOfScoreEl;
  document.getElementById("percentScore").innerHTML = percentScoreEl.toFixed();
}
