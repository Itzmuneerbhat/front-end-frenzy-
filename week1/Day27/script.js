// Get the button and section elements
const toggleButton = document.getElementById('toggle-button');
const toggleSection = document.getElementById('toggle-section');

// Function to toggle visibility and change color
toggleButton.addEventListener('click', () => {
    // Toggle visibility
    toggleSection.classList.toggle('visible');
    
    // Toggle background color
    toggleSection.classList.toggle('change-color');
});
