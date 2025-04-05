function calculateBloodTypes() {
    const parent1 = document.getElementById('parent1').value;
    const parent2 = document.getElementById('parent2').value;
    const resultsDiv = document.getElementById('results');
    const childCount = parseInt(document.getElementById('child-count')?.value) || 4;

    const combinations = {
        "IAIA-IAIA": ["A"],
        "IAIA-IAi": ["A"],
        "IAIA-IBIB": ["AB"],
        "IAIA-IBi": ["A", "AB"],
        "IAIA-ii": ["A"],
        "IAi-IAi": ["A", "O"],
        "IAi-IBIB": ["A", "B", "AB"],
        "IAi-IBi": ["A", "B", "AB", "O"],
        "IAi-ii": ["A", "O"],
        "IBIB-IBIB": ["B"],
        "IBIB-IBi": ["B"],
        "IBIB-ii": ["B", "O"],
        "IBi-IBi": ["B", "O"],
        "IAIB-ii": ["A", "B"],
        "IAIB-IAIB": ["A", "B", "AB"],
        "IAIB-IAi": ["A", "AB", "B"],
        "IAIB-IBi": ["B", "AB", "A"],
        "ii-ii": ["O"],
        "ii-IAi": ["A", "O"],
        "ii-IBi": ["B", "O"]
    };

    const key1 = `${parent1}-${parent2}`;
    const key2 = `${parent2}-${parent1}`;
    const possibleTypes = combinations[key1] || combinations[key2] || [];

    const offspringResults = [];

    for (let i = 0; i < childCount; i++) {
        const randomType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
        offspringResults.push(randomType);
    }

    // Count occurrences of each type
    const typeCounts = offspringResults.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    // Format and display results
    resultsDiv.innerHTML = `<h3 class="text-xl font-semibold mb-2">Possible Offspring Blood Types</h3>`;
    offspringResults.forEach((type, index) => {
        const p = document.createElement("p");
        p.textContent = `Child ${index + 1}: ${type}`;
        resultsDiv.appendChild(p);
    });

    const summary = document.createElement("p");
    summary.className = "mt-4 font-medium";
    summary.innerHTML = `Summary: ${Object.entries(typeCounts)
        .map(([type, count]) => `${type} (${count})`)
        .join(', ')}`;
    resultsDiv.appendChild(summary);
}
