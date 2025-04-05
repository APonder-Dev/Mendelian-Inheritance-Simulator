document.getElementById("calculateButton").addEventListener("click", testOffspringHeight);

function testOffspringHeight() {
    const parent1Feet = parseInt(document.getElementById("parent1-feet").value) || 0;
    const parent1Inches = parseInt(document.getElementById("parent1-inches").value) || 0;
    const parent2Feet = parseInt(document.getElementById("parent2-feet").value) || 0;
    const parent2Inches = parseInt(document.getElementById("parent2-inches").value) || 0;

    const parent1Height = (parent1Feet * 12) + parent1Inches;
    const parent2Height = (parent2Feet * 12) + parent2Inches;
    const averageHeight = (parent1Height + parent2Height) / 2;

    const minHeight = Math.max(0, averageHeight - 3);
    const maxHeight = averageHeight + 3;

    const numberOfChildren = parseInt(document.getElementById("child-count").value) || 4;

    displayHeightResults(minHeight, maxHeight, numberOfChildren);
}

function displayHeightResults(minHeight, maxHeight, numberOfChildren) {
    const heightResultSection = document.getElementById("heightResult");
    heightResultSection.innerHTML = '';

    const minFeet = Math.floor(minHeight / 12);
    const minInches = Math.round(minHeight % 12);
    const maxFeet = Math.floor(maxHeight / 12);
    const maxInches = Math.round(maxHeight % 12);

    const averageTotal = (minHeight + maxHeight) / 2;
    const averageFeet = Math.floor(averageTotal / 12);
    const averageInches = Math.round(averageTotal % 12);

    const resultParagraph = document.createElement("p");
    resultParagraph.innerHTML = `
      <strong>Average Height:</strong> ${averageFeet} ft ${averageInches} in<br>
      <strong>Estimated Range:</strong> ${minFeet} ft ${minInches} in – ${maxFeet} ft ${maxInches} in
    `;
    heightResultSection.appendChild(resultParagraph);

    // Display generated child heights
    for (let i = 1; i <= numberOfChildren; i++) {
        const childHeight = getRandomHeight(minHeight, maxHeight);
        const childFeet = Math.floor(childHeight / 12);
        const childInches = Math.round(childHeight % 12);

        const childResult = document.createElement("p");
        childResult.textContent = `Child ${i} Height: ${childFeet} ft ${childInches} in`;
        heightResultSection.appendChild(childResult);
    }
}

function getRandomHeight(minHeight, maxHeight) {
    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
}
