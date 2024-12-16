// Function to create the typing effect on <h1> element with the given ID
function typeHeading(elementId, speed) {
    const element = document.getElementById(elementId); // Select the <h1> element by its ID
    const text = element.textContent; // Get the current text content of the <h1> element
    let i = 0;

    element.textContent = ""; // Clear the content initially

    // Function to type one letter at a time
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i); // Add one character at a time
            i++;
            setTimeout(type, speed); // Call type() again with delay for typing effect
        }
    }

    type(); // Start the typing effect
}

// Initialize typing effect when the page loads
window.onload = function() {
    typeHeading('main-heading', 150); // Speed of typing (150ms per letter)
};




