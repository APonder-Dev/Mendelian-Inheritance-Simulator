document.getElementById("calculateButton").addEventListener("click", testOffspringHeight);

function testOffspringHeight() {
    // Get parent heights in feet and inches
    const parent1Feet = parseInt(document.getElementById("parent1-feet").value) || 0;
    const parent1Inches = parseInt(document.getElementById("parent1-inches").value) || 0;
    const parent2Feet = parseInt(document.getElementById("parent2-feet").value) || 0;
    const parent2Inches = parseInt(document.getElementById("parent2-inches").value) || 0;

    // Convert heights to total inches
    const parent1Height = (parent1Feet * 12) + parent1Inches;
    const parent2Height = (parent2Feet * 12) + parent2Inches;

    // Calculate average height in inches
    const averageHeight = (parent1Height + parent2Height) / 2;

    // Determine possible height range (±3 inches for variability)
    const minHeight = Math.max(0, averageHeight - 3); 
    const maxHeight = averageHeight + 3;

    // Display the results
    displayHeightResults(minHeight, maxHeight);
}

function displayHeightResults(minHeight, maxHeight) {
    const heightResultSection = document.getElementById("heightResult");
    heightResultSection.innerHTML = '';

    // Convert min and max heights to feet and inches
    const minFeet = Math.floor(minHeight / 12);
    const minInches = minHeight % 12;
    const maxFeet = Math.floor(maxHeight / 12);
    const maxInches = maxHeight % 12;

    // Calculate average height in feet and inches for display
    const averageFeet = Math.floor((minHeight + maxHeight) / 2 / 12);
    const averageInches = Math.floor((minHeight + maxHeight) / 2 % 12);

    const heightRangeText = `
        Average Height: ${averageFeet} ft ${averageInches} in
        Height Range: ${minFeet} ft ${minInches} in - ${maxFeet} ft ${maxInches} in
    `;

    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = heightRangeText;
    heightResultSection.appendChild(resultParagraph);
    
    // Generate and display heights for 4 children
    for (let i = 1; i <= 4; i++) {
        const childHeight = getRandomHeight(minHeight, maxHeight);
        const childFeet = Math.floor(childHeight / 12);
        const childInches = childHeight % 12;

        const childResultParagraph = document.createElement("p");
        childResultParagraph.textContent = `Child ${i} Height: ${childFeet} ft ${childInches} in`;
        heightResultSection.appendChild(childResultParagraph);
    }
}

function getRandomHeight(minHeight, maxHeight) {
    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
}
