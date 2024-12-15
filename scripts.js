// Function to create typing animation
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error("Element not found: " + elementId);
        return;
    }

    element.innerHTML = ""; // Clear content before typing starts

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Add one character at a time
            i++;
            setTimeout(type, speed); // Call type function again after the defined speed
        }
    }
    
    type(); // Start the typing animation
}

// Initialize typing animation when the page loads
window.onload = function() {
    const titleText = "CareerPathways"; // The text you want to type out
    typeWriter('title', titleText, 150); // Speed of typing (in milliseconds)
};
