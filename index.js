// displaying current time on all pages

function updateCurrentDate() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
  const dateElement = document.getElementById('currentDate');
  dateElement.textContent = formattedDate;
}

updateCurrentDate();

// greeting

document.addEventListener("DOMContentLoaded", function () {
  var userName = localStorage.getItem("userName");

  if (!userName) {
      Swal.fire({
          title: 'Welcome to your Fitness Tracker!',
          input: 'text',
          inputPlaceholder: 'Please enter your name',
          confirmButtonText: 'Submit',
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
          greeting = 'Good Morning';
      } else if (hours < 18) {
          greeting = 'Good Afternoon';
      } else {
          greeting = 'Good Evening';
      }

      var h1Element = document.querySelector('.main-page__heading');
      h1Element.textContent = greeting + ', ' + name + '!';

      Swal.fire({
          title: greeting + ', ' + name + '!',
          text: 'Welcome to your Fitness Tracker. Let\'s get started!',
      });
  }
});