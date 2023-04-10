/// Get the calculator elements
const screen = document.querySelector('.screen');
const keys = document.querySelector('.keys');

// Create a variable to store the calculator's value
let value = '';

// Add a click event listener to the keys element
keys.addEventListener('click', function(event) {
  // Get the clicked key's text content
  const key = event.target.textContent;
  
  // Handle each key press
  if (key === 'C') {
    // Clear the calculator
    value = '';
    screen.textContent = value;
  } else if (key === '=') {
    // Calculate the result
    value = eval(value);
    screen.textContent = value;
  } else {
    // Add the key's value to the calculator
    value += key;
    screen.textContent = value;
  }
});
