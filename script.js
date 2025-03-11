//your code here
// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Add event listeners to each grid item
gridItems.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('drop', handleDrop);
});

// Function to handle drag start
function handleDragStart(event) {
    // Set the data transfer effect
    event.dataTransfer.effectAllowed = 'move';

    // Set the data transfer item
    event.dataTransfer.setData('item', event.target.id);
}

// Function to handle drag over
function handleDragOver(event) {
    // Prevent the default behavior
    event.preventDefault();

    // Set the data transfer effect
    event.dataTransfer.dropEffect = 'move';
}

// Function to handle drag leave
function handleDragLeave(event) {
    // Remove the hover effect
    event.target.classList.remove('hover');
}

// Function to handle drop
function handleDrop(event) {
    // Prevent the default behavior
    event.preventDefault();

    // Get the dropped item
    const droppedItem = event.dataTransfer.getData('item');

    // Get the target item
    const targetItem = event.target;

    // Swap the items
    swapItems(droppedItem, targetItem.id);
}

// Function to swap items
function swapItems(item1, item2) {
    // Get the items
    const item1Element = document.getElementById(item1);
    const item2Element = document.getElementById(item2);

    // Swap the items
    const temp = item1Element.style.backgroundImage;
    item1Element.style.backgroundImage = item2Element.style.backgroundImage;
    item2Element.style.backgroundImage = temp;
}
