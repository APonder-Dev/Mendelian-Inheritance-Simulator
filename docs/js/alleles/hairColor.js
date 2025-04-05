document.getElementById("calculate").addEventListener("click", testOffspringHairColor);

function testOffspringHairColor() {
  const parent1Allele1 = document.getElementById('parent1Allele1').value;
  const parent1Allele2 = document.getElementById('parent1Allele2').value;
  const parent2Allele1 = document.getElementById('parent2Allele1').value;
  const parent2Allele2 = document.getElementById('parent2Allele2').value;
  const childCount = parseInt(document.getElementById('child-count')?.value) || 4;

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

  const allelesParent1 = [parent1Allele1, parent1Allele2];
  const allelesParent2 = [parent2Allele1, parent2Allele2];
  const possibleHairColors = [];

  allelesParent1.forEach(a1 => {
    allelesParent2.forEach(a2 => {
      possibleHairColors.push(alleleMapping[a1], alleleMapping[a2]);
    });
  });

  displayResults(possibleHairColors, childCount);
}

function displayResults(results, count) {
  const resultSection = document.getElementById("results");
  resultSection.innerHTML = '';

  const offspring = [];
  let totalColorIndex = 0;
  let minColorIndex = Infinity;
  let maxColorIndex = -Infinity;

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

  for (let i = 0; i < count; i++) {
    const color = results[Math.floor(Math.random() * results.length)];
    offspring.push(color);

    const value = colorIndexMap[color];
    totalColorIndex += value;
    minColorIndex = Math.min(minColorIndex, value);
    maxColorIndex = Math.max(maxColorIndex, value);
  }

  // Display offspring results with swatches
  offspring.forEach((color, index) => {
    const paragraph = document.createElement("p");
    const swatchVar = color.replace(/\s/g, ''); // remove spaces
    paragraph.innerHTML = `
      Child ${index + 1}: ${color}
      <span style="display:inline-block; width:20px; height:20px; background-color: var(--${swatchVar}); border-radius:50%; margin-left:8px; vertical-align:middle;"></span>
    `;
    resultSection.appendChild(paragraph);
  });

  // Display average and range
  const avg = document.createElement("p");
  avg.textContent = `Average Color Index: ${(totalColorIndex / count).toFixed(2)}`;
  resultSection.appendChild(avg);

  const range = document.createElement("p");
  range.textContent = `Color Range: ${minColorIndex} to ${maxColorIndex} (Range: ${maxColorIndex - minColorIndex})`;
  resultSection.appendChild(range);
}
