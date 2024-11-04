function calculateBloodTypes() {
    const parent1 = document.getElementById('parent1').value;
    const parent2 = document.getElementById('parent2').value;
    const resultsDiv = document.getElementById('results');

    // Determine possible offspring based on parent genotypes
    const combinations = {
        "IAIA-IAIA": ["A"],
        "IAIA-IAi": ["A"],
        "IAIA-IBIB": ["AB"],
        "IAIA-IBi": ["A", "AB"],
        "IAIA-ii": ["A", "O"],
        "IAi-IAi": ["A", "O"],
        "IAi-IBIB": ["A", "B", "AB"],
        "IAi-IBi": ["A", "B", "AB", "O"],
        "IBIB-IBIB": ["B"],
        "IBIB-IBi": ["B"],
        "IBi-IBi": ["B", "O"],
        "IAIB-ii": ["A", "B"],
        "ii-ii": ["O"],
    };

    // Create a key from the parent genotypes
    const key = `${parent1}-${parent2}`;
    const possibleTypes = combinations[key] || [];

    // Display offspring blood types for four children
    const numChildren = 4;
    const offspringResults = [];

    for (let i = 0; i < numChildren; i++) {
        // Randomly select an offspring type from the possible types
        const randomType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
        offspringResults.push(randomType);
    }

    resultsDiv.innerHTML = `<h3>Possible Offspring Blood Types:</h3><p>${offspringResults.join(", ") || "No valid combinations."}</p>`;
}
