// Toggle form visibility
const toggleFormButton = document.getElementById('toggle-form-button');
const formSection = document.getElementById('form-section');

toggleFormButton.addEventListener('click', () => {
    formSection.classList.toggle('hidden');
});

// Handle form submission for adding items to the list
const itemForm = document.getElementById('item-form');
const itemNameInput = document.getElementById('item-name');
const itemList = document.getElementById('item-list');
const itemError = document.getElementById('item-error');

itemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = itemNameInput.value.trim();

    if (itemName === '') {
        itemError.textContent = 'Item name is required';
        itemError.style.display = 'block';
    } else {
        itemError.style.display = 'none';
        
        // Add new item to the list
        const li = document.createElement('li');
        li.textContent = itemName;
        itemList.appendChild(li);

        // Clear the input field
        itemNameInput.value = '';
    }
});

// Handle form submission for updating dynamic text
const updateTextForm = document.getElementById('update-text-form');
const dynamicTextInput = document.getElementById('dynamic-text');
const dynamicTextDisplay = document.getElementById('dynamic-text-display');
const textError = document.getElementById('text-error');

updateTextForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newText = dynamicTextInput.value.trim();

    if (newText === '') {
        textError.textContent = 'Text cannot be empty';
        textError.style.display = 'block';
    } else {
        textError.style.display = 'none';
        
        // Update the dynamic text display
        dynamicTextDisplay.textContent = newText;

        // Clear the input field
        dynamicTextInput.value = '';
    }
});
