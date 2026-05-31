const facts = [
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "A day on Venus is longer than a year on Venus.",
    "Bananas are berries, but strawberries aren't.",
    "The shortest war in history lasted 38 minutes."
];

function displayFacts() {
    const container = document.getElementById('fact-display');
    container.innerHTML = "<ul>" + facts.map(f => `<li>${f}</li>`).join('') + "</ul>";
}

// Run when the page loads
window.onload = displayFacts;
