// displaying current time on all pages

function updateCurrentDate(elementId) {
  const now = new Date();
  const formattedDate = now
    .toLocaleDateString("en-UK", {
      weekday: "long",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");
  const dateElement = document.getElementById(elementId);

  if (dateElement) {
    dateElement.textContent = formattedDate;
  } else {
    console.error(`Element with ID '${elementId}' not found.`);
  }
}

updateCurrentDate("currentDate");
updateCurrentDate("currentDate1");
updateCurrentDate("currentDate2");

// greeting

document.addEventListener("DOMContentLoaded", function () {
  var userName = localStorage.getItem("userName");

  if (!userName) {
    Swal.fire({
      title: "Welcome to your Fitness Tracker!",
      input: "text",
      inputPlaceholder: "Please enter your name",
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed && result.value !== "") {
        localStorage.setItem("userName", result.value);
        displayGreeting(result.value);
      }
    });
  } else {
    displayGreeting(userName);
  }

  function displayGreeting(name) {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var greeting;

    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    var h1Element = document.querySelector(".main-page__heading");
    h1Element.textContent = greeting + ", " + name + "!";

    var h2Element = document.querySelector(".results__title");
    h2Element.textContent = "Well done, " + name + "!";

    Swal.fire({
      title: greeting + ", " + name + "!",
      text: "Welcome to your Fitness Tracker. Let's get started!",
    });
  }
});

// mood

document.getElementById("mood-btn1").addEventListener("click", function () {
  updateResult("Happy", this);
});

document.getElementById("mood-btn2").addEventListener("click", function () {
  updateResult("Ok", this);
});

document.getElementById("mood-btn3").addEventListener("click", function () {
  updateResult("Sad", this);
});

function updateResult(mood, clickedButton) {
  var resultsDescr = document.getElementById("mood-result2");

  document.querySelectorAll(".mood__btn").forEach(function (btn) {
    btn.classList.remove("active-mood");
  });

  clickedButton.classList.add("active-mood");

  resultsDescr.textContent = mood;
}

// water

let totalml = 0;
let activeButton = 1;

function drink(drops, buttonNumber) {
  if (buttonNumber === activeButton) {
    totalml += drops;
    document.getElementById("mood-result3").innerText = totalml + " ml";
    activeButton++;
    updateButtonState();
  }
}

// to make sure you can only click on the next button and cannot go back
function updateButtonState() {
  const buttons = document.querySelectorAll(".drop button");
  buttons.forEach((button, index) => {
    button.disabled = index + 1 !== activeButton;
  });
}

// sleep

for (let i = 1; i <= 5; i++) {
  let sleepBtn = document.getElementById(`sleep-btn${i}`);
  let hrs = `0${i + 5}`.slice(-2);
  let res = document.getElementById(`mood-result1`);

  sleepBtn.addEventListener("click", function () {
    console.log(`${hrs}:00 hours`);
    res.textContent = `${hrs}:00 hours`;
  });
}

// steps

function saveSteps(value) {
  console.log("New value", value);
  localStorage.setItem("steps", value);

  const stepsDisplay = document.getElementById("stepsDisplay");
  if (stepsDisplay) {
    stepsDisplay.innerHTML = value + " steps";
  }

  const moodResultElement = document.getElementById("mood-result4");
  if (moodResultElement) {
    moodResultElement.textContent = value + " steps";
  }
}

const stepsBtn1 = document.getElementById("steps-btn1");
stepsBtn1.addEventListener("click", () => saveSteps(500));
const stepsBtn2 = document.getElementById("steps-btn2");
stepsBtn2.addEventListener("click", () => saveSteps(1000));
const stepsBtn3 = document.getElementById("steps-btn3");
stepsBtn3.addEventListener("click", () => saveSteps(5000));
const stepsBtn4 = document.getElementById("steps-btn4");
stepsBtn4.addEventListener("click", () => saveSteps(8000));
const stepsBtn5 = document.getElementById("steps-btn5");
stepsBtn5.addEventListener("click", () => saveSteps(10000));
