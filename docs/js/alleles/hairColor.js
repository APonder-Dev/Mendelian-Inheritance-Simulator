function testOffspringHairColor() {
    // Get alleles selected by the user for both parents
    const parent1Allele1 = document.getElementById('parent1Allele1').value;
    const parent1Allele2 = document.getElementById('parent1Allele2').value;
    const parent2Allele1 = document.getElementById('parent2Allele1').value;
    const parent2Allele2 = document.getElementById('parent2Allele2').value;

    // Define hair colors based on alleles
    const alleleMapping = {
        'b': 'Black',
        'br': 'Brown',
        'mb': 'Medium Brown',
        'lb': 'Light Brown',
        'bl': 'Blonde',
        'pb': 'Platinum Blonde',
        'r': 'Red',
        'sb': 'Strawberry Blonde',
        'g': 'Grey',
        'w': 'White'
    };

    // Collect all possible combinations of offspring hair colors
    const possibleHairColors = [];
    const allelesParent1 = [parent1Allele1, parent1Allele2];
    const allelesParent2 = [parent2Allele1, parent2Allele2];

    // Generate combinations of hair colors for offspring
    allelesParent1.forEach(allele1 => {
        allelesParent2.forEach(allele2 => {
            const hairColor1 = alleleMapping[allele1];
            const hairColor2 = alleleMapping[allele2];
            possibleHairColors.push(hairColor1, hairColor2);
        });
    });

    // Calculate and display results
    displayResults(possibleHairColors);
}

function displayResults(results) {
    const resultSection = document.getElementById("results");
    resultSection.innerHTML = '';

    const offspring = [];
    const offspringCount = 4;
    let totalColorIndex = 0;
    let minColorIndex = Infinity;
    let maxColorIndex = -Infinity;

    // Map hair colors to color indices for averaging
    const colorIndexMap = {
        'Black': 5,
        'Brown': 4,
        'Medium Brown': 3,
        'Light Brown': 2,
        'Blonde': 1,
        'Platinum Blonde': 1,
        'Red': 4,
        'Strawberry Blonde': 2,
        'Grey': 3,
        'White': 2
    };

    // Generate exactly 4 offspring colors from results
    for (let i = 0; i < offspringCount; i++) {
        const randomColor = results[Math.floor(Math.random() * results.length)];
        offspring.push(randomColor);
        totalColorIndex += colorIndexMap[randomColor];
        minColorIndex = Math.min(minColorIndex, colorIndexMap[randomColor]);
        maxColorIndex = Math.max(maxColorIndex, colorIndexMap[randomColor]);
    }

    // Calculate average color index
    const averageColorIndex = totalColorIndex / offspringCount;

    // Display offspring results
    offspring.forEach((color, index) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `Child ${index + 1}: ${color}`;
        resultSection.appendChild(paragraph);
    });

    // Display average color index and range
    const avgParagraph = document.createElement("p");
    avgParagraph.textContent = `Average Color Index: ${averageColorIndex.toFixed(2)}`;
    resultSection.appendChild(avgParagraph);

    const rangeParagraph = document.createElement("p");
    const colorRange = maxColorIndex - minColorIndex;
    rangeParagraph.textContent = `Color Range: ${minColorIndex} to ${maxColorIndex} (Range: ${colorRange})`;
    resultSection.appendChild(rangeParagraph);
}

// Attach event listener to the button to trigger hair color testing
document.getElementById("calculate").addEventListener("click", testOffspringHairColor);
