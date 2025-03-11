const gridItems = document.querySelectorAll('.grid-item');

let draggedItem = null;

// Event Listeners for Drag & Drop
gridItems.forEach(item => {
    item.addEventListener('dragstart', () => {
        draggedItem = item;
        item.classList.add('dragging');
    });

    item.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    item.addEventListener('dragenter', (event) => {
        event.preventDefault();
        if (item !== draggedItem) {
            item.style.border = "2px dashed #007bff";
        }
    });

    item.addEventListener('dragleave', () => {
        item.style.border = "none";
    });

    item.addEventListener('drop', () => {
        if (item !== draggedItem) {
            // Swap images
            let temp = item.style.backgroundImage;
            item.style.backgroundImage = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = temp;
        }
        item.style.border = "none";
    });

    item.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
    });
});
