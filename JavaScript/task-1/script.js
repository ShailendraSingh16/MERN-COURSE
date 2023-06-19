// Get the date and time elements
const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');
const showDateTimeButton = document.getElementById('showDateTimeButton');

// Function to update the date and time
function updateDateTime() {
  // Get the current date and time
  const now = new Date();

  // Format the date and time
  const date = now.toDateString();
  const time = now.toLocaleTimeString();

  // Update the date and time elements
  dateElement.textContent = 'Date: ' + date;
  timeElement.textContent = 'Time: ' + time;
}

// Event listener for the button click
showDateTimeButton.addEventListener('click', updateDateTime);

// Update the date and time initially
updateDateTime();
