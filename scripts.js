// Function to update the size display
function updateSizeDisplay() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeDisplay = document.getElementById('sizeDisplay');
    sizeDisplay.textContent = `Width: ${width}px, Height: ${height}px`;
}

// Initial display update
updateSizeDisplay();

// Add event listener for window resize
window.addEventListener('resize', updateSizeDisplay);
