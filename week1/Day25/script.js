// Array of items to display
let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Get the HTML element where we want to display the list
let itemList = document.getElementById('item-list');

// Loop through the items array and create list items
for (let i = 0; i < items.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = items[i];
    itemList.appendChild(listItem);
}
